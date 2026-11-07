import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const definitions = readFileSync('public/__forms.html', 'utf8');
for (const [route, name, fields] of [
 ['contact', 'contact', ['first-name','last-name','email','phone','enquiry-type','message']],
 ['request-sample', 'sample-request', ['first-name','last-name','email','company','industry','sample-type','address','city','notes']]
]) {
 const html = readFileSync(`out/${route}.html`, 'utf8');
 assert.ok(html.includes(`name="${name}"`), `${route}: form name`);
 assert.ok(html.includes('method="POST"'), `${route}: safe POST fallback`);
 assert.ok(html.includes('data-netlify="true"'), `${route}: Netlify detection`);
 assert.ok(html.includes('netlify-honeypot="bot-field"'), `${route}: honeypot`);
 const subject = name === 'contact' ? 'WestLabelCo website enquiry' : 'WestLabelCo website sample request';
 assert.equal((html.match(/name="subject"/g) || []).length, 1, `${route}: exactly one notification subject`);
 assert.ok(html.includes(`name="subject" value="${subject}"`), `${route}: stable notification subject`);
 const schema = definitions.match(new RegExp(`<form name="${name}"[\\s\\S]*?</form>`))[0];
 assert.ok(schema.includes(`name="subject" value="${subject}"`), `${route}: registered subject`);
 if (route === 'contact') assert.ok(html.includes('for="enquiry-type"'), 'Contact category label is associated');
 for (const field of fields) {
  assert.ok(html.includes(`name="${field}"`), `${route}: missing ${field}`);
  assert.ok(definitions.includes(`name="${field}"`), `${route}: unregistered ${field}`);
 }
 assert.ok(html.includes('required=""'), `${route}: validation`);
}
assert.ok(readFileSync('out/enquiry-received.html','utf8').includes('Thank you for your enquiry'));
console.log('PASS: both exported form schemas, POST fallbacks, honeypots and confirmation route');
