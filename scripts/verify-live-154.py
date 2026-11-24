import json,pathlib,subprocess,time,concurrent.futures,hashlib,sys,os
from html.parser import HTMLParser
from urllib.request import urlopen,Request
p=pathlib.Path('evidence/154');p.mkdir(parents=True,exist_ok=True)
langset=['en','es','zh','qu']; guides=json.loads(pathlib.Path('src/data/nearby.json').read_text())
domain='https://www.sacsayhuamanruins.com'
sha=os.environ['PRODUCTION_SHA']
def get(url):
    req=Request(url,headers={'User-Agent':'Saqsaywaman-visitor-guide-QA/1.0','Cache-Control':'no-cache'})
    with urlopen(req,timeout=22) as res:return res.read(),dict(res.headers)
class Body(HTMLParser):
    def __init__(self):
        super().__init__();self.tags=[];self.text=[];self.anchors=[];self.canon='';self.images=[];self.language='';self.main=False
    def handle_starttag(self,t,attrs):
        a=dict(attrs);self.tags.append(t)
        if t=='html':self.language=a.get('lang','')
        if t=='a':self.anchors.append(a.get('href',''))
        if t=='link' and a.get('rel')=='canonical':self.canon=a.get('href','')
        if t=='img':self.images.append(a.get('src',''))
        if t=='main':self.main=True
    def handle_endtag(self,t):
        if t=='main':self.main=False
    def handle_data(self,d):
        if self.main:self.text.append(d)
def check(pair):
    l,g=pair; url=domain+'/'+l+'/nearby/'+g['slug']+'/'
    for _ in range(2):
        try:
            raw,headers=get(url);b=Body();b.feed(raw.decode());s=' '.join(b.text)
            c=g['copy'][l]
            assert b.tags.count('h1')==1 and b.tags.count('h2')>=16 and b.tags.count('details')==3 and 'footer' in b.tags and 'ol' in b.tags
            assert b.canon==url and b.language==('zh-CN' if l=='zh' else l)
            assert all(c[k] in s for k in ['name','history','experience','route','photoTip'] if k!='route')
            assert c['route'].split('. ')[0].split('。')[0] in s
            assert g['photo'] in b.images and any('google.com/maps/search' in a for a in b.anchors)
            for x in langset: assert '/'+x+'/nearby/'+g['slug']+'/' in b.anchors
            return {'url':url,'ok':True,'bodySha':hashlib.sha256(s.encode()).hexdigest(),'footer':True,'sections':b.tags.count('h2'),'faq':3,'cloudflareRay':headers.get('CF-Ray',headers.get('cf-ray',''))}
        except Exception as e:err=repr(e);time.sleep(2)
    return {'url':url,'ok':False,'error':err}
data={'row':154,'repository':'n20186005-hash/sacsayhuamanruins','domain':domain,'production':sha,'cfChecks':[]}
for _ in range(35):
    try:
        u='https://api.github.com/repos/n20186005-hash/sacsayhuamanruins/commits/'+sha+'/check-runs'
        r=json.load(urlopen(Request(u,headers={'Authorization':'Bearer '+os.environ['GH_TOKEN'],'User-Agent':'guide-release-audit'}),timeout=12))
        data['cfChecks']=[{'name':c['name'],'status':c['status'],'conclusion':c['conclusion'],'details_url':c.get('details_url')} for c in r['check_runs'] if 'cloudflare' in c['name'].lower() or 'workers' in c['name'].lower()]
        body,_=get(domain+'/qu/nearby/qenqo/')
        if b'/nearby-images/qenqo.webp' in body:break
    except Exception:pass
    time.sleep(8)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:data['pages']=list(pool.map(check,[(l,g) for l in langset for g in guides]))
data['homeLinks']={};data['images']={}
for l in langset:
    try:
        b=Body();b.feed(get(domain+'/'+l+'/')[0].decode());data['homeLinks'][l]=sum('/'+l+'/nearby/'+g['slug']+'/' in b.anchors for g in guides)
    except Exception as e:data['homeLinks'][l]=str(e)
def image(g):
    try:
        b,_=get(domain+g['photo']);assert b[:4]==b'RIFF' and b[8:12]==b'WEBP';return (g['slug'],hashlib.sha256(b).hexdigest())
    except Exception as e:return(g['slug'],None)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:data['images']=dict(pool.map(image,guides))
(p/'production.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
assert all(x['ok'] for x in data['pages']) and len(set(data['images'].values()))==31 and None not in data['images'].values() and set(data['homeLinks'].values())=={31}
print('124 production pages and 31 distinct images passed.')
