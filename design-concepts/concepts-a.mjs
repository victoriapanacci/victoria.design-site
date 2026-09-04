import { P, lab, hr, vr, slot, cta, ghost, fact, dot, C } from './build.mjs';
import { tag } from './emit.mjs';

const W = 1440;
const pad = 'padding:0 64px';

export const A = [

// ---------------------------------------------------------------- 01
{
  id: 'C01Dossier', name: 'Dossier', w: W, h: 2100,
  principle: 'Fixed identity column · content reads as one document',
  tradeoff: 'Reads senior and calm. Narrower content measure; the left column is dead weight on mobile.',
  html: `
${tag('01', 'Dossier', 'Fixed identity column · content reads as one document')}
<div style="display:flex;flex:1">

  <aside style="width:320px;flex:none;border-right:1px solid ${P.hair};padding:56px 36px;display:flex;flex-direction:column;gap:36px">
    <div>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:30px;color:${P.ink};line-height:1.1">${C.name}</div>
      <div style="font-size:14px;color:${P.mute};margin-top:6px">Product designer &amp; builder<br>${C.city}</div>
    </div>
    ${hr()}
    <div style="display:flex;flex-direction:column;gap:22px">
      ${fact('Status', dot() + C.status, '', '18px')}
      ${fact('Day rate', C.rate, C.rateSub, '30px')}
      ${fact('Next opening', C.opening, '', '18px')}
    </div>
    ${cta('Book 20 minutes', true)}
    <div style="font-size:13px"><a href="#">${C.email}</a></div>
    ${hr()}
    <nav style="display:flex;flex-direction:column;gap:11px">
      ${['Selected work','What I take on','How it works','Ways to work','Rates &amp; terms'].map((n,i)=>
        `<a href="#" style="display:flex;gap:14px;font-size:14px;text-decoration:none;color:${P.body}"><span class="mono" style="color:${P.rule};font-size:11px">0${i+1}</span>${n}</a>`).join('')}
    </nav>
  </aside>

  <main style="flex:1;padding:56px 64px;display:flex;flex-direction:column;gap:52px">
    <h1 style="font-size:56px;max-width:15ch">Complex product work, designed and built by one person.</h1>
    <p style="font-size:19px;max-width:52ch">Senior overflow capacity for agencies and product teams. I take a piece of work off the board and hand it back finished.</p>
    ${hr()}
    <section style="display:flex;flex-direction:column;gap:24px">
      ${lab('01 — Selected work')}
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px">
        ${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:12px">
          ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '190px')}
          <h3>${w[0]}</h3>
          <div class="mono" style="font-size:11px;color:${P.mute};letter-spacing:.08em;text-transform:uppercase">${w[1]}</div>
        </div>`).join('')}
      </div>
    </section>
    ${hr()}
    <section style="display:flex;flex-direction:column;gap:24px">
      ${lab('02 — What I take off your plate')}
      <div style="display:flex;flex-direction:column;gap:0">
        ${C.plate.map((p)=>`<div style="display:grid;grid-template-columns:230px 1fr;gap:32px;padding:20px 0;border-bottom:1px solid ${P.hair}">
          <h3>${p[0]}</h3><p style="font-size:15px">${p[1]}</p></div>`).join('')}
      </div>
    </section>
    <section style="display:flex;flex-direction:column;gap:24px">
      ${lab('03 — Ways to work')}
      <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px">
        ${C.ways.map(w=>`<div style="border:1px solid ${P.hair};padding:24px;display:flex;flex-direction:column;gap:10px;min-height:190px">
          <h3>${w[0]}</h3>
          <div style="font-family:'Instrument Serif',Georgia,serif;font-size:26px;color:${P.ink}">${w[1]}</div>
          <div class="mono" style="font-size:11px;color:${P.mute}">${w[2]}</div>
          <p style="font-size:14px;margin-top:4px">${w[3]}</p></div>`).join('')}
      </div>
    </section>
  </main>
</div>`
},

// ---------------------------------------------------------------- 02
{
  id: 'C02Index', name: 'Index', w: W, h: 1900,
  principle: 'The whole site is a table of contents',
  tradeoff: 'Scannable in three seconds and very confident. Carries almost no persuasion — it assumes the reader already wants you.',
  html: `
