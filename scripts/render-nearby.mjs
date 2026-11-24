import fs from 'node:fs';
import path from 'node:path';
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const guides = read('src/data/nearby.json');
const {labels,extra,policy} = read('src/data/guide-ui.json');
function renderGuide(g,l,home,all,labels,extra,policy){
 const langs=['en','es','zh','qu'],i=langs.indexOf(l),t=labels[l],c=g.copy[l],base='https://www.sacsayhuamanruins.com',path=`/${l}/nearby/${g.slug}/`,map='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(g.copy.es.name+', '+g.address+', Perú');
 const e=(s)=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 const a=(href,text)=>`<a href="${e(href)}">${e(text)}</a>`;
 const section=(title,body,id='')=>`<section${id?` id="${id}"`:''}><h2>${e(title)}</h2>${body}</section>`;
 const p=(s)=>`<p>${e(s)}</p>`, rate='https://cosituc.gob.pe/tarifario-2/';
 const circuit=g.mode==='north'?'I':['casa-garcilaso','museo-arte-contemporaneo','monumento-pachacutec','museo-arte-popular','tipon','pikillacta'].includes(g.slug)?'II':['pisac','ollantaytambo','chinchero','moray'].includes(g.slug)?'III':'';
 const fees=circuit?extra.ticket[i].replace('{n}',circuit):extra[g.mode==='square'?'square':g.mode==='market'?'market':'other'][i];
 const hours=g.slug==='casa-garcilaso'?['The museum publishes 08:00–17:00 daily, including holidays. Check its reduced-hours notices before travel.','El museo publica 08:00–17:00 todos los días, incluidos festivos. Revisa sus avisos de horario reducido.','馆方公布每日（含节假日）08:00–17:00，请另查缩短开放时段的通知。','Museoqa sapa p’unchaw, raymi p’unchawpipas 08:00–17:00 kichasqa kasqanta willan. Pisi hora willayta manaraq rispa tapuy.'][i]:policy[g.mode][0][i];
 const city=all.findIndex(x=>x.slug===g.slug)<17&&g.mode!=='north',valley=['pisac','ollantaytambo','chinchero','moray','salineras-maras','huchuy-qosqo','chincheros-iglesia'].includes(g.slug),length=g.slug==='huchuy-qosqo'?extra.day[i]:`${g.minutes} ${t[33]}`;
 const legal={en:['Privacy Policy','Terms of Service','Cookie Settings'],es:['Privacidad','Condiciones de uso','Preferencias de cookies'],zh:['隐私政策','服务条款','Cookie 设置'],qu:['Sapalla willaypa waqaychaynin','Llamk’achina kamachiy','Cookie akllanakuna']};
 const footer=home.match(/<footer\b[\s\S]*?<\/footer>/)[0].replace(/>Privacy Policy</g,'>'+legal[l][0]+'<').replace(/>Terms of Service</g,'>'+legal[l][1]+'<').replace(/>Cookie Settings</g,'>'+legal[l][2]+'<');
 const nav=home.match(/<nav\b[\s\S]*?<\/nav>/)[0].replace('site-nav ','site-nav scrolled').replaceAll('href="#',`href="/${l}/#`).replace(/<div class="lang-switcher">[\s\S]*?<\/div>/,`<div class="detail-languages">${langs.map((x,j)=>`<a lang="${x}" href="/${x}/nearby/${g.slug}/"${x===l?' aria-current="page"':''}>${['EN','ES','中文','QU'][j]}</a>`).join('')}</div>`).replace(/(<div class="nav-links">)(?!<a href="[^"]*#nearby")/, (_,open)=>open+a('/'+l+'/#nearby',t[0]));
 const facts=[[t[17],g.copy.es.name],[t[18],g.address],[t[19],g.authority],[t[20],length],[t[7],fees]];
 const rawSteps=c.route.match(/[^.!?。！？]+[.!?。！？]*/gu)?.map(x=>x.trim()).filter(Boolean)??[c.route];const route=rawSteps.length===1?[g.address,...rawSteps,c.photoTip]:[g.address,...rawSteps];
 const headings=home.match(/<link[^>]*(?:fonts.googleapis.com|_astro\/[^"]+\.css)[^>]*>/g)||[];
 const link=document=>a(map,document);
 const faq=[[t[26],c.route],[t[27],c.photoTip],[t[28],hours+' '+fees]];
 const nearby=all.filter(x=>x.slug!==g.slug).sort((x,y)=>Number(y.mode===g.mode)-Number(x.mode===g.mode)).slice(0,3);
 const jsonld={'@context':'https://schema.org','@type':'TouristAttraction',name:c.name,description:c.history,url:base+path,image:new URL(g.photo,base).href,hasMap:map,address:{'@type':'PostalAddress',streetAddress:g.address,addressRegion:'Cusco',addressCountry:'PE'}};
 return `<!doctype html><html lang="${l==='zh'?'zh-CN':l}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(c.name)} | Saqsaywaman</title><meta name="description" content="${e(c.history)}"><link rel="canonical" href="${base+path}">${langs.map(x=>`<link rel="alternate" hreflang="${x}" href="${base}/${x}/nearby/${g.slug}/">`).join('')}<link rel="alternate" hreflang="x-default" href="${base}/en/nearby/${g.slug}/"><meta property="og:title" content="${e(c.name)}"><meta property="og:image" content="${e(new URL(g.photo,base).href)}">${headings.join('')}<link rel="stylesheet" href="/nearby-guides.css"><script type="application/ld+json">${JSON.stringify(jsonld).replaceAll('<','\\u003c')}</script></head><body>${nav}<main><header class="guidehero"><img src="${e(g.photo)}" alt="${e(c.name)}" fetchpriority="high" referrerpolicy="no-referrer"><div><p>Cusco · Perú</p><h1>${e(c.name)}</h1>${p(c.tag)}<nav>${a('#reviews',t[21])}${a('#hours',t[6])}${a(map,t[22])}</nav></div></header><article class="garticle">${a('/'+l+'/#nearby',t[0])}
${section(t[1],p(c.history))}${section(t[2],p(length+' · '+extra.short[i]))}${section(t[3],p(c.tag)+p(c.photoTip))}
${section(t[4],p(g.copy.es.name+' · '+g.address)+a(g.source,g.authority))}${section(t[5],`<dl>${facts.map(([k,v])=>`<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join('')}</dl>`)}
${section(t[6],p(hours)+a(g.source,t[34]),'hours')}${section(t[7],p(fees)+a(circuit?rate:g.source,circuit?'COSITUC':t[34]))}${section(t[8],p(extra[g.slug==='huchuy-qosqo'?'hike':city?'walk':'drive'][i])+link(t[35]))}
${section(t[9],p(c.experience))}${section(t[10],`<ol>${route.map(s=>`<li>${e(s)}</li>`).join('')}</ol>`)}${section(t[11],p(rawSteps[rawSteps.length-1]))}${section(t[12],`<img class="guide-photo" loading="lazy" referrerpolicy="no-referrer" src="${e(g.photo)}" alt="${e(c.name)}">`+p(c.photoTip)+a(g.credit,t[24]))}
${section(t[13],p(extra[city?'cityStay':valley?'valleyStay':'roadStay'][i]))}${section(t[14],p(t[23])+link(t[21]),'reviews')}${section(t[15],`<address>${e(g.address)}, Perú</address>`+link(t[35]))}${section(t[16],faq.map(([q,v])=>`<details><summary>${e(q)}</summary>${p(v)}</details>`).join(''))}${section(t[25],`<div class="glist">${nearby.map(x=>a(`/${l}/nearby/${x.slug}/`,x.copy[l].name)).join('')}</div>`)}</article></main>${footer}</body></html>`;
}
for (const lang of Object.keys(labels)) {
  const home = fs.readFileSync(path.join('dist', lang, 'index.html'), 'utf8');
  for (const guide of guides) {
    const target=path.join('dist',lang,'nearby',guide.slug);
    fs.mkdirSync(target,{recursive:true});
    fs.writeFileSync(path.join(target,'index.html'),renderGuide(guide,lang,home,guides,labels,extra,policy));
  }
}
console.log('Rendered',guides.length*Object.keys(labels).length,'nearby guides.');
