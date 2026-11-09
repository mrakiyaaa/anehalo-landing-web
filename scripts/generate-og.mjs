// Renders scripts/og/og.html to public/og.png (1200x630) with a locally installed Chrome or Edge.
// Run once after design changes: node scripts/generate-og.mjs  (set CHROME_PATH to pick a browser)
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = candidates.find((candidate) => existsSync(candidate));
if (!browser) throw new Error("No Chrome or Edge found. Set CHROME_PATH.");

const profile = mkdtempSync(path.join(tmpdir(), "anehalo-og-"));
const shot = path.join(profile, "shot.png");
try {
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    `--user-data-dir=${profile}`,
    "--virtual-time-budget=5000",
    "--window-size=1200,630",
    `--screenshot=${shot}`,
    pathToFileURL(path.join(root, "scripts/og/og.html")).href,
  ], { stdio: "inherit" });
  const info = await sharp(shot).resize(1200, 630).png({ compressionLevel: 9 }).toFile(path.join(root, "public/og.png"));
  console.log(`public/og.png  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