${tag('02', 'Index', 'The whole site is a table of contents')}
<div style="${pad};padding-top:64px;padding-bottom:64px;display:flex;flex-direction:column;gap:56px;flex:1">

  <header style="display:flex;justify-content:space-between;align-items:flex-start">
    <div>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:26px;color:${P.ink}">${C.name}</div>
      <div style="font-size:14px;color:${P.mute}">Independent product designer · ${C.city}</div>
    </div>
    <div style="display:flex;gap:32px;align-items:flex-start">
      ${fact('Status', dot() + C.status, '', '16px')}
      ${fact('Day rate', C.rate, '', '16px')}
      ${cta()}
    </div>
  </header>

  <h1 style="font-size:72px;max-width:17ch">I design and build the product work that is too complex to hand to two people.</h1>

  ${hr(P.rule)}

  <section style="display:flex;flex-direction:column">
    <div style="display:grid;grid-template-columns:60px 1fr 200px 160px;gap:24px;padding-bottom:12px">
      ${lab('No.')}${lab('Project')}${lab('Domain')}${lab('Role')}
    </div>
    ${C.work.map((w,i)=>`<div style="display:grid;grid-template-columns:60px 1fr 200px 160px;gap:24px;align-items:center;padding:26px 0;border-top:1px solid ${P.hair}">
      <span class="mono" style="font-size:12px;color:${P.mute}">${String(i+1).padStart(2,'0')}</span>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:30px;color:${P.ink};line-height:1.15">${w[0]}</div>
      <div style="font-size:14px;color:${P.body}">${w[1]}</div>
      <div style="font-size:14px;color:${P.mute}">Design &amp; build</div>
    </div>`).join('')}
    <div style="border-top:1px solid ${P.hair};padding-top:20px">
      <a href="#" style="font-size:14px">Full case studies at ${C.portfolio}</a>
    </div>
  </section>

  <section style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:64px">
    <div style="display:flex;flex-direction:column;gap:18px">
      ${lab('What I take on')}
      ${C.plate.map(p=>`<div style="display:flex;gap:14px;padding:12px 0;border-bottom:1px solid ${P.hair}">
        <h3 style="min-width:200px">${p[0]}</h3><p style="font-size:14px">${p[1]}</p></div>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:18px">
      ${lab('Ways to work')}
      ${C.ways.map(w=>`<div style="display:flex;justify-content:space-between;gap:24px;padding:16px 0;border-bottom:1px solid ${P.hair}">
        <div><h3>${w[0]}</h3><p style="font-size:14px;color:${P.mute}">${w[2]}</p></div>
        <div style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink};white-space:nowrap">${w[1]}</div></div>`).join('')}
      <div style="margin-top:12px">${ghost('Full rate card and terms')}</div>
    </div>
  </section>
</div>`
},

// ---------------------------------------------------------------- 03
{
  id: 'C03Card', name: 'Calling Card', w: W, h: 1000,
  principle: 'Everything that closes a deal, above the fold, no scroll',
  tradeoff: 'Ruthlessly efficient for a producer with 40 seconds. Gives a design-led reader nothing to admire.',
  html: `
${tag('03', 'Calling Card', 'Everything that closes a deal, above the fold')}
<div style="flex:1;display:flex;align-items:center;justify-content:center;padding:56px 64px">
  <div style="width:100%;border:1px solid ${P.rule};background:${P.paper};display:grid;grid-template-columns:1.35fr 1fr">

    <div style="padding:52px;display:flex;flex-direction:column;gap:30px;border-right:1px solid ${P.hair}">
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        <div style="font-family:'Instrument Serif',Georgia,serif;font-size:26px;color:${P.ink}">${C.name}</div>
        <div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${P.mute}">${C.city}</div>
      </div>
      <h1 style="font-size:50px;max-width:14ch">Complex product work, designed and built by one person.</h1>
      <p style="font-size:18px;max-width:46ch">Senior overflow capacity for agencies. No ramp, no account manager, no junior doing the work.</p>
      <div style="display:flex;flex-direction:column;gap:0;margin-top:6px">
        ${C.plate.slice(0,4).map(p=>`<div style="display:flex;gap:12px;align-items:baseline;padding:12px 0;border-bottom:1px solid ${P.hair}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${P.green}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex:none;position:relative;top:2px"><path d="M4 12.5 9.5 18 20 6.5"/></svg>
          <span style="font-size:15px;color:${P.ink}">${p[0]}</span></div>`).join('')}
      </div>
      <div style="display:flex;gap:14px;margin-top:6px">${cta()}${ghost('Selected work')}</div>
    </div>

    <div style="padding:52px;display:flex;flex-direction:column;gap:28px;background:${P.paper2}">
      ${fact('Status', dot() + C.status, '', '20px')}
      ${hr(P.rule)}
      ${fact('Day rate', C.rate, C.rateSub, '44px')}
      ${hr(P.rule)}
      ${fact('Next opening', C.opening, '', '20px')}
      ${hr(P.rule)}
      <div style="display:flex;flex-direction:column;gap:14px">
        ${lab('Ways to work')}
        ${C.ways.map(w=>`<div style="display:flex;justify-content:space-between;gap:16px;font-size:14px">
          <span style="color:${P.ink}">${w[0]}</span><span class="mono" style="color:${P.mute}">${w[1]}</span></div>`).join('')}
      </div>
      ${hr(P.rule)}
      <div style="display:flex;flex-direction:column;gap:6px">
        ${lab('Direct')}
        <a href="#" style="font-size:16px">${C.email}</a>
      </div>
    </div>
  </div>
</div>`
},

// ---------------------------------------------------------------- 04
{
  id: 'C04Split', name: 'Split Screen', w: W, h: 1650,
  principle: 'Pitch holds still on the left; work scrolls on the right',
  tradeoff: 'The offer is never off screen. Halves the width available to the work, which hurts wide product shots.',
  html: `
${tag('04', 'Split Screen', 'Pitch holds still on the left; work scrolls on the right')}
<div style="display:flex;flex:1">

  <div style="width:50%;padding:64px 52px;display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid ${P.hair}">
    <div style="display:flex;flex-direction:column;gap:30px">
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink}">${C.name}</div>
      <h1 style="font-size:58px">Your designers are the bottleneck, not the brief.</h1>
      <p style="font-size:19px;max-width:42ch">I take a piece of work off the board and hand it back finished — design, prototype and shipped front-end code from one person.</p>
      <div style="display:flex;gap:44px;flex-wrap:wrap">
        ${fact('Status', dot() + C.status, '', '18px')}
        ${fact('Day rate', C.rate, C.rateSub, '18px')}
        ${fact('Next opening', C.opening, '', '18px')}
      </div>
      <div style="display:flex;gap:14px">${cta()}${ghost(C.email)}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px;margin-top:48px">
      ${hr()}
      ${C.stats.slice(0,3).map(s=>`<div style="display:flex;gap:18px;align-items:baseline;padding:10px 0">
        <span style="font-family:'Instrument Serif',Georgia,serif;font-size:30px;color:${P.ink};min-width:110px">${s[0]}</span>
        <span style="font-size:14px">${s[1]}</span></div>`).join('')}
    </div>
  </div>

  <div style="width:50%;background:${P.paper2};padding:64px 52px;display:flex;flex-direction:column;gap:20px">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      ${lab('Selected work')}
      <span class="mono" style="font-size:11px;color:${P.mute}">04 pieces</span>
    </div>
    ${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:12px;padding-bottom:20px">
      ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '250px')}
      <h3>${w[0]}</h3>
      <p style="font-size:14px">${w[2]}</p>
    </div>`).join('')}
    <a href="#" style="font-size:14px">Full case studies at ${C.portfolio}</a>
  </div>
</div>`
},

