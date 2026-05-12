import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.resolve("public/images/blog");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const CREAM = "#f3f2ef";
const BLACK = "#000000";
const RED = "#d4292b";

const W = 1600;
const H = 900;

// Each concept: a self-contained SVG body (children of an outer <svg viewBox="0 0 1600 900">).
// Pure Bauhaus geometry. No text. No shadow. No gradient. No radius.
const covers = [
  {
    slug: "claude-code-notebooklm",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <rect x="220" y="290" width="320" height="320" fill="${BLACK}"/>
      <rect x="1060" y="290" width="320" height="320" fill="${BLACK}"/>
      <rect x="540" y="430" width="520" height="40" fill="${RED}"/>
      <rect x="240" y="660" width="120" height="6" fill="${BLACK}"/>
      <rect x="1240" y="660" width="120" height="6" fill="${BLACK}"/>
    `,
  },
  {
    slug: "ai-agents-2026",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <circle cx="800" cy="450" r="290" fill="${BLACK}"/>
      <circle cx="800" cy="450" r="170" fill="${CREAM}"/>
      <polygon points="380,720 1300,180 1340,240 420,780" fill="${RED}"/>
      <polygon points="1300,180 1390,180 1340,240" fill="${RED}"/>
    `,
  },
  {
    slug: "mastering-the-javascript-date-object",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <circle cx="800" cy="450" r="320" fill="${BLACK}"/>
      <path d="M 800 130 A 320 320 0 0 1 1120 450 L 800 450 Z" fill="${RED}"/>
      <path d="M 800 770 A 320 320 0 0 1 480 450 L 800 450 Z" fill="${CREAM}"/>
      <circle cx="800" cy="450" r="22" fill="${CREAM}"/>
      <rect x="794" y="200" width="12" height="260" fill="${CREAM}"/>
      <rect x="794" y="444" width="220" height="12" fill="${CREAM}"/>
    `,
  },
  {
    slug: "test-best-webflow-developer-2026",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <rect x="640" y="220" width="220" height="540" fill="${BLACK}"/>
      <rect x="320" y="360" width="220" height="400" fill="${BLACK}"/>
      <rect x="960" y="460" width="220" height="300" fill="${BLACK}"/>
      <rect x="640" y="200" width="220" height="20" fill="${RED}"/>
      <rect x="320" y="340" width="220" height="20" fill="${RED}"/>
      <rect x="960" y="440" width="220" height="20" fill="${RED}"/>
    `,
  },
  {
    slug: "test-webflow-vs-wordpress-2026",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <rect x="180" y="230" width="500" height="440" fill="${RED}"/>
      <rect x="920" y="230" width="500" height="440" fill="${BLACK}"/>
      <polygon points="780,180 720,180 820,720 880,720" fill="${BLACK}"/>
    `,
  },
  {
    slug: "webflow-vs-lovable",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <polygon points="180,720 540,250 540,720" fill="${BLACK}"/>
      <circle cx="1180" cy="490" r="240" fill="${RED}"/>
      <rect x="794" y="220" width="12" height="500" fill="${BLACK}"/>
    `,
  },
  {
    slug: "clean-webflow-architecture-structured-cms",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      ${[0, 1, 2].map(r => [0, 1, 2].map(c => {
        const isPulled = r === 1 && c === 2;
        const x = 480 + c * 220 + (isPulled ? 56 : 0);
        const y = 150 + r * 220 + (isPulled ? -24 : 0);
        const fill = isPulled ? RED : BLACK;
        return `<rect x="${x}" y="${y}" width="180" height="180" fill="${fill}"/>`;
      }).join("")).join("")}
    `,
  },
  {
    slug: "webflow-automation-save-hours",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <circle cx="800" cy="450" r="320" fill="none" stroke="${BLACK}" stroke-width="20"/>
      <circle cx="800" cy="450" r="220" fill="none" stroke="${BLACK}" stroke-width="20"/>
      <circle cx="800" cy="450" r="120" fill="none" stroke="${BLACK}" stroke-width="20"/>
      <path d="M 800 130 A 320 320 0 0 1 1093 333" fill="none" stroke="${RED}" stroke-width="36" stroke-linecap="butt"/>
      <circle cx="800" cy="450" r="18" fill="${BLACK}"/>
    `,
  },
  {
    slug: "webflow-development-2025",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <rect x="660" y="560" width="280" height="180" fill="${BLACK}"/>
      <circle cx="800" cy="430" r="130" fill="${RED}"/>
      <polygon points="800,140 940,300 660,300" fill="${BLACK}"/>
    `,
  },
  {
    slug: "webflow-fastest-high-performance-websites",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <polygon points="240,720 760,160 880,160 360,720" fill="${RED}"/>
      <polygon points="520,720 1040,160 1160,160 640,720" fill="${RED}"/>
      <polygon points="800,720 1320,160 1440,160 920,720" fill="${RED}"/>
      <rect x="120" y="436" width="1360" height="28" fill="${BLACK}"/>
    `,
  },
  {
    slug: "webflow-integrations-automation",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <rect x="340" y="436" width="920" height="28" fill="${BLACK}"/>
      <circle cx="340" cy="450" r="150" fill="${BLACK}"/>
      <circle cx="800" cy="450" r="180" fill="${RED}"/>
      <circle cx="1260" cy="450" r="150" fill="${BLACK}"/>
    `,
  },
  {
    slug: "wordpress-vs-webflow-2025",
    svg: `
      <rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
      <polygon points="0,0 1100,0 500,900 0,900" fill="${RED}"/>
      <polygon points="1100,0 1140,0 540,900 500,900" fill="${BLACK}"/>
      ${[600, 760, 920, 1080, 1240, 1400].map(x => `<line x1="${x}" y1="0" x2="${x - 90}" y2="900" stroke="${BLACK}" stroke-width="2" stroke-opacity="0.35"/>`).join("")}
      ${[120, 280, 440, 600, 760].map(y => `<line x1="540" y1="${y}" x2="${W}" y2="${y}" stroke="${BLACK}" stroke-width="2" stroke-opacity="0.35"/>`).join("")}
    `,
  },
];

function makeHTML(svgBody) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
  html, body { margin: 0; padding: 0; background: ${CREAM}; }
  svg { display: block; }
</style></head>
<body>
  <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    ${svgBody}
  </svg>
</body></html>`;
}

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

for (const cover of covers) {
  await page.setContent(makeHTML(cover.svg), { waitUntil: "load" });
  const out = path.join(OUTPUT_DIR, `${cover.slug}.png`);
  await page.screenshot({
    path: out,
    clip: { x: 0, y: 0, width: W, height: H },
    type: "png",
  });
  console.log(`✓ ${cover.slug}.png`);
}

await browser.close();
console.log(`\nDone — ${covers.length} covers in ${OUTPUT_DIR}`);
