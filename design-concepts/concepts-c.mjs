import { P, lab, hr, slot, cta, ghost, fact, dot, C } from './build.mjs';
import { tag } from './emit.mjs';

const W = 1440;
const pad = 'padding:0 64px';

export const D = [

// ---------------------------------------------------------------- 15
{
  id: 'C15Editorial', name: 'Editorial', w: W, h: 1900,
  principle: 'Magazine spread — columns, a pull quote, the portrait as a feature',
  tradeoff: 'The warmest and most personal option; good if you want to be hired as a person. Slowest to read, and columns are fragile on mobile.',
  html: `
${tag('15', 'Editorial', 'Magazine spread — columns, pull quote, feature portrait')}
<div style="${pad};padding-top:44px;padding-bottom:56px;display:flex;flex-direction:column;gap:40px;flex:1">

  <header style="display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid ${P.ink}">
    <span class="mono" style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${P.mute}">Panacci · Product design &amp; build · ${C.city}</span>
    <span class="mono" style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${P.ink}">${dot()}${C.status}</span>
  </header>

  <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:52px;align-items:start">
    <div style="display:flex;flex-direction:column;gap:26px">
      <h1 style="font-size:74px;letter-spacing:-.02em">The person you hire is the person who does the work.</h1>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;column-gap:40px">
        <p style="font-size:16px;line-height:1.72"><span style="float:left;font-family:'Instrument Serif',Georgia,serif;font-size:62px;line-height:.82;color:${P.ink};padding:6px 10px 0 0">N</span>ine years in-house on products where being wrong has consequences — patient data, money movement, audit requirements, systems people depend on. I take a piece of work off the board and hand it back finished.</p>
        <p style="font-size:16px;line-height:1.72">No account manager, no relay, no junior doing the work. Design, prototype and shipped front-end code come from one person, so nothing waits on a handoff — and I work inside your design system and your brand, not mine.</p>
      </div>
      <div style="display:flex;gap:14px">${cta()}${ghost(C.email)}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      ${slot('02', 'Portrait · 1200 × 1500', '460px')}
      <div class="mono" style="font-size:11px;color:${P.mute};letter-spacing:.08em">${C.name}, ${C.city}</div>
    </div>
  </div>

  <blockquote style="margin:0;padding:38px 0;border-top:1px solid ${P.rule};border-bottom:1px solid ${P.rule};display:grid;grid-template-columns:1fr 320px;gap:52px;align-items:center">
    <div style="font-family:'Instrument Serif',Georgia,serif;font-size:44px;color:${P.ink};line-height:1.12;font-style:italic">Your name on the work. Mine on the invoice.</div>
    <p style="font-size:15px">Your brand, your deck, your client relationship. I am happy to be invisible — or client-facing when it helps.</p>
  </blockquote>

  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px">
    <div style="display:flex;flex-direction:column;gap:16px">
      ${lab('What I take on')}
      ${C.plate.slice(0,3).map(p=>`<div><h3>${p[0]}</h3><p style="font-size:14px;margin-top:5px">${p[1]}</p></div>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      ${lab('Terms')}
      ${C.terms.slice(0,3).map(t=>`<p style="font-size:14px;padding-bottom:12px;border-bottom:1px solid ${P.hair}">${t}</p>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      ${lab('Ways to work')}
      ${C.ways.map(w=>`<div style="padding-bottom:12px;border-bottom:1px solid ${P.hair}">
        <div style="display:flex;justify-content:space-between;gap:12px"><h3 style="font-size:15px">${w[0]}</h3>
        <span class="mono" style="font-size:12px;color:${P.ink};white-space:nowrap">${w[1]}</span></div>
        <div class="mono" style="font-size:11px;color:${P.mute};margin-top:4px">${w[2]}</div></div>`).join('')}
    </div>
  </div>

  <section style="display:flex;flex-direction:column;gap:20px;padding-top:28px;border-top:1px solid ${P.ink}">
    ${lab('Selected work')}
    <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px">
      ${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:10px">
        ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '160px')}
        <h3 style="font-size:15px">${w[0]}</h3>
        <p style="font-size:13px">${w[2]}</p></div>`).join('')}
    </div>
  </section>
</div>`
},

// ---------------------------------------------------------------- 16
{
  id: 'C16Poster', name: 'Poster', w: W, h: 1700,
  principle: 'One full-height typographic statement, then everything else on one screen',
  tradeoff: 'Enormous confidence and a screenshot people remember. Spends a whole viewport before saying anything useful.',
  html: `
${tag('16', 'Poster', 'One full-height statement, then everything on one screen')}
<div style="flex:1;display:flex;flex-direction:column">

  <div style="height:760px;display:flex;flex-direction:column;justify-content:space-between;padding:44px 64px;border-bottom:1px solid ${P.ink}">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <span class="mono" style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:${P.mute}">${C.name}</span>
      <span class="mono" style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:${P.mute}">${C.city} — your timezone</span>
    </div>
    <h1 style="font-size:132px;line-height:.94;letter-spacing:-.035em;max-width:15ch">Complex product work, built by one person.</h1>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:40px">
      <p style="font-size:20px;max-width:38ch">Senior overflow capacity for agencies. Design, prototype and shipped front-end code, without a handoff between them.</p>
      <div style="display:flex;gap:44px;align-items:flex-end">
        ${fact('Status', dot() + C.status, '', '18px')}
        ${fact('Day rate', C.rate, C.rateSub, '18px')}
        ${cta()}
      </div>
    </div>
  </div>

  <div style="${pad};padding-top:44px;padding-bottom:52px;display:grid;grid-template-columns:1fr 1fr 320px;gap:48px;align-items:start">
    <section style="display:flex;flex-direction:column;gap:16px">
      ${lab('Selected work')}
      ${C.work.map((w,i)=>`<div style="display:flex;gap:16px;padding:14px 0;border-bottom:1px solid ${P.hair}">
        <span class="mono" style="font-size:11px;color:${P.rule};padding-top:4px">${String(i+1).padStart(2,'0')}</span>
        <div><h3 style="font-size:15px">${w[0]}</h3>
        <div class="mono" style="font-size:11px;color:${P.mute};margin-top:5px;letter-spacing:.08em;text-transform:uppercase">${w[1]}</div></div></div>`).join('')}
      <a href="#" style="font-size:14px">Full case studies at ${C.portfolio}</a>
    </section>

    <section style="display:flex;flex-direction:column;gap:16px">
      ${lab('What I take off your plate')}
      ${C.plate.map(p=>`<div style="padding:12px 0;border-bottom:1px solid ${P.hair}">
        <h3 style="font-size:15px">${p[0]}</h3>
        <p style="font-size:13px;margin-top:4px">${p[1]}</p></div>`).join('')}
    </section>

    <aside style="background:${P.paper2};padding:28px;display:flex;flex-direction:column;gap:20px">
      ${lab('Ways to work')}
      ${C.ways.map(w=>`<div style="display:flex;flex-direction:column;gap:5px;padding-bottom:14px;border-bottom:1px solid ${P.rule}">
        <h3 style="font-size:15px">${w[0]}</h3>
        <div style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink}">${w[1]}</div>
        <div class="mono" style="font-size:11px;color:${P.mute}">${w[2]}</div></div>`).join('')}
      ${cta('Book 20 minutes', true)}
      <a href="#" style="font-size:14px">${C.email}</a>
    </aside>
  </div>
</div>`
},

// ---------------------------------------------------------------- 17
{
  id: 'C17Stack', name: 'Stack', w: W, h: 2000,
  principle: 'Full-width panels that stack on scroll, each one a single idea',
  tradeoff: 'Paces the argument and never crowds a screen. Long by construction, and the effect is lost if someone skims.',
  html: `
${tag('17', 'Stack', 'Full-width panels that stack on scroll, one idea each')}
<div style="flex:1;display:flex;flex-direction:column">

  <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 64px;border-bottom:1px solid ${P.hair}">
    <span style="font-family:'Instrument Serif',Georgia,serif;font-size:20px;color:${P.ink}">${C.name}</span>
    <div style="display:flex;gap:26px;align-items:center">
      <span class="mono" style="font-size:12px;color:${P.ink}">${dot()}${C.status} · ${C.rate}/day</span>
      ${ghost('Book 20 minutes')}
    </div>
  </div>

  ${[
    {n:'01', bg:P.paper, h:'440px', kicker:'The offer', title:'Complex product work, designed and built by one person.', body:'Senior overflow capacity for agencies, available immediately from Toronto.', cta:true},
    {n:'02', bg:P.paper2, h:'400px', kicker:'The problem', title:'Your designers are the bottleneck, not the brief.', body:'I take a piece of work off the board and hand it back finished — no ramp, no kickoff series, no handoff between design and front-end.', cta:false},
    {n:'03', bg:P.dark, h:'380px', kicker:'The domain', title:'I make complexity feel invisible.', body:'Products where being wrong has consequences — patient data, money movement, audit requirements, systems people depend on.', cta:false, dark:true},
    {n:'04', bg:P.paper, h:'400px', kicker:'The terms', title:'Your name on the work. Mine on the invoice.', body:'Your brand, your deck, your client relationship. Registered business, own MSA, invoices in your currency.', cta:false}
  ].map(s=>`<section style="min-height:${s.h};background:${s.bg};padding:56px 64px;display:flex;flex-direction:column;justify-content:center;gap:20px;border-bottom:1px solid ${s.dark?'transparent':P.hair};box-shadow:0 -1px 0 ${s.dark?'transparent':'rgba(0,0,0,.03)'}">
    <div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${s.dark?'#8A8F86':P.mute}">${s.n} — ${s.kicker}</div>
    <h2 style="font-size:52px;max-width:20ch;color:${s.dark?'#F4F2ED':P.ink}">${s.title}</h2>
    <p style="font-size:19px;max-width:56ch;color:${s.dark?'#B6BBB2':P.body}">${s.body}</p>
    ${s.cta ? `<div style="display:flex;gap:14px;margin-top:10px">${cta()}${ghost('Selected work')}</div>` : ''}
  </section>`).join('')}

  <section style="padding:56px 64px;display:flex;flex-direction:column;gap:26px;border-bottom:1px solid ${P.hair}">
    <div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${P.mute}">05 — The work</div>
    <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px">
      ${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:10px">
        ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '160px')}
        <h3 style="font-size:15px">${w[0]}</h3></div>`).join('')}
    </div>
  </section>

  <section style="padding:56px 64px;display:flex;flex-direction:column;gap:26px">
    <div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${P.mute}">06 — The ask</div>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:40px">
      <h2 style="font-size:52px;max-width:16ch">Twenty minutes is enough to know.</h2>
      <div style="display:flex;gap:44px;align-items:flex-end">
        ${fact('Day rate', C.rate, C.rateSub, '18px')}
        ${fact('Next opening', C.opening, '', '18px')}
        ${cta()}
      </div>
    </div>
  </section>
</div>`
},