// ---------------------------------------------------------------- 05
{
  id: 'C05Ledger', name: 'Ledger', w: W, h: 1750,
  principle: 'Every section is a table — facts in columns, no prose blocks',
  tradeoff: 'Unusually honest and very fast to compare. Cold; needs the portrait and one photograph to stay human.',
  html: `
${tag('05', 'Ledger', 'Every section is a table — facts in columns')}
<div style="${pad};padding-top:56px;padding-bottom:56px;display:flex;flex-direction:column;gap:48px;flex:1">

  <header style="display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:24px;border-bottom:2px solid ${P.ink}">
    <div>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:34px;color:${P.ink}">${C.name}</div>
      <div class="mono" style="font-size:12px;color:${P.mute};letter-spacing:.1em;text-transform:uppercase;margin-top:6px">Product design &amp; build · ${C.city}</div>
    </div>
    <div style="text-align:right">
      <div class="mono" style="font-size:11px;color:${P.mute};letter-spacing:.14em;text-transform:uppercase">Availability</div>
      <div style="font-size:20px;color:${P.ink}">${dot()}${C.status} · ${C.opening}</div>
    </div>
  </header>

  <h1 style="font-size:60px;max-width:18ch">I make complexity feel invisible.</h1>
  <p style="font-size:19px;max-width:60ch">Products where being wrong has consequences — patient data, money movement, audit requirements, systems people depend on.</p>

  ${['Engagements','Capabilities','Evidence'].map((section,si)=>{
    const rows = si===0
      ? C.ways.map(w=>[w[0], w[1], w[2], w[3]])
      : si===1
        ? C.plate.map(p=>[p[0], '—', '—', p[1]])
        : C.stats.map(s=>[s[0], '—', '—', s[1]]);
    const heads = si===0 ? ['Shape','Price','Duration','What it is for']
      : si===1 ? ['Capability','','','Detail']
      : ['Figure','','','What it refers to'];
    return `<section style="display:flex;flex-direction:column">
      <div style="display:flex;justify-content:space-between;align-items:baseline;padding-bottom:10px">
        ${lab(String(si+1).padStart(2,'0') + ' — ' + section)}
      </div>
      <div style="display:grid;grid-template-columns:280px 150px 200px 1fr;gap:24px;padding:10px 0;border-top:1px solid ${P.ink};border-bottom:1px solid ${P.hair}">
        ${heads.map(h=>lab(h)).join('')}
      </div>
      ${rows.map(r=>`<div style="display:grid;grid-template-columns:280px 150px 200px 1fr;gap:24px;padding:18px 0;border-bottom:1px solid ${P.hair};align-items:baseline">
        <div style="font-size:16px;color:${P.ink};font-weight:${si===2?'400':'500'};${si===2?"font-family:'Instrument Serif',Georgia,serif;font-size:26px":''}">${r[0]}</div>
        <div class="mono" style="font-size:13px;color:${P.body}">${r[1]}</div>
        <div class="mono" style="font-size:13px;color:${P.mute}">${r[2]}</div>
        <div style="font-size:14px">${r[3]}</div>
      </div>`).join('')}
    </section>`;
  }).join('')}

  <section style="display:flex;justify-content:space-between;align-items:center;gap:32px;background:${P.paper2};padding:32px 36px">
    <div>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:30px;color:${P.ink}">Twenty minutes is enough to know.</div>
      <div class="mono" style="font-size:12px;color:${P.mute};margin-top:6px">${C.rate} ${C.rateSub} · ${C.status}</div>
    </div>
    <div style="display:flex;gap:14px">${cta()}${ghost(C.email)}</div>
  </section>
</div>`
},

