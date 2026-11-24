import fs from 'node:fs';
import assert from 'node:assert/strict';
const places=JSON.parse(fs.readFileSync('src/data/nearby.json','utf8'));
assert.equal(places.length,31);
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
for(const lang of ['en','es','zh','qu']) {
  const home=fs.readFileSync('dist/'+lang+'/index.html','utf8');
  for(const site of places) {
    const url='/'+lang+'/nearby/'+site.slug+'/';
    const doc=fs.readFileSync('dist'+url+'index.html','utf8');
    assert(home.includes('href="'+url+'"'),url+' home');
    assert(sitemap.includes('https://www.sacsayhuamanruins.com'+url+'</loc>'),url+' sitemap');
    for(const text of [site.copy[lang].name,site.copy[lang].history,site.copy[lang].experience,site.copy[lang].photoTip,'<footer',site.photo.split('?')[0],'<ol>','www.google.com/maps/search/']) assert(doc.includes(text.replaceAll('&','&amp;').replaceAll('"','&quot;')),url+' missing '+text.slice(0,28));
    assert.equal((doc.match(/<details>/g)||[]).length,3);
    assert.equal((doc.match(/<h1>/g)||[]).length,1);
  }
}
console.log('124 pages verified, with 31 links from each language homepage.');
