// 로컬 dev 서버 화면 확인용 스크린샷
import { chromium } from "playwright";

const base = "http://localhost:3000";
const browser = await chromium.launch();

const desktop = await browser.newPage({ viewport: { width: 1440, height: 2400 } });
await desktop.goto(base, { waitUntil: "networkidle", timeout: 60000 });
await desktop.screenshot({ path: "verify-home.png", fullPage: false });

await desktop.goto(`${base}/projects/hwp-batch`, { waitUntil: "networkidle" });
await desktop.screenshot({ path: "verify-detail.png", fullPage: false });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(base, { waitUntil: "networkidle" });
await mobile.screenshot({ path: "verify-mobile.png" });

// OG 메타태그 확인
const html = await desktop.content();
const og = [...html.matchAll(/<meta[^>]+(?:property|name)="(og:[^"]+|twitter:[^"]+)"[^>]+content="([^"]+)"/g)]
  .map((m) => `${m[1]} = ${m[2]}`);
console.log(og.join("\n"));

await browser.close();