// ---------------------------------------------------------------- 18
{
  id: 'C18BookFirst', name: 'Book First', w: W, h: 1650,
  principle: 'The booking panel is the hero; every section below is evidence for it',
  tradeoff: 'Highest conversion intent of the twenty. Presumptuous for a first-time visitor — works best when people arrive already referred.',
  html: `
${tag('18', 'Book First', 'The booking panel is the hero; everything below is evidence')}
<div style="flex:1;display:flex;flex-direction:column">

  <div style="display:grid;grid-template-columns:1fr 460px;gap:0;border-bottom:1px solid ${P.rule}">
    <div style="padding:56px 64px;display:flex;flex-direction:column;justify-content:center;gap:24px">
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink}">${C.name}</div>
      <h1 style="font-size:60px;max-width:15ch">Book twenty minutes. That is the whole pitch.</h1>
      <p style="font-size:19px;max-width:52ch">Senior product design and front-end capacity for agencies. Nine years in-house on complex products, available immediately from ${C.city}.</p>
      <div style="display:flex;gap:44px;margin-top:8px;flex-wrap:wrap">
        ${C.stats.slice(0,3).map(s=>`<div style="display:flex;flex-direction:column;gap:4px;max-width:180px">
          <span style="font-family:'Instrument Serif',Georgia,serif;font-size:32px;color:${P.ink}">${s[0]}</span>
          <span style="font-size:13px">${s[1]}</span></div>`).join('')}
      </div>
    </div>

    <aside style="background:${P.paper2};border-left:1px solid ${P.rule};padding:44px 40px;display:flex;flex-direction:column;gap:22px">
      ${lab('Book an intro call')}
      <div style="display:flex;flex-direction:column;gap:14px">
        ${fact('Status', dot() + C.status, '', '18px')}
        ${hr(P.rule)}
        ${fact('Day rate', C.rate, C.rateSub, '38px')}
        ${hr(P.rule)}
        ${fact('Next opening', C.opening, '', '18px')}
        ${hr(P.rule)}
        ${fact('Response time', '[YOUR RESPONSE TIME]', '', '18px')}
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
        ${lab('Pick a slot')}
        <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px">
          ${['Tue 10:00','Tue 14:30','Wed 09:00','Wed 16:00','Thu 11:30','Fri 13:00'].map((s,i)=>
            `<div style="border:1px solid ${i===0?P.green:P.rule};background:${i===0?P.paper:'transparent'};padding:11px 0;text-align:center;font-size:13px;color:${P.ink};min-height:44px;display:flex;align-items:center;justify-content:center">${s}</div>`).join('')}
        </div>
        <div class="mono" style="font-size:11px;color:${P.mute}">Sample slots — wired to [YOUR BOOKING URL]</div>
      </div>
      ${cta('Confirm 20 minutes', true)}
      <a href="#" style="font-size:14px;text-align:center">${C.email}</a>
    </aside>
  </div>

  <div style="${pad};padding-top:48px;padding-bottom:52px;display:flex;flex-direction:column;gap:44px">
    <section style="display:flex;flex-direction:column;gap:20px">
      ${lab('Evidence 01 — the work')}
      <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px">
        ${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:10px">
          ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '150px')}
          <h3 style="font-size:14px">${w[0]}</h3>
          <p style="font-size:13px">${w[2]}</p></div>`).join('')}
      </div>
    </section>

    <section style="display:grid;grid-template-columns:1fr 1fr;gap:56px">
      <div style="display:flex;flex-direction:column;gap:14px">
        ${lab('Evidence 02 — what you get')}
        ${C.plate.map(p=>`<div style="display:flex;gap:14px;padding:11px 0;border-bottom:1px solid ${P.hair}">
          <h3 style="font-size:15px;min-width:190px">${p[0]}</h3>
          <p style="font-size:14px">${p[1]}</p></div>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        ${lab('Evidence 03 — the terms')}
        ${C.terms.map(t=>`<p style="font-size:14px;padding:11px 0;border-bottom:1px solid ${P.hair}">${t}</p>`).join('')}
      </div>
    </section>
  </div>
</div>`
},

// ---------------------------------------------------------------- 19
{
  id: 'C19Mosaic', name: 'Mosaic', w: W, h: 1750,
  principle: 'One grid — facts, work, portrait and rate are all tiles of equal citizenship',
  tradeoff: 'Everything is visible at once and it reorders cleanly on mobile. No argument order; the reader assembles the case themselves.',
  html: `
${tag('19', 'Mosaic', 'One grid — facts, work, portrait and rate are all tiles')}
<div style="${pad};padding-top:44px;padding-bottom:52px;display:flex;flex-direction:column;gap:22px;flex:1">

  <header style="display:flex;justify-content:space-between;align-items:center">
    <span style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink}">${C.name}</span>
    <span class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${P.mute}">Product design &amp; build · ${C.city}</span>
  </header>

  <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px">

    <div style="grid-column:span 2;grid-row:span 2;background:${P.paper2};padding:36px;display:flex;flex-direction:column;justify-content:space-between;gap:24px;min-height:400px">
      <h1 style="font-size:48px">Complex product work, designed and built by one person.</h1>
      <div>
        <p style="font-size:16px;margin-bottom:20px">Senior overflow capacity for agencies, available immediately.</p>
        ${cta()}
      </div>
    </div>

    <div style="border:1px solid ${P.rule};padding:26px;display:flex;flex-direction:column;justify-content:center;gap:8px;min-height:190px">
      ${lab('Status')}
      <div style="font-size:24px;color:${P.ink}">${dot()}${C.status}</div>
      <div class="mono" style="font-size:12px;color:${P.mute}">Next opening ${C.opening}</div>
    </div>

    <div style="background:${P.green};color:${P.paper};padding:26px;display:flex;flex-direction:column;justify-content:center;gap:6px;min-height:190px">
      <div class="mono" style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#B9CFC2">Day rate</div>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:48px;line-height:1">${C.rate}</div>
      <div style="font-size:13px;color:#C9DACF">${C.rateSub}</div>
    </div>

    <div style="grid-column:span 2;border:1px solid ${P.hair};padding:26px;display:flex;flex-direction:column;gap:12px">
      ${lab('Ways to work')}
      ${C.ways.map(w=>`<div style="display:flex;justify-content:space-between;gap:14px;padding-bottom:9px;border-bottom:1px solid ${P.hair}">
        <div><h3 style="font-size:15px">${w[0]}</h3><div class="mono" style="font-size:11px;color:${P.mute};margin-top:2px">${w[2]}</div></div>
        <span class="mono" style="font-size:13px;color:${P.ink};white-space:nowrap">${w[1]}</span></div>`).join('')}
    </div>

    ${C.work.map((w,i)=>`<div style="${i===0?'grid-column:span 2;':''}display:flex;flex-direction:column;gap:10px">
      ${slot(String(i+3).padStart(2,'0'), '1200 × 800', i===0?'260px':'180px')}
      <h3 style="font-size:15px">${w[0]}</h3>
      <div class="mono" style="font-size:11px;color:${P.mute};letter-spacing:.08em;text-transform:uppercase">${w[1]}</div>
    </div>`).join('')}

    <div style="display:flex;flex-direction:column;gap:10px">
      ${slot('02', 'Portrait · 1200 × 1500', '230px')}
      <div class="mono" style="font-size:11px;color:${P.mute}">${C.name}</div>
    </div>

    ${C.stats.slice(0,2).map(s=>`<div style="border:1px solid ${P.hair};padding:26px;display:flex;flex-direction:column;gap:10px;justify-content:center">
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:40px;color:${P.ink};line-height:1">${s[0]}</div>
      <p style="font-size:13px">${s[1]}</p></div>`).join('')}

    <div style="grid-column:span 2;background:${P.ink};color:${P.paper};padding:30px;display:flex;flex-direction:column;justify-content:center;gap:12px">
      <h2 style="font-size:32px;color:${P.paper}">Your name on the work. Mine on the invoice.</h2>
      <p style="font-size:15px;color:#B6BBB2">White-label by default. No account manager, no relay, no junior doing the work.</p>
    </div>

    <div style="grid-column:span 2;border:1px solid ${P.rule};padding:30px;display:flex;flex-direction:column;justify-content:center;gap:14px">
      <h2 style="font-size:30px">Twenty minutes is enough to know.</h2>
      <div style="display:flex;gap:12px">${cta()}${ghost(C.email)}</div>
    </div>
  </div>
</div>`
},

// ---------------------------------------------------------------- 20
{
  id: 'C20Reduction', name: 'Reduction', w: W, h: 1150,
  principle: 'One screen of text. Nothing that is not load-bearing.',
  tradeoff: 'The most self-assured thing you could ship, and impossible to build wrong. Gives images nowhere to live — it only works if the writing carries it.',
  html: `
${tag('20', 'Reduction', 'One screen of text — nothing that is not load-bearing')}
<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:72px 64px">
  <div style="max-width:820px;display:flex;flex-direction:column;gap:44px">

    <div style="display:flex;flex-direction:column;gap:10px">
      <h1 style="font-size:44px;line-height:1.14">${C.name} is an independent product designer in ${C.city} who also ships the front-end code.</h1>
      <p style="font-size:20px;color:${P.body}">${dot()}${C.status}. ${C.rate} a day, four-week minimum. Next opening ${C.opening}.</p>
    </div>

    ${hr(P.rule)}

    <div style="display:flex;flex-direction:column;gap:16px">
      ${[
        'Nine years in-house on products where being wrong has consequences — patient data, money movement, audit requirements.',
        'I work inside your design system and your brand. Your client should not be able to tell.',
        'White-label by default: your name on the work, mine on the invoice.',
        'Registered business, own MSA and terms. You can have this signed today.'
      ].map(t=>`<p style="font-size:18px;line-height:1.6">${t}</p>`).join('')}
    </div>

    ${hr(P.rule)}

    <div style="display:flex;flex-direction:column;gap:12px">
      ${lab('Work')}
      ${C.work.map(w=>`<div style="display:flex;justify-content:space-between;gap:24px;align-items:baseline">
        <a href="#" style="font-size:17px;color:${P.ink};text-decoration:none;border-bottom:1px solid ${P.rule}">${w[0]}</a>
        <span class="mono" style="font-size:12px;color:${P.mute};white-space:nowrap">${w[1]}</span>
      </div>`).join('')}
      <a href="#" style="font-size:15px;margin-top:6px">Case studies at ${C.portfolio}</a>
    </div>

    ${hr(P.rule)}

    <div style="display:flex;flex-direction:column;gap:12px">
      ${lab('Ways to work')}
      ${C.ways.map(w=>`<div style="display:flex;justify-content:space-between;gap:24px;align-items:baseline">
        <span style="font-size:17px;color:${P.ink}">${w[0]}</span>
        <span class="mono" style="font-size:13px;color:${P.mute}">${w[1]} · ${w[2]}</span>
      </div>`).join('')}
    </div>

    ${hr(P.rule)}

    <div style="display:flex;gap:16px;align-items:center">
      ${cta()}
      <span style="font-size:17px">or <a href="#">${C.email}</a></span>
    </div>
  </div>
</div>`
}

];
