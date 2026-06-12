// 라이브 홈페이지를 캡처해 1280x720 썸네일로 합성: node scripts/thumbnail.mjs
import { chromium } from "playwright";
import { readFileSync } from "fs";

const browser = await chromium.launch();

// 1. 라이브 홈 캡처 (그리드 상단까지 보이도록 세로 길게)
const site = await browser.newPage({
  viewport: { width: 1440, height: 1500 },
  deviceScaleFactor: 1.5,
});
await site.goto("https://stanlee7.vercel.app", {
  waitUntil: "networkidle",
  timeout: 60000,
});
await site.waitForTimeout(2000);
await site.screenshot({ path: "public/screenshots/portfolio-home.png" });
console.log("OK capture");

// 2. 썸네일 합성
const shot = readFileSync("public/screenshots/portfolio-home.png").toString("base64");
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1280px; height: 720px; overflow: hidden; display: flex;
    font-family: "Malgun Gothic", "Apple SD Gothic Neo", sans-serif;
    background:
      radial-gradient(900px 600px at 0% 0%, #6366f155, transparent 60%),
      radial-gradient(900px 600px at 100% 100%, #d946ef44, transparent 60%),
      #07070c;
    color: #ededf2;
  }
  .left { width: 47%; padding: 72px 0 72px 64px; display: flex; flex-direction: column; justify-content: space-between; }
  .badge { display: inline-block; align-self: flex-start; padding: 10px 24px; border-radius: 999px;
    border: 2px solid #818cf8; color: #a5b4fc; font-size: 24px; font-weight: 700; letter-spacing: 2px; }
  h1 { font-size: 72px; font-weight: 900; line-height: 1.2; letter-spacing: -2px; margin-top: 36px; word-break: keep-all; }
  h1 .grad { background: linear-gradient(90deg, #818cf8, #a78bfa, #e879f9); -webkit-background-clip: text; color: transparent; }
  .sub { margin-top: 24px; font-size: 28px; color: #a1a1aa; line-height: 1.5; word-break: keep-all; }
  .url { font-size: 30px; font-weight: 900; color: #fff; }
  .url span { color: #818cf8; }
  .right { width: 53%; position: relative; }
  .frame { position: absolute; top: 64px; left: 24px; width: 760px; border-radius: 18px; overflow: hidden;
    border: 1px solid #3f3f46; box-shadow: 0 40px 100px rgba(0,0,0,.7); background: #18181b;
    transform: rotate(-2deg); }
  .bar { height: 44px; display: flex; align-items: center; gap: 10px; padding: 0 20px; background: #27272a; }
  .dot { width: 14px; height: 14px; border-radius: 50%; }
  .addr { flex: 1; margin-left: 12px; height: 26px; border-radius: 999px; background: #18181b;
    display: flex; align-items: center; padding: 0 16px; font-size: 15px; color: #a1a1aa; }
  .frame img { display: block; width: 100%; }
</style></head><body>
  <div class="left">
    <div>
      <span class="badge">PORTFOLIO OPEN</span>
      <h1>만든 것들을<br><span class="grad">전부 한 곳에</span><br>모았습니다.</h1>
      <p class="sub">SaaS · 도구 · 앱 · 실험 — 실서비스 12개 케이스 스터디</p>
    </div>
    <p class="url"><span>▸</span> stanlee7.vercel.app</p>
  </div>
  <div class="right">
    <div class="frame">
      <div class="bar">
        <div class="dot" style="background:#ef4444"></div>
        <div class="dot" style="background:#eab308"></div>
        <div class="dot" style="background:#22c55e"></div>
        <div class="addr">stanlee7.vercel.app</div>
      </div>
      <img src="data:image/png;base64,${shot}">
    </div>
  </div>
</body></html>`;

const card = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await card.setContent(html, { waitUntil: "networkidle" });
await card.waitForFunction(() =>
  Array.from(document.images).every((i) => i.complete && i.naturalWidth > 0)
);
await card.screenshot({ path: "public/thumbnail.png" });
console.log("OK thumbnail -> public/thumbnail.png");

await browser.close();