// ---------------------------------------------------------------- 06
{
  id: 'C06Marquee', name: 'Marquee', w: W, h: 2000,
  principle: 'Project names at poster scale carry the page',
  tradeoff: 'Memorable and unmistakably a designer&#39;s site. Pushes rate and availability far down; weakest on the producer&#39;s practical questions.',
  html: `
${tag('06', 'Marquee', 'Project names at poster scale carry the page')}
<div style="${pad};padding-top:44px;padding-bottom:56px;display:flex;flex-direction:column;gap:48px;flex:1">

  <header style="display:flex;justify-content:space-between;align-items:baseline">
    <div style="font-size:15px;color:${P.ink}">${C.name}</div>
    <div style="display:flex;gap:28px;align-items:center">
      <span class="mono" style="font-size:12px;color:${P.mute}">${dot()}${C.status} · ${C.rate}/day</span>
      ${ghost('Book 20 minutes')}
    </div>
  </header>

  <div style="display:flex;flex-direction:column;gap:2px;margin-top:12px">
    ${C.work.map((w,i)=>`<a href="#" style="display:block;text-decoration:none;padding:14px 0;border-bottom:1px solid ${P.hair}">
      <div style="display:flex;align-items:flex-start;gap:14px">
        <span style="font-family:'Instrument Serif',Georgia,serif;font-size:76px;line-height:1;color:${P.ink};letter-spacing:-.02em">${w[0].split(' ').slice(0,4).join(' ')}</span>
        <span class="mono" style="font-size:12px;color:${P.mute};padding-top:10px">${w[1]}</span>
      </div>
      <div style="font-size:15px;color:${P.body};max-width:70ch;margin-top:8px">${w[2]}</div>
    </a>`).join('')}
  </div>

  <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px">
    ${C.work.map((w,i)=>slot(String(i+3).padStart(2,'0'), '1200 × 800', '170px')).join('')}
  </div>

  <div style="display:grid;grid-template-columns:1fr 380px;gap:64px;padding-top:24px;border-top:1px solid ${P.rule}">
    <div style="display:flex;flex-direction:column;gap:20px">
      <h2 style="font-size:40px;max-width:22ch">Complex product work, designed and built by one person.</h2>
      <p style="font-size:17px;max-width:58ch">Senior overflow capacity for agencies. Nine years in-house on products where being wrong has consequences. Your name on the work, mine on the invoice.</p>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:8px">
        ${C.plate.slice(0,4).map(p=>`<div style="padding-top:14px;border-top:1px solid ${P.hair}"><h3>${p[0]}</h3><p style="font-size:14px;margin-top:5px">${p[1]}</p></div>`).join('')}
      </div>
    </div>
    <aside style="display:flex;flex-direction:column;gap:22px;background:${P.paper2};padding:28px">
      ${fact('Day rate', C.rate, C.rateSub, '38px')}
      ${hr(P.rule)}
      ${fact('Next opening', C.opening, '', '18px')}
      ${hr(P.rule)}
      ${C.ways.map(w=>`<div style="display:flex;justify-content:space-between;font-size:14px"><span style="color:${P.ink}">${w[0]}</span><span class="mono" style="color:${P.mute}">${w[1]}</span></div>`).join('')}
      ${cta('Book 20 minutes', true)}
    </aside>
  </div>
</div>`
},

