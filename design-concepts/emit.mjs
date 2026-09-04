import { FONTS, BASE, P, writeFileSync } from './build.mjs';

export function emit(c) {
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
    ${FONTS}
    <style>${BASE}</style>
</helmet>
<div style="width:${c.w}px;min-height:${c.h}px;background:${c.bg || P.paper};display:flex;flex-direction:column">
${c.html}
</div>
</x-dc>
</body>
</html>
`;
  writeFileSync(`${c.id}.dc.html`, html);
  return c;
}

// concept header strip shown at the very top of each artboard
export function tag(n, name, principle) {
  return `<div style="display:flex;align-items:baseline;gap:14px;padding:14px 40px;background:${P.ink};color:${P.paper}">
    <span class="mono" style="font-size:11px;letter-spacing:.16em;color:#9C9A90">${n}</span>
    <span style="font-size:14px;font-weight:500;color:${P.paper}">${name}</span>
    <span class="mono" style="font-size:11px;color:#9C9A90;letter-spacing:.04em">${principle}</span>
  </div>`;
}
