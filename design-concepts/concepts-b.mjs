import { P, lab, hr, slot, cta, ghost, fact, dot, C } from './build.mjs';
import { tag } from './emit.mjs';

const W = 1440;
const pad = 'padding:0 64px';

export const B = [

// ---------------------------------------------------------------- 08
{
  id: 'C08Timeline', name: 'Timeline', w: W, h: 1900,
  principle: 'One vertical spine, 2017 to now — work and depth hang off it',
  tradeoff: 'Proves nine years without a paragraph claiming it. Chronology is your story, not the producer&#39;s question; availability has to be pinned separately.',
  html: `
${tag('08', 'Timeline', 'One vertical spine, 2017 to now')}
<div style="${pad};padding-top:52px;padding-bottom:56px;display:flex;flex-direction:column;gap:44px;flex:1">

  <header style="display:flex;justify-content:space-between;align-items:flex-start">
    <div style="max-width:60%">
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:26px;color:${P.ink}">${C.name}</div>
      <h1 style="font-size:52px;margin-top:20px">Nine years on products where being wrong has consequences.</h1>
    </div>
    <div style="border:1px solid ${P.rule};padding:24px;display:flex;flex-direction:column;gap:18px;min-width:280px">
      ${fact('Status', dot() + C.status, '', '18px')}
      ${fact('Day rate', C.rate, C.rateSub, '30px')}
      ${cta('Book 20 minutes', true)}
    </div>
  </header>

  <div style="display:grid;grid-template-columns:110px 1fr;gap:0">
    ${[
      ['2017', 'In-house, on complex product work', 'Where the nine years start. All roles in-house — no agency layer, no relay.', null],
      ['2019–22', 'Independent practice', 'Ran an independent practice, 2019–2022 — 15+ early-stage clients.', null],
      ['[YEAR]', 'Regulated healthcare software', 'DICOM redaction inside FDA-regulated trial software. Audit requirements, clinical SMEs and imaging data that cannot be wrong.', '03'],
      ['[YEAR]', 'Medical imaging review', 'Dense diagnostic data, an expert audience and no room for a wrong default.', '04'],
      ['[YEAR]', 'Money movement', 'Cashier and deposit flows for a transactional product — trust at the exact moment a user decides to stop.', '05'],
      ['[YEAR]', 'A design system non-designers could build in', 'Components, documentation and enough guardrails to be safe in other hands.', '06'],
      ['Now', 'Available for agency overflow', 'Senior capacity, no ramp. Your name on the work, mine on the invoice.', null]
    ].map((e,i,arr)=>`<div style="display:contents">
      <div style="padding:26px 0;text-align:right;padding-right:28px;border-right:1px solid ${P.rule};position:relative">
        <span class="mono" style="font-size:13px;color:${e[0]==='Now'?P.green:P.mute};letter-spacing:.06em">${e[0]}</span>
      </div>
      <div style="padding:26px 0 26px 32px;border-bottom:1px solid ${i===arr.length-1?'transparent':P.hair};display:grid;grid-template-columns:${e[3]?'1fr 300px':'1fr'};gap:32px;align-items:start">
        <div>
          <h3 style="font-size:19px">${e[1]}</h3>
          <p style="font-size:15px;margin-top:8px;max-width:64ch">${e[2]}</p>
        </div>
        ${e[3] ? slot(e[3], '1200 × 800', '150px') : ''}
      </div>
    </div>`).join('')}
  </div>

  <section style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;padding-top:32px;border-top:1px solid ${P.rule}">
    ${C.ways.map(w=>`<div style="display:flex;flex-direction:column;gap:8px">
      <h3>${w[0]}</h3>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:26px;color:${P.ink}">${w[1]}</div>
      <div class="mono" style="font-size:11px;color:${P.mute}">${w[2]}</div>
      <p style="font-size:14px">${w[3]}</p></div>`).join('')}
  </section>
</div>`
},

// ---------------------------------------------------------------- 09
{
  id: 'C09Brief', name: 'The Brief', w: W, h: 2000,
  principle: 'Laid out like the document a producer would write themselves',
  tradeoff: 'Speaks the reader&#39;s native format and answers procurement early. Looks like paperwork — least likely of the set to be shared for its craft.',
  html: `
${tag('09', 'The Brief', 'Laid out like the document a producer would write')}
<div style="flex:1;display:flex;justify-content:center;padding:56px 64px">
  <div style="width:960px;display:flex;flex-direction:column;gap:38px">

    <header style="display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:18px;border-bottom:2px solid ${P.ink}">
      <div>
        ${lab('Capability statement')}
        <div style="font-family:'Instrument Serif',Georgia,serif;font-size:38px;color:${P.ink};margin-top:8px">${C.name}</div>
      </div>
      <div style="text-align:right">
        <div class="mono" style="font-size:12px;color:${P.mute}">${C.city} · ${C.email}</div>
        <div class="mono" style="font-size:12px;color:${P.ink};margin-top:4px">${dot()}${C.status} · ${C.opening}</div>
      </div>
    </header>

    ${[
      ['1.0', 'The problem this solves', `<p style="font-size:17px">Your designers are the bottleneck, not the brief. I take a piece of work off the board and hand it back finished — design, prototype and shipped front-end code from one person.</p>`],
      ['2.0', 'Scope of engagement', `<div style="display:flex;flex-direction:column">${C.ways.map(w=>`<div style="display:grid;grid-template-columns:210px 150px 190px 1fr;gap:20px;padding:14px 0;border-bottom:1px solid ${P.hair};align-items:baseline">
          <h3 style="font-size:16px">${w[0]}</h3>
          <span class="mono" style="font-size:13px;color:${P.ink}">${w[1]}</span>
          <span class="mono" style="font-size:12px;color:${P.mute}">${w[2]}</span>
          <span style="font-size:14px">${w[3]}</span></div>`).join('')}</div>`],
      ['3.0', 'Terms', `<div style="display:flex;flex-direction:column;gap:0">${C.terms.map((t,i)=>`<div style="display:flex;gap:16px;padding:11px 0;border-bottom:1px solid ${P.hair}">
          <span class="mono" style="font-size:12px;color:${P.rule};min-width:34px">3.${i+1}</span>
          <span style="font-size:15px">${t}</span></div>`).join('')}</div>`],
      ['4.0', 'Relevant experience', `<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px">${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:10px">
          ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '160px')}
          <h3 style="font-size:15px">${w[0]}</h3>
          <p style="font-size:14px">${w[2]}</p></div>`).join('')}</div>`],
      ['5.0', 'Evidence', `<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px">${C.stats.map(s=>`<div style="display:flex;gap:18px;align-items:baseline;padding:12px 0;border-top:1px solid ${P.hair}">
          <span style="font-family:'Instrument Serif',Georgia,serif;font-size:30px;color:${P.ink};min-width:110px">${s[0]}</span>
          <span style="font-size:14px">${s[1]}</span></div>`).join('')}</div>`]
    ].map(s=>`<section style="display:grid;grid-template-columns:90px 1fr;gap:28px;align-items:start">
      <div class="mono" style="font-size:13px;color:${P.mute};padding-top:4px">${s[0]}</div>
      <div style="display:flex;flex-direction:column;gap:16px">
        <h2 style="font-size:26px">${s[1]}</h2>
        ${s[2]}
      </div>
    </section>`).join('')}

    <section style="display:grid;grid-template-columns:90px 1fr;gap:28px;align-items:start">
      <div class="mono" style="font-size:13px;color:${P.mute};padding-top:4px">6.0</div>
      <div style="background:${P.paper2};padding:30px;display:flex;justify-content:space-between;align-items:center;gap:28px">
        <div>
          <h2 style="font-size:26px">Next step</h2>
          <p style="font-size:15px;margin-top:6px">Twenty minutes is enough to know. MSA, rate card and terms ready to send.</p>
        </div>
        ${cta()}
      </div>
    </section>
  </div>
