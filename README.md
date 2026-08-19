# panacci.design

Marketing site for **Panacci** — the product design and build practice of
Victoria Panacci, operating as Victoria Panacci Designs, Toronto.

This is **not a portfolio**. The portfolio lives at
[victoriapanacci.ca](https://victoriapanacci.ca) for a different reader. This
site has one job: convert an agency producer into a booked engagement.

## Status

Design direction approved. Static prototype committed. The production build has
not been started.

| | |
|---|---|
| Direction | **Rule & Rail** — sticky facts rail, Fraunces 300 + Public Sans |
| Prototype | [`index.html`](index.html) |
| Alternate considered | [`explorations/graphite-slab.html`](explorations/graphite-slab.html) |
| Full exploration | [`explorations/twenty-directions.html`](explorations/twenty-directions.html) |

## What the prototype establishes

Real structure and real copy, in the section order the brief specifies — the
order answers the reader's questions in the order they ask them, and must not be
rearranged.

1. Hero — availability, rate, book. Type and figures only, no photograph.
2. What I take off your plate — the fear-killer, and the most important section.
3. Background band — one full-bleed image carrying the claim.
4. How working together goes — white-label terms, stated flatly.
5. Ways to work — three fixed shapes, priced off the day rate.
6. Proof.
7. Selected work — the tiebreaker, linking out to victoriapanacci.ca.
8. Book.
9. `/rates` — self-contained, printable, forwardable to procurement.

The **rail** is the idea: availability, rate, next opening and the booking
action stay on screen through the whole scroll. Below 900px it becomes a fixed
bottom action bar, thumb-reachable, which tucks away when the Book section is in
view.

## Imagery

Six photographs, each earning its place. Nothing decorative.

| Slot | What it is | Size |
|---|---|---|
| 01 | Background band — wide, dark, atmospheric. Sits under a solid ground at partial opacity so an ordinary photograph still reads as a deliberate crop. | 2400 × 1200 |
| 02 | Portrait | 1200 × 1500 |
| 03–06 | Case thumbnails | 1200 × 800 |
| 07 | Mordecai | 800 × 800 |

## Outstanding before launch

- [ ] Booking URL (Cal.com or similar, 20-minute intro slot)
- [ ] Stated response time
- [ ] `/rates`: payment terms, deposit, cancellation, currency, IP assignment
- [ ] The six photographs
- [ ] OG image

## Planned production build

- Next.js (App Router) + TypeScript, static generation, deployed to Vercel
- No database, no CMS, no auth
- `config/status.ts` — availability, next opening, day rate, booking URL in one
  editable place, so status changes never touch markup
- Metadata targeting "white label product design Toronto", "contract product
  designer Toronto", "agency overflow design"
- `/rates` prints cleanly to PDF

## Quality floor

Already met in the prototype and non-negotiable in the build: responsive to
375px, visible keyboard focus on every interactive element,
`prefers-reduced-motion` respected, semantic heading order and real landmarks,
WCAG AA colour contrast.

## Content rules

- Career starts **2017**. Never "since 2011".
- All roles were in-house employment. Never name an employer's customers as
  clients.
- "FDA-regulated" applies **only** to the healthcare work. Never apply
  regulatory language to the gaming work, and never name a gaming regulator.
- Independent practice 2019–2022 gets one bare line. No projects, no logos.
- Do not invent metrics, clients, or testimonials.

---

Victoria Panacci Designs · Toronto
