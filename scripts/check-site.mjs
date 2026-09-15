import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { parseHTML } from 'linkedom';

const root = resolve('dist');
const files = (directory) => readdirSync(directory).flatMap(name => {
  const path = join(directory, name);
  return statSync(path).isDirectory() ? files(path) : [path];
});
const htmlFiles = files(root).filter(path=>path.endsWith('.html'));
const documents = new Map(htmlFiles.map(path=>[path, parseHTML(readFileSync(path,'utf8')).document]));
const resolveURL = (url) => {
  let path = join(root, decodeURIComponent(url.pathname));
  if (existsSync(path) && statSync(path).isDirectory()) path = join(path, 'index.html');
  return path;
};
let checkedLinks = 0;
for (const [path,doc] of documents) {
  const name = relative(root,path);
  const url = new URL('/'+name.replace(/index\.html$/,''),'https://ashmitmukherjee.com');
  assert(doc.querySelector('title')?.textContent, `${name}: title missing`);
  assert.equal(doc.documentElement.getAttribute('lang'),'en', `${name}: language missing`);
  assert(doc.querySelector('meta[name="viewport"]'),`${name}: viewport missing`);
  assert(doc.querySelector('link[rel="canonical"]'),`${name}: canonical missing`);
  const redirect = doc.querySelector('meta[http-equiv="refresh"]');
  if (!redirect) {
    assert.equal(doc.querySelectorAll('h1').length,1,`${name}: expected one h1`);
    assert.equal(doc.querySelectorAll('main').length,1,`${name}: expected one main`);
    assert(doc.querySelector('meta[name="description"]')?.getAttribute('content'),`${name}: description missing`);
    const ids = [...doc.querySelectorAll('[id]')].map(el=>el.id);
    assert.equal(new Set(ids).size,ids.length,`${name}: duplicate ids`);
    for (const img of doc.querySelectorAll('img')) {
      assert(img.hasAttribute('alt'),`${name}: image alt missing`);
      assert(img.getAttribute('width') && img.getAttribute('height'),`${name}: image dimensions missing`);
    }
    for (const button of doc.querySelectorAll('button')) {
      assert(button.textContent.trim() || button.getAttribute('aria-label'),`${name}: unnamed button`);
    }
  }
  for (const element of doc.querySelectorAll('a[href],img[src],script[src],link[href]')) {
    const value = element.getAttribute('href') || element.getAttribute('src');
    if (/^(mailto:|tel:|data:)/.test(value)) continue;
    const target = new URL(value,url);
    if (target.origin !== url.origin) continue;
    if (element.getAttribute('rel') === 'canonical') continue;
    const targetPath = resolveURL(target);
    assert(existsSync(targetPath),`${name}: missing ${value}`);
    if (target.hash && documents.has(targetPath)) {
      assert(documents.get(targetPath).getElementById(decodeURIComponent(target.hash.slice(1))),`${name}: missing anchor ${value}`);
    }
    checkedLinks++;
  }
  if (redirect) {
    const target = redirect.getAttribute('content').split('url=')[1];
    assert(target,`${name}: redirect target missing`);
    assert(existsSync(resolveURL(new URL(target,url))),`${name}: redirect destination missing`);
    assert(doc.querySelector(`a[href="${target}"]`),`${name}: redirect fallback missing`);
  }
  const content = doc.body.textContent;
  assert(!/3,000\+|87%|0\.85|15\+ models|Achieved 78%/.test(content),`${name}: superseded claim returned`);
}
const home = documents.get(join(root,'index.html'));
for(const id of ['main','projects','research','experience','background','about','contact']) assert(home.getElementById(id),`Legacy anchor missing: ${id}`);
for(const route of ['human-ai-collaboration','protein-language-models','camp','hinglish-ner']) assert(documents.has(join(root,'work',route,'index.html')),`Case study missing: ${route}`);
assert.equal(readFileSync(join(root,'cv.pdf')).compare(readFileSync('cv.pdf')),0,'Public CV differs from source PDF');
assert.equal(readFileSync(join(root,'CNAME'),'utf8').trim(),'ashmitmukherjee.com');
assert(existsSync(join(root,'sitemap-index.xml')),'Sitemap missing');
assert(!existsSync(join(root,'cv.tex')),'CV source should not be in public output');
assert(!existsSync(join(root,'CLAIM_AUDIT.md')),'Internal claim audit should not be in public output');
console.log(`Passed: ${htmlFiles.length} pages, ${checkedLinks} local links/assets, four case studies, legacy anchors, metadata, CV parity, and claim regression checks.`);
