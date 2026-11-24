from pathlib import Path
from urllib.parse import unquote,quote
from urllib.request import Request,urlopen
from PIL import Image,ImageOps
from io import BytesIO
import json,hashlib,concurrent.futures,time
base=Path('public/nearby-images');base.mkdir(parents=True,exist_ok=True)
sources=json.loads(Path('scripts/nearby-image-sources.json').read_text())
def acquire(item):
    slug,s=item
    candidates=list(s.get('preferred',[]))
    if s['commons']:
        title=unquote(s['commons'].split('/wiki/')[1]).split('File:',1)[1].replace(' ','_')
        digest=hashlib.md5(title.encode('utf-8')).hexdigest()
        prefix='https://upload.wikimedia.org/wikipedia/commons/'
        key=digest[0]+'/'+digest[:2]+'/'+quote(title,safe='()_')
        candidates.extend([(prefix+'thumb/'+key+'/1280px-'+quote(title,safe='()_'),s['commons']),(prefix+key,s['commons'])])
    candidates.append((s['url'],s['page']))
    candidates.extend(s.get('alternates',[]))
    failures=[]
    for url,credit in dict.fromkeys(tuple(pair) for pair in candidates):
        try:
            with urlopen(Request(url,headers={'User-Agent':'Saqsaywaman-Travel-Guide/1.0 (visitor guide image retrieval; https://www.sacsayhuamanruins.com/)'}),timeout=18) as res:
                raw=res.read(26_000_000)
            im=ImageOps.exif_transpose(Image.open(BytesIO(raw))).convert('RGB')
            if im.width<300 or im.height<180: raise ValueError('small image')
            im.thumbnail((1200,900))
            f=base/(slug+'.webp')
            im.save(f,'WEBP',quality=81,method=4)
            return slug,{'page':credit,'original':url,'width':im.width,'height':im.height,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()}
        except Exception as err: failures.append(str(err))
    return slug,{'errors':failures}
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool: records=dict(pool.map(acquire,sources.items()))
Path('scripts/nearby-image-results.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
failed=[k for k,v in records.items() if 'errors' in v]
print('Images retrieved',len(records)-len(failed),'of',len(records),'missing:',failed,flush=True)
if failed: raise SystemExit(1)
assert len({r['sha256'] for r in records.values()})==31
data=Path('src/data/nearby.json')
guides=json.loads(data.read_text())
for g in guides:
    g['photo']='/nearby-images/'+g['slug']+'.webp'
    g['credit']=records[g['slug']]['page']
data.write_text(json.dumps(guides,ensure_ascii=False,indent=2)+'\n')