</div>`
},

// ---------------------------------------------------------------- 10
{
  id: 'C10Gallery', name: 'Gallery First', w: W, h: 1950,
  principle: 'Work fills the screen; words are captions and a thin persistent bar',
  tradeoff: 'The strongest showcase of you as a designer — and the one that most depends on the six photographs being excellent.',
  html: `
${tag('10', 'Gallery First', 'Work fills the screen; words are captions')}
<div style="flex:1;display:flex;flex-direction:column">

  <div style="position:relative">
    ${slot('01', 'Background band · 2400 × 1200 · focal point upper right', '520px')}
    <div style="position:absolute;left:64px;bottom:52px;right:64px;display:flex;justify-content:space-between;align-items:flex-end;gap:40px">
      <div>
        <div class="mono" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${P.mute}">Type sits over the band at partial opacity</div>
        <div style="font-family:'Instrument Serif',Georgia,serif;font-size:62px;color:${P.ink};line-height:1.04;max-width:16ch;margin-top:12px">I make complexity feel invisible.</div>
      </div>
      ${cta()}
    </div>
  </div>

  <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 64px;border-top:1px solid ${P.rule};border-bottom:1px solid ${P.rule};background:${P.paper}">
    <span style="font-size:15px;color:${P.ink}">${C.name} · Product design &amp; build · ${C.city}</span>
    <div style="display:flex;gap:34px;align-items:center">
      <span class="mono" style="font-size:12px;color:${P.ink}">${dot()}${C.status}</span>
      <span class="mono" style="font-size:12px;color:${P.mute}">${C.rate} / day</span>
      <span class="mono" style="font-size:12px;color:${P.mute}">Next opening ${C.opening}</span>
      <a href="#" style="font-size:13px">${C.email}</a>
    </div>
  </div>

  <div style="${pad};padding-top:48px;padding-bottom:56px;display:flex;flex-direction:column;gap:48px">
    <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:28px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:12px">
        ${slot('03', '1200 × 800', '400px')}
        <h3>${C.work[0][0]}</h3>
        <p style="font-size:14px;max-width:60ch">${C.work[0][2]}</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding-top:80px">
        ${slot('04', '1200 × 800', '300px')}
        <h3>${C.work[1][0]}</h3>
        <p style="font-size:14px">${C.work[1][2]}</p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:28px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:12px">
        ${slot('05', '1200 × 800', '300px')}
        <h3>${C.work[2][0]}</h3>
        <p style="font-size:14px">${C.work[2][2]}</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding-top:60px">
        ${slot('06', '1200 × 800', '380px')}
        <h3>${C.work[3][0]}</h3>
        <p style="font-size:14px;max-width:60ch">${C.work[3][2]}</p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:300px 1fr;gap:48px;padding-top:36px;border-top:1px solid ${P.rule};align-items:start">
      ${slot('02', 'Portrait · 1200 × 1500', '330px')}
      <div style="display:flex;flex-direction:column;gap:18px">
        <h2 style="font-size:34px;max-width:20ch">Complex product work, designed and built by one person.</h2>
        <p style="font-size:17px;max-width:60ch">Senior overflow capacity for agencies. The person you hire is the person who does the work.</p>
        <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:8px">
          ${C.ways.map(w=>`<div style="padding-top:14px;border-top:1px solid ${P.hair}">
            <h3 style="font-size:15px">${w[0]}</h3>
            <div class="mono" style="font-size:13px;color:${P.ink};margin-top:6px">${w[1]}</div>
            <div class="mono" style="font-size:11px;color:${P.mute}">${w[2]}</div></div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</div>`
},

// ---------------------------------------------------------------- 11
{
  id: 'C11Spec', name: 'Spec Sheet', w: W, h: 1700, bg: '#14171A',
  principle: 'Monospace, dark, key–value pairs — reads like documentation',
  tradeoff: 'Instantly signals the designer who also ships code. Narrow appeal: a brand-led producer may read it as cold or junior-engineer.',
  html: `
${tag('11', 'Spec Sheet', 'Monospace, dark, key–value pairs')}
<div style="flex:1;${pad};padding-top:52px;padding-bottom:56px;display:flex;flex-direction:column;gap:42px;background:#14171A;color:#A8AEA6;font-family:'IBM Plex Mono',monospace">

  <header style="display:flex;justify-content:space-between;align-items:flex-start">
    <div>
      <div style="font-size:13px;color:#6E756C;letter-spacing:.16em;text-transform:uppercase">Designer / builder</div>
      <div style="font-size:42px;color:#F2F0EA;margin-top:10px;letter-spacing:-.01em">${C.name}</div>
    </div>
    <div style="text-align:right;font-size:13px;line-height:1.9">
      <div style="color:#8FBFA3">${dot()}${C.status}</div>
      <div style="color:#6E756C">${C.city} · your timezone</div>
      <div><a href="#" style="color:#8FBFA3">${C.email}</a></div>
    </div>
  </header>

  <div style="font-size:15px;line-height:1.75;max-width:70ch;color:#C9CEC5">
    Complex product work, designed and built by one person. Senior overflow capacity for agencies — design, prototype and shipped front-end code, without a handoff between them.
  </div>

  ${[
    ['availability', [['status', C.status], ['next_opening', C.opening], ['day_rate', C.rate + '  (four-week minimum)'], ['location', C.city + ', invoices in your currency'], ['response', '[YOUR RESPONSE TIME]']]],
    ['engagements', C.ways.map(w=>[w[0].toLowerCase().replace(/ /g,'_'), w[1] + '  ·  ' + w[2]])],
    ['capabilities', C.plate.map(p=>[p[0].toLowerCase().replace(/[.,]/g,'').replace(/ /g,'_').slice(0,24), p[1]])],
    ['terms', C.terms.map((t,i)=>['term_' + String(i+1).padStart(2,'0'), t])]
  ].map(block=>`<section style="display:flex;flex-direction:column;gap:0">
    <div style="font-size:12px;color:#6E756C;letter-spacing:.16em;text-transform:uppercase;padding-bottom:10px;border-bottom:1px solid #262B29">${block[0]}</div>
    ${block[1].map(row=>`<div style="display:grid;grid-template-columns:280px 1fr;gap:24px;padding:12px 0;border-bottom:1px solid #1E2321;font-size:14px">
      <span style="color:#6E756C">${row[0]}</span>
      <span style="color:#D6DBD2">${row[1]}</span>
    </div>`).join('')}
  </section>`).join('')}

  <section style="display:flex;flex-direction:column;gap:0">
    <div style="font-size:12px;color:#6E756C;letter-spacing:.16em;text-transform:uppercase;padding-bottom:10px;border-bottom:1px solid #262B29">selected_work</div>
    ${C.work.map((w,i)=>`<div style="display:grid;grid-template-columns:60px 1fr 160px;gap:24px;padding:16px 0;border-bottom:1px solid #1E2321;font-size:14px;align-items:baseline">
      <span style="color:#3E4442">${String(i+1).padStart(2,'0')}</span>
      <span style="color:#F2F0EA">${w[0]}</span>
      <span style="color:#6E756C;text-align:right">${w[1]}</span>
    </div>`).join('')}
  </section>

  <div style="display:flex;justify-content:space-between;align-items:center;border:1px solid #262B29;padding:26px 30px">
    <span style="font-size:16px;color:#F2F0EA">Twenty minutes is enough to know.</span>
    <a href="#" style="display:inline-flex;align-items:center;min-height:48px;padding:0 26px;background:#8FBFA3;color:#14171A;text-decoration:none;font-size:14px">Book 20 minutes →</a>
  </div>
</div>`
},

// ---------------------------------------------------------------- 12
{
  id: 'C12Questions', name: 'Their Questions', w: W, h: 2050,
  principle: 'Every heading is a question the producer is already asking',
  tradeoff: 'The most persuasive structure here and the easiest to write. Repetitive at length; needs strict discipline on question count.',
  html: `
${tag('12', 'Their Questions', 'Every heading is a question the producer is asking')}
<div style="${pad};padding-top:56px;padding-bottom:56px;display:flex;flex-direction:column;gap:46px;flex:1">

  <header style="display:grid;grid-template-columns:1fr 300px;gap:56px;align-items:start">
    <div>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink}">${C.name}</div>
      <h1 style="font-size:60px;margin-top:22px;max-width:16ch">You have a gap. Here is everything you were going to ask.</h1>
      <p style="font-size:18px;margin-top:20px;max-width:56ch">Senior product design and front-end capacity for agencies, available immediately from ${C.city}.</p>
    </div>
    <aside style="border:1px solid ${P.rule};padding:24px;display:flex;flex-direction:column;gap:18px">
      ${fact('Status', dot() + C.status, '', '17px')}
      ${hr()}
      ${fact('Day rate', C.rate, C.rateSub, '30px')}
      ${hr()}
      ${fact('Next opening', C.opening, '', '17px')}
      ${cta('Book 20 minutes', true)}
    </aside>
  </header>

  ${[
    ['How fast can you start?', `${C.status}. Next opening ${C.opening}. Nine years in-house on complex products means no ramp — I have read a messy Confluence page before, and I will not need a kickoff series.`, null],
    ['Will it look like our work?', 'I match your system, not mine. Working inside someone else&#39;s design system, brand and component library is most of what I have done. Your client should not be able to tell.', null],
    ['Who does the actual work?', 'I do. No account manager, no relay, no junior. The person you hire is the person who does the work — and I build as well as draw, so nothing waits on a handoff.', '02'],
    ['What does it cost?', null, 'ways'],
    ['Can you handle our hardest project?', null, 'work'],
    ['What do I have to sign?', 'Registered business, own MSA and contracts, invoices from a legal entity in your currency. MSA, rate card and terms are ready to send — you can have this signed today.', null]
  ].map((q,i)=>`<section style="display:grid;grid-template-columns:80px 1fr;gap:32px;padding-top:26px;border-top:1px solid ${P.hair};align-items:start">
    <span class="mono" style="font-size:12px;color:${P.rule};padding-top:8px">${String(i+1).padStart(2,'0')}</span>
    <div style="display:flex;flex-direction:column;gap:16px">
      <h2 style="font-size:36px;max-width:24ch">${q[0]}</h2>
      ${q[1] ? `<p style="font-size:17px;max-width:70ch">${q[1]}</p>` : ''}
      ${q[2]==='ways' ? `<div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px">${C.ways.map(w=>`<div style="border:1px solid ${P.hair};padding:22px;display:flex;flex-direction:column;gap:8px">
          <h3>${w[0]}</h3>
          <div style="font-family:'Instrument Serif',Georgia,serif;font-size:26px;color:${P.ink}">${w[1]}</div>
          <div class="mono" style="font-size:11px;color:${P.mute}">${w[2]}</div>
          <p style="font-size:14px">${w[3]}</p></div>`).join('')}</div>` : ''}
      ${q[2]==='work' ? `<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px">${C.work.map((w,j)=>`<div style="display:flex;flex-direction:column;gap:10px">
          ${slot(String(j+3).padStart(2,'0'), '1200 × 800', '140px')}
          <h3 style="font-size:14px">${w[0]}</h3></div>`).join('')}</div>` : ''}
      ${q[2]==='02' ? `<div style="display:flex;gap:24px;align-items:flex-start;margin-top:4px">${slot('02','Portrait · 1200 × 1500','200px')}<p style="font-size:15px;max-width:44ch;padding-top:4px">I close my own loops. I will ask the questions that matter once and make the call on the rest — you get a decision log, not a queue of Slack messages.</p></div>` : ''}
    </div>
  </section>`).join('')}

  <section style="display:flex;justify-content:space-between;align-items:center;gap:32px;background:${P.paper2};padding:36px 40px">
    <h2 style="font-size:34px">Twenty minutes is enough to know.</h2>
    <div style="display:flex;gap:14px">${cta()}${ghost(C.email)}</div>
  </section>
</div>`
},

// ---------------------------------------------------------------- 13
{
  id: 'C13ThreeDoors', name: 'Three Doors', w: W, h: 1600,
  principle: 'The fold is a choice between three engagements, not a scroll',
  tradeoff: 'Qualifies the lead and frames budget immediately. Asks the reader to self-select before they trust you — risky if they came in cold.',
  html: `
${tag('13', 'Three Doors', 'The fold is a choice between three engagements')}
<div style="${pad};padding-top:52px;padding-bottom:56px;display:flex;flex-direction:column;gap:44px;flex:1">

  <header style="display:flex;justify-content:space-between;align-items:center">
    <div style="display:flex;align-items:baseline;gap:16px">
      <span style="font-family:'Instrument Serif',Georgia,serif;font-size:24px;color:${P.ink}">${C.name}</span>
      <span class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${P.mute}">Product design &amp; build · ${C.city}</span>
    </div>
    <span class="mono" style="font-size:12px;color:${P.ink}">${dot()}${C.status} · next opening ${C.opening}</span>
  </header>

  <div style="text-align:center;display:flex;flex-direction:column;gap:16px;align-items:center;padding:8px 0">
    <h1 style="font-size:58px;max-width:20ch">What do you need taken off the board?</h1>
    <p style="font-size:18px;max-width:56ch">Three fixed shapes, priced off a ${C.rate} day rate. Pick the one that matches your gap — or book twenty minutes and we will work it out.</p>
  </div>

  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px">
    ${C.ways.map((w,i)=>`<div style="border:1px solid ${i===1?P.green:P.rule};${i===1?`background:${P.paper2};`:''}padding:34px 30px;display:flex;flex-direction:column;gap:18px;min-height:420px">
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        ${lab('Door ' + String(i+1).padStart(2,'0'))}
      </div>
      <h2 style="font-size:30px">${w[0]}</h2>
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:40px;color:${P.ink};line-height:1">${w[1]}</div>
      <div class="mono" style="font-size:12px;color:${P.mute}">${w[2]}</div>
      <p style="font-size:15px">${w[3]}</p>
      <div style="flex:1"></div>
      <div style="display:flex;flex-direction:column;gap:9px;padding-top:16px;border-top:1px solid ${P.hair}">
        ${['Design, prototype and front-end from one person','Inside your system and your brand','White-label — your name on the work'].map(f=>`<div style="display:flex;gap:10px;align-items:baseline">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${P.green}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="flex:none;position:relative;top:2px"><path d="M4 12.5 9.5 18 20 6.5"/></svg>
          <span style="font-size:14px">${f}</span></div>`).join('')}
      </div>
      ${i===1 ? cta('Book 20 minutes', true) : ghost('Book 20 minutes')}
    </div>`).join('')}
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:56px;padding-top:36px;border-top:1px solid ${P.rule}">
    <div style="display:flex;flex-direction:column;gap:16px">
      ${lab('Why one person is enough')}
      ${C.plate.slice(0,3).map(p=>`<div style="padding-bottom:14px;border-bottom:1px solid ${P.hair}"><h3>${p[0]}</h3><p style="font-size:14px;margin-top:5px">${p[1]}</p></div>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      ${lab('Recent work')}
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px">
        ${C.work.slice(0,2).map((w,i)=>`<div style="display:flex;flex-direction:column;gap:10px">
          ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '150px')}
          <h3 style="font-size:14px">${w[0]}</h3></div>`).join('')}
      </div>
      <a href="#" style="font-size:14px">Full case studies at ${C.portfolio}</a>
    </div>
  </div>
</div>`
},

// ---------------------------------------------------------------- 14
{
  id: 'C14Console', name: 'Console', w: W, h: 1500,
  principle: 'Persistent left nav, content pane — the site behaves like an app',
  tradeoff: 'Demonstrates product thinking in the chrome itself. Heavier to build, and an unusual shape for a site someone forwards by link.',
  html: `
${tag('14', 'Console', 'Persistent left nav, content pane — behaves like an app')}
<div style="display:flex;flex:1">

  <nav style="width:250px;flex:none;background:${P.paper2};border-right:1px solid ${P.hair};padding:32px 0;display:flex;flex-direction:column;gap:26px">
    <div style="padding:0 26px">
      <div style="font-family:'Instrument Serif',Georgia,serif;font-size:22px;color:${P.ink}">${C.name}</div>
      <div class="mono" style="font-size:11px;color:${P.mute};margin-top:4px">${C.city}</div>
    </div>
    <div style="padding:0 26px">${hr(P.rule)}</div>
    <div style="display:flex;flex-direction:column;gap:2px">
      ${[['Overview','i-grid',true],['Selected work','i-page',false],['What I take on','i-loop',false],['Ways to work','i-brackets',false],['Rates &amp; terms','i-page',false],['About',
      'i-cat',false]].map(n=>`<a href="#" style="display:flex;align-items:center;gap:12px;padding:10px 26px;font-size:14px;text-decoration:none;color:${n[2]?P.ink:P.body};background:${n[2]?P.paper:'transparent'};border-left:2px solid ${n[2]?P.green:'transparent'}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17"/><path d="M3.5 9.2h17"/></svg>
        ${n[0]}</a>`).join('')}
    </div>
    <div style="flex:1"></div>
    <div style="padding:0 26px;display:flex;flex-direction:column;gap:14px">
      ${hr(P.rule)}
      ${fact('Status', dot() + C.status, '', '15px')}
      ${fact('Day rate', C.rate, C.rateSub, '22px')}
      ${cta('Book 20 minutes', true)}
    </div>
  </nav>

  <main style="flex:1;display:flex;flex-direction:column">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 40px;border-bottom:1px solid ${P.hair}">
      ${lab('Overview')}
      <a href="#" style="font-size:13px">${C.email}</a>
    </div>
    <div style="padding:44px 40px;display:flex;flex-direction:column;gap:38px">
      <h1 style="font-size:50px;max-width:20ch">Complex product work, designed and built by one person.</h1>

      <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px">
        ${C.stats.map(s=>`<div style="border:1px solid ${P.hair};padding:22px;display:flex;flex-direction:column;gap:8px;min-height:150px">
          <div style="font-family:'Instrument Serif',Georgia,serif;font-size:34px;color:${P.ink};line-height:1">${s[0]}</div>
          <p style="font-size:13px">${s[1]}</p></div>`).join('')}
      </div>

      <section style="display:flex;flex-direction:column;gap:18px">
        <div style="display:flex;justify-content:space-between;align-items:baseline">
          ${lab('Selected work')}
          <a href="#" style="font-size:13px">View all at ${C.portfolio}</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px">
          ${C.work.map((w,i)=>`<div style="display:flex;flex-direction:column;gap:10px">
            ${slot(String(i+3).padStart(2,'0'), '1200 × 800', '140px')}
            <h3 style="font-size:14px">${w[0]}</h3>
            <div class="mono" style="font-size:11px;color:${P.mute}">${w[1]}</div></div>`).join('')}
        </div>
      </section>

      <section style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px">
        ${C.ways.map(w=>`<div style="border:1px solid ${P.hair};padding:22px;display:flex;flex-direction:column;gap:8px">
          <h3>${w[0]}</h3>
          <div class="mono" style="font-size:14px;color:${P.ink}">${w[1]}</div>
          <div class="mono" style="font-size:11px;color:${P.mute}">${w[2]}</div>
          <p style="font-size:13px;margin-top:4px">${w[3]}</p></div>`).join('')}
      </section>
    </div>
  </main>
</div>`
}

];
