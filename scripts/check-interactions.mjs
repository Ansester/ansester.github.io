import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = readFileSync('src/layouts/Layout.astro','utf8');
const script = source.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
const js = ts.transpileModule(script,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
function harness({saved,storageFails=false,clipboardFails=false,clipboardAvailable=true}={}) {
  const handlers = {}, attributes = {}, label = {}, status = {};
  const button = {hidden:true, setAttribute:(k,v)=>attributes[k]=v, querySelector:()=>label, addEventListener:(_event,cb)=>handlers.theme=cb};
  const copy = {hidden:true, addEventListener:(_event,cb)=>handlers.copy=cb};
  const root = {dataset:saved ? {theme:saved} : {}};
  const storage = {getItem:()=>{if(storageFails)throw Error('blocked');return saved;},setItem:()=>{if(storageFails)throw Error('blocked');}};
  const document = {documentElement:root,querySelector:s=>s==='.theme-toggle'?button:s==='.copy-email'?copy:status};
  const navigator = {clipboard:clipboardAvailable?{writeText:async text=>{assert.equal(text,'asm8879@nyu.edu');if(clipboardFails)throw Error('denied');}}:undefined};
  const context={document,navigator,localStorage:storage,window:{matchMedia:()=>({matches:true,addEventListener:()=>{}})}};
  const initializer = source.match(/<script is:inline>\s*([\s\S]*?)<\/script>/)[1];
  runInNewContext(initializer,context);
  runInNewContext(js,context);
  return {handlers,root,label,status,button,copy,attributes};
}
const blocked = harness({storageFails:true});
assert.equal(blocked.button.hidden,false);
blocked.handlers.theme();
assert.equal(blocked.root.dataset.theme,'light');
assert.equal(blocked.attributes['aria-label'],'Switch to dark theme');
await blocked.handlers.copy();
assert.equal(blocked.status.textContent,'Email address copied.');
const denied=harness({clipboardFails:true,saved:'light'});
assert.equal(denied.label.textContent,'Dark');
await denied.handlers.copy();
assert.match(denied.status.textContent,/Select the email address/);
const unavailable=harness({clipboardAvailable:false});
assert.equal(unavailable.copy.hidden,true);
console.log('Passed: blocked storage, saved theme, live theme toggle, clipboard success/denial, and unavailable clipboard.');
