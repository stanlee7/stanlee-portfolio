import { chromium } from "playwright";
import { mkdirSync } from "fs";

const targets = [
  { slug: "golden-tube", url: "https://senior-tube.vercel.app" },
  { slug: "hwp-batch", url: "https://hwp-batch.vercel.app" },
  { slug: "fitpick", url: "https://fitpick-nine.vercel.app" },
  { slug: "fireguard", url: "https://fireguard-saas.vercel.app" },
  { slug: "text-behind-image", url: "https://text-behind-image-nine.vercel.app" },
  { slug: "sound-ai", url: "https://sound-ai-mvp.vercel.app" },
  { slug: "my-shorts", url: "https://my-shorts.vercel.app" },
  { slug: "mind-weather", url: "https://mind-weather-lovat.vercel.app" },
  { slug: "smart-card-scanner", url: "https://smart-card-scanner.vercel.app" },
  { slug: "designer-assistant", url: "https://gemma4-designer-assistant.vercel.app" },
  { slug: "ythink", url: "https://play.google.com/store/apps/details?id=com.stanleetam.mymooddiary&hl=ko" },
];

mkdirSync("public/screenshots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.5 });

for (const t of targets) {
  try {
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `public/screenshots/${t.slug}.png` });
    console.log(`OK ${t.slug}`);
  } catch (e) {
    console.log(`FAIL ${t.slug}: ${e.message}`);
  }
}

await browser.close();
