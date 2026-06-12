// SNS 공유용 OG 카드(1200x630) 일괄 생성.
// 빌드 산출물이 아니라 정적 파일로 커밋한다: node --experimental-strip-types scripts/og.mjs
import { chromium } from "playwright";
import { mkdirSync, existsSync, readFileSync } from "fs";
import { pathToFileURL } from "url";
import { resolve } from "path";

const { projects, profile, stats } = await import(
  pathToFileURL(resolve("data/projects.ts")).href
);

mkdirSync("public/og", { recursive: true });

const baseStyle = `
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    font-family: "Malgun Gothic", "Apple SD Gothic Neo", sans-serif;
    background: #07070c; color: #ededf2; display: flex;
  }
`;

function projectHtml(p) {
  const shotPath = p.screenshot
    ? `data:image/png;base64,${readFileSync("public" + p.screenshot).toString("base64")}`
    : null;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${baseStyle}
    .left { width: ${shotPath ? "55%" : "100%"}; padding: 64px; display: flex; flex-direction: column; justify-content: space-between;
      background: radial-gradient(1000px 600px at 0% 0%, ${p.accent}33, transparent 60%), #07070c; }
    .chip { display: inline-block; padding: 8px 20px; border-radius: 999px; background: ${p.accent}33; color: ${p.accent}; font-size: 24px; font-weight: 700; }
    h1 { font-size: ${p.name.length > 10 ? 64 : 80}px; font-weight: 900; margin-top: 28px; letter-spacing: -2px; }
    .tagline { font-size: 30px; color: #a1a1aa; margin-top: 20px; line-height: 1.45; word-break: keep-all; }
    .footer { font-size: 24px; color: #71717a; font-weight: 700; }
    .footer b { color: #ededf2; }
    .right { width: 45%; position: relative; overflow: hidden; }
    .right img { position: absolute; top: 48px; left: 0; width: 760px; border-radius: 16px; border: 1px solid #3f3f46; box-shadow: 0 30px 80px rgba(0,0,0,.6); }
  </style></head><body>
    <div class="left">
      <div>
        <span class="chip">${p.category}${p.highlight ? " · " + p.highlight : ""}</span>
        <h1>${p.name}</h1>
        <p class="tagline">${p.tagline}</p>
      </div>
      <p class="footer"><b>${profile.name}</b> · AI 빌더 포트폴리오</p>
    </div>
    ${shotPath ? `<div class="right"><img src="${shotPath}"></div>` : ""}
  </body></html>`;
}

function homeHtml() {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${baseStyle}
    body { flex-direction: column; justify-content: space-between; padding: 72px;
      background: radial-gradient(900px 500px at 10% 0%, #6366f144, transparent 60%),
                  radial-gradient(900px 500px at 90% 100%, #d946ef33, transparent 60%), #07070c; }
    .kicker { font-size: 26px; letter-spacing: 8px; color: #818cf8; font-weight: 700; }
    h1 { font-size: 96px; font-weight: 900; letter-spacing: -3px; margin-top: 24px; line-height: 1.15; }
    h1 .grad { background: linear-gradient(90deg, #818cf8, #a78bfa, #e879f9); -webkit-background-clip: text; color: transparent; }
    .stats { display: flex; gap: 72px; }
    .stats .v { font-size: 56px; font-weight: 900; }
    .stats .l { font-size: 24px; color: #71717a; margin-top: 4px; }
  </style></head><body>
    <div>
      <p class="kicker">${profile.name.toUpperCase()} · BUILDER</p>
      <h1>아이디어를 <span class="grad">일주일 안에</span><br>실서비스로.</h1>
    </div>
    <div class="stats">
      ${stats.map((s) => `<div><div class="v">${s.value}</div><div class="l">${s.label}</div></div>`).join("")}
    </div>
  </body></html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

await page.setContent(homeHtml(), { waitUntil: "networkidle" });
await page.screenshot({ path: "public/og/home.png" });
console.log("OK home");

for (const p of projects) {
  if (p.screenshot && !existsSync("public" + p.screenshot)) {
    console.log(`SKIP ${p.slug}: screenshot missing`);
    continue;
  }
  await page.setContent(projectHtml(p), { waitUntil: "networkidle" });
  await page.waitForFunction(() =>
    Array.from(document.images).every((i) => i.complete && i.naturalWidth > 0)
  );
  await page.screenshot({ path: `public/og/${p.slug}.png` });
  console.log(`OK ${p.slug}`);
}

await browser.close();
