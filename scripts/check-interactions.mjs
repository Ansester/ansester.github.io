import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = readFileSync('src/layouts/Layout.astro','utf8');
const styles = readFileSync('src/styles/global.css','utf8');
assert.match(source, /<meta name="color-scheme" content="light"\s*\/>/);
assert.match(styles, /:root\s*\{\s*color-scheme:light;/);
assert.doesNotMatch(source + styles, /theme-toggle|data-theme|prefers-color-scheme|light-dark\(|localStorage|matchMedia/);
const script = source.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
const js = ts.transpileModule(script,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
function harness({clipboardFails=false,clipboardAvailable=true}={}) {
  const handlers = {}, status = {};
  const copy = {hidden:true, addEventListener:(_event,cb)=>handlers.copy=cb};
  const document = {querySelector:s=>s==='.copy-email'?copy:s==='.copy-status'?status:null};
  const navigator = {clipboard:clipboardAvailable?{writeText:async text=>{assert.equal(text,'asm8879@nyu.edu');if(clipboardFails)throw Error('denied');}}:undefined};
  runInNewContext(js,{document,navigator});
  return {handlers,status,copy};
}
const enabled = harness();
assert.equal(enabled.copy.hidden,false);
await enabled.handlers.copy();
assert.equal(enabled.status.textContent,'Email address copied.');
const denied=harness({clipboardFails:true});
await denied.handlers.copy();
assert.match(denied.status.textContent,/Select the email address/);
const unavailable=harness({clipboardAvailable:false});
assert.equal(unavailable.copy.hidden,true);
assert.equal(unavailable.handlers.copy,undefined);
console.log('Passed: fixed light presentation, no theme preference code, clipboard success/denial, and unavailable clipboard.');
