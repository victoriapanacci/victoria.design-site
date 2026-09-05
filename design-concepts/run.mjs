import { P, FONTS, BASE, lab, hr, C, writeFileSync } from './build.mjs';
import { emit } from './emit.mjs';
import { A } from './concepts-a.mjs';
import { B } from './concepts-b.mjs';
import { D } from './concepts-c.mjs';

const all = [...A, ...B, ...D];
if (all.length !== 20) throw new Error('expected 20 concepts, got ' + all.length);

const families = [
  ['Document-led', ['C01Dossier','C02Index','C05Ledger','C09Brief','C11Spec','C20Reduction'],
   'The page behaves like a paper the reader already knows how to skim.'],
  ['Type-led', ['C06Marquee','C15Editorial','C16Poster'],
   'Typography does the work; the reader is meant to feel your craft before reading a word.'],
  ['Work-led', ['C10Gallery','C08Timeline','C19Mosaic'],
   'The projects lead. These are the ones that live or die on the six photographs.'],
  ['Conversion-led', ['C03Card','C12Questions','C13ThreeDoors','C18BookFirst'],
   'Built around the producer’s decision, not your story.'],
  ['App-led', ['C04Split','C07Tabs','C14Console','C17Stack'],
   'The structure itself is the proof that you build, not just draw.']
];


// Frame heights: generous slack so nothing clips. Root min-height matches the
// frame, so surplus paints the artboard's own background rather than the canvas.
const FRAME_H = {
  C01Dossier: 2520, C02Index: 2240, C03Card: 1140, C04Split: 2020,
  C05Ledger: 2180, C06Marquee: 2340, C07Tabs: 1080, C08Timeline: 2420,
  C09Brief: 2520, C10Gallery: 2420, C11Spec: 2120, C12Questions: 2700,
  C13ThreeDoors: 1940, C14Console: 1840, C15Editorial: 2340, C16Poster: 1900,
  C17Stack: 2680, C18BookFirst: 1900, C19Mosaic: 1770, C20Reduction: 1460
};
for (const c of all) if (FRAME_H[c.id]) c.h = FRAME_H[c.id];

const byId = Object.fromEntries(all.map(c => [c.id, c]));
const num = Object.fromEntries(all.map((c, i) => [c.id, String(i + 1).padStart(2, '0')]));

// ---------------- Main: the legend ----------------
const mainW = 1240, mainH = 2260;
const mainHtml = `
<div style="padding:52px 56px;display:flex;flex-direction:column;gap:34px;flex:1">
  <header style="display:flex;flex-direction:column;gap:12px;padding-bottom:22px;border-bottom:2px solid ${P.ink}">
    ${lab('Structure study · 20 concepts')}
    <h1 style="font-size:46px;max-width:22ch">Twenty ways to structure ${C.name}&rsquo;s site.</h1>
    <p style="font-size:17px;max-width:70ch">Same copy, same palette, same restraint as the current prototype. The only variable is <em>structure</em> &mdash; what the page is organised around, and what the reader meets first. Every image is a marked placeholder sized for your asset list.</p>
  </header>

  <div style="display:flex;flex-direction:column;gap:26px">
    ${families.map(f => `<section style="display:grid;grid-template-columns:190px 1fr;gap:28px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:6px;padding-top:2px">
        <h3 style="font-size:16px">${f[0]}</h3>
        <p style="font-size:13px;color:${P.mute}">${f[2]}</p>
      </div>
      <div style="display:flex;flex-direction:column">
        ${f[1].map(id => {
          const c = byId[id];
          return `<div style="display:grid;grid-template-columns:34px 168px 1fr;gap:18px;padding:11px 0;border-top:1px solid ${P.hair};align-items:baseline">
            <span class="mono" style="font-size:12px;color:${P.rule}">${num[id]}</span>
            <span style="font-size:15px;color:${P.ink}">${c.name}</span>
            <span style="font-size:13px;line-height:1.55">${c.principle}<span style="color:${P.mute}"> &mdash; ${c.tradeoff}</span></span>
          </div>`;
        }).join('')}
      </div>
    </section>`).join('')}
  </div>

  <div style="margin-top:auto;padding-top:22px;border-top:1px solid ${P.rule};display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px">
    <div>${lab('Bracketed placeholders')}<p style="font-size:13px;margin-top:7px">Booking URL, response time, project dates and the six photographs are marked, not invented. Everything else is your real copy.</p></div>
    <div>${lab('Type')}<p style="font-size:13px;margin-top:7px">Instrument Serif + Public Sans + IBM Plex Mono, deliberately not Fraunces &mdash; so structure, not the typeface, is what you are judging.</p></div>
    <div>${lab('Where to go next')}<p style="font-size:13px;margin-top:7px">Pick two or three. I will build the winner out properly at desktop and phone width.</p></div>
  </div>
</div>`;

emit({ id: 'Main', w: mainW, h: mainH, html: mainHtml });
all.forEach(emit);

// ---------------- canvas.json ----------------
const GAP_X = 170, GAP_Y = 240, PER_ROW = 5;
const artboards = [{ file: 'Main.dc.html', title: '00 · Start here — the twenty at a glance', x: 0, y: 0, w: mainW, h: mainH }];

let y = mainH + 320;
for (let r = 0; r * PER_ROW < all.length; r++) {
  const row = all.slice(r * PER_ROW, r * PER_ROW + PER_ROW);
  let x = 0;
  for (const c of row) {
    artboards.push({ file: `${c.id}.dc.html`, title: `${num[c.id]} · ${c.name}`, x, y, w: c.w, h: c.h });
    x += c.w + GAP_X;
  }
  y += Math.max(...row.map(c => c.h)) + GAP_Y;
}

const annotations = [
  { id: 'how-to-read', x: 0, y: mainH + 140, w: 620,
    text: 'Read left to right. Rows group loosely by how much the reader has to scroll before they hit the rate and the booking action.\n\nEverything is at 1440px desktop width — say the word and I will draw the phone layout for whichever ones you shortlist.' },
  { id: 'clunk-note', x: mainW + 170, y: 0, w: 560,
    text: 'What made the current site feel clunky, as far as I can tell:\n\n• Nine full-width bands of roughly equal weight, so nothing is clearly first.\n• The rail repeats facts the hero already stated.\n• Prose blocks where a list or a table would read faster.\n\nMost of these twenty fix at least one of those. 02, 05, 09 and 20 fix all three.' }
];

writeFileSync('canvas.json', JSON.stringify({ artboards, annotations, launch: { view: 'canvas' } }, null, 2));
console.log('emitted', all.length + 1, 'artboards · canvas height', y);
