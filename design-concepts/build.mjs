import { writeFileSync } from 'node:fs';

const P = {
  paper:'#FBFAF8', paper2:'#F4F2ED', ink:'#1A1B1D', body:'#4A4C4A',
  mute:'#8A887F', hair:'#E5E3DB', rule:'#D5D2C9', green:'#2E4A3F',
  plate:'#E3E0D8', dark:'#1E211D'
};

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Public+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">`;

const BASE = `
    * { box-sizing: border-box; }
    body { margin: 0; background: ${P.paper}; color: ${P.body};
      font-family: "Public Sans", "Helvetica Neue", Arial, sans-serif;
      font-weight: 300; font-size: 16px; line-height: 1.6;
      -webkit-font-smoothing: antialiased; }
    h1, h2, h3, h4 { margin: 0; color: ${P.ink}; font-weight: 400; text-wrap: balance; }
    h1, h2 { font-family: "Instrument Serif", Georgia, serif; font-weight: 400; line-height: 1.03; letter-spacing: -.01em; }
    h1 { font-size: 64px; }
    h2 { font-size: 34px; }
    h3 { font-size: 17px; font-family: "Public Sans", sans-serif; font-weight: 600; line-height: 1.35; letter-spacing: -.005em; }
    p { margin: 0; }
    a { color: ${P.green}; text-underline-offset: 3px; }
    a:hover { color: ${P.ink}; }
    .mono { font-family: "IBM Plex Mono", ui-monospace, monospace; }
`;

// ---------- small helpers ----------
const lab = (t, c = P.mute) =>
  `<div class="mono" style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:${c}">${t}</div>`;

const hr = (c = P.hair) => `<div style="height:1px;background:${c}"></div>`;

const vr = (c = P.hair) => `<div style="width:1px;background:${c};align-self:stretch"></div>`;

// visibly marked asset placeholder
const slot = (n, note, h = '220px') =>
  `<div style="display:flex;align-items:center;justify-content:center;height:${h};background:${P.plate};border:1px dashed ${P.rule};padding:16px">
      <div style="text-align:center">
        ${lab('Asset ' + n)}
        <div class="mono" style="font-size:11px;color:${P.mute};margin-top:6px">${note}</div>
      </div>
    </div>`;

const cta = (t = 'Book 20 minutes', full = false) =>
  `<a href="#" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;${full ? 'width:100%;' : ''}min-height:48px;padding:0 26px;background:${P.green};color:${P.paper};text-decoration:none;font-size:15px;font-weight:400">
      ${t}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15"/><path d="m13.5 6.5 5.5 5.5-5.5 5.5"/></svg>
    </a>`;

const ghost = (t) =>
  `<a href="#" style="display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 22px;border:1px solid ${P.rule};color:${P.ink};text-decoration:none;font-size:15px">${t}</a>`;

// a labelled fact, stacked
const fact = (l, v, sub = '', size = '22px') =>
  `<div style="display:flex;flex-direction:column;gap:5px">
      ${lab(l)}
      <div style="font-size:${size};color:${P.ink};line-height:1.15">${v}</div>
      ${sub ? `<div style="font-size:13px;color:${P.mute}">${sub}</div>` : ''}
    </div>`;

const dot = () =>
  `<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${P.green};margin-right:8px;vertical-align:middle"></span>`;

// ---------- real content ----------
const C = {
  name: 'Victoria Panacci',
  practice: 'Panacci',
  role: 'Product design &amp; build practice',
  city: 'Toronto',
  email: 'victoria@panacci.design',
  rate: '$1,000',
  rateSub: 'per day · four-week minimum',
  status: 'Available now',
  opening: 'Immediate',
  portfolio: 'victoriapanacci.ca',

  plate: [
    ['No ramp.', 'Nine years in-house on complex products. I have read a messy Confluence page before. I will not need a kickoff series.'],
    ['I match your system, not mine.', 'Working inside someone else&#39;s design system, brand and component library is most of what I have done. Your client should not be able to tell.'],
    ['I close my own loops.', 'I will ask the questions that matter once and make the call on the rest. You get a decision log, not a queue of Slack messages.'],
    ['I build, not just draw.', 'Design, prototype and shipped front-end code from one person. Nothing waits on a handoff.'],
    ['Paperwork is ready.', 'MSA, rate card and terms ready to send. You can have this signed today.']
  ],

  terms: [
    'Your brand, your deck, your client relationship. I am happy to be invisible.',
    'Or client-facing when it helps — I have run demos that drove $15M into a sales pipeline.',
    'No account manager, no relay, no junior doing the work. You get the person you hired.',
    'Registered business, own MSA and contracts, invoices from a legal entity.',
    'Toronto-based. Your timezone, your currency.'
  ],

  ways: [
    ['Pitch Sprint', '$3,000–5,000', '3–5 days', 'You are pitching; walk into the room with working software instead of static comps.'],
    ['Embedded Senior', '$1,000/day', '2–3 days/week · 4-week min.', 'Senior capacity with no ramp and no onboarding cost.'],
    ['Evidence Engagement', 'from $1,000/day', 'Scoped per engagement', 'Instrumentation, research and a written read on what the product is actually doing.']
  ],

  stats: [
    ['$15M', 'Driven into sales pipeline through product demos and client communication.'],
    ['~50%', 'Reduction in manual review effort — a first-of-its-kind DICOM redaction workflow inside FDA-regulated software.'],
    ['Systems', 'Design systems that let non-designers prototype independently.'],
    ['9 yrs', 'In-house, on complex product work, since 2017.']
  ],

  work: [
    ['DICOM redaction inside FDA-regulated trial software', 'Healthcare', 'Audit requirements, clinical SMEs and imaging data that cannot be wrong. Manual review effort down roughly half.'],
    ['Medical imaging review for clinical specialists', 'Healthcare', 'Dense diagnostic data, an expert audience and no room for a wrong default. Designed with clinical SMEs inside a regulated product.'],
    ['Cashier and deposit flows for a transactional product', 'Gaming', 'Money movement, account systems and trust at the exact moment a user decides to stop.'],
    ['A design system non-designers could build in', 'Platform', 'Components, documentation and enough guardrails to be safe in other hands.']
  ]
};

export { P, FONTS, BASE, lab, hr, vr, slot, cta, ghost, fact, dot, C, writeFileSync };
