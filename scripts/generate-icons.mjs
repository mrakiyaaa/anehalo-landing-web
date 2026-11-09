// Builds every icon the site uses from public/app-icon.png.
// Run with: node scripts/generate-icons.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public/app-icon.png");

const outputs = [
  { file: "public/icon.webp", size: 512, format: "webp" },
  { file: "public/icon-small.webp", size: 96, format: "webp" },
  { file: "src/app/icon.png", size: 512, format: "png" },
  { file: "src/app/apple-icon.png", size: 180, format: "png" },
];

for (const { file, size, format } of outputs) {
  // trim() drops the transparent margin around the artwork so it fills the box like the design.
  const trimmed = await sharp(source).trim({ threshold: 1 }).toBuffer();
  const image = sharp(trimmed).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } });
  const encoded = format === "webp" ? image.webp({ quality: 90, alphaQuality: 100 }) : image.png({ compressionLevel: 9 });
  const info = await encoded.toFile(path.join(root, file));
  console.log(`${file}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
}