// ---------------------------------------------------------------- 07
{
  id: 'C07Tabs', name: 'One Screen, Tabbed', w: W, h: 950,
  principle: 'No scroll at all — four tabs swap the panel',
  tradeoff: 'Feels like a product, not a brochure, and proves you build. Hides content from anyone who does not click, and search engines see less.',
  html: `
${tag('07', 'One Screen, Tabbed', 'No scroll — four tabs swap the panel')}
<div style="flex:1;display:flex;flex-direction:column;${pad};padding-top:40px;padding-bottom:40px;gap:28px">

  <header style="display:flex;justify-content:space-between;align-items:center">
    <div style="display:flex;align-items:baseline;gap:16px">
      <span style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink}">${C.name}</span>
      <span class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${P.mute}">Product design &amp; build · ${C.city}</span>
    </div>
    <div style="display:flex;gap:22px;align-items:center">
      <span class="mono" style="font-size:12px;color:${P.ink}">${dot()}${C.status}</span>
      ${cta()}
    </div>
  </header>

  <nav style="display:flex;gap:0;border-bottom:1px solid ${P.rule}">
    ${['Work','What I take on','Ways to work','About'].map((t,i)=>
      `<a href="#" style="padding:12px 22px;font-size:15px;text-decoration:none;color:${i===0?P.ink:P.mute};border-bottom:2px solid ${i===0?P.ink:'transparent'};margin-bottom:-1px">${t}</a>`).join('')}
  </nav>

  <div style="flex:1;display:grid;grid-template-columns:1fr 340px;gap:44px">
    <div style="display:flex;flex-direction:column;gap:22px">
      <h1 style="font-size:44px;max-width:20ch">Four pieces where the hard part was not the interface.</h1>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px">
        ${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:10px">
          ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '150px')}
          <h3 style="font-size:15px">${w[0]}</h3>
        </div>`).join('')}
      </div>
    </div>
    <aside style="border-left:1px solid ${P.hair};padding-left:32px;display:flex;flex-direction:column;gap:24px">
      ${fact('Day rate', C.rate, C.rateSub, '36px')}
      ${hr()}
      ${fact('Next opening', C.opening, '', '18px')}
      ${hr()}
      <p style="font-size:15px">Nine years in-house on complex products. I match your system, not mine — your client should not be able to tell.</p>
      ${hr()}
      <a href="#" style="font-size:15px">${C.email}</a>
    </aside>
  </div>
</div>`
}

];
