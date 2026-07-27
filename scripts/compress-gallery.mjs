import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const dir = "public/gallery";
const LIMIT_MB = 20; // 压缩超过此阈值的图片，确保远低于 Cloudflare 25 MiB 限制
const MAX_WIDTH = 2000;
const QUALITY = 80;

const files = fs
  .readdirSync(dir)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort();

let changed = false;
for (const f of files) {
  const p = path.join(dir, f);
  const sizeMB = fs.statSync(p).size / (1024 * 1024);
  if (sizeMB <= LIMIT_MB) {
    console.log(`${f}: ${sizeMB.toFixed(2)} MB (ok)`);
    continue;
  }
  const img = sharp(p);
  const meta = await img.metadata();
  const resizeOpts = meta.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};
  await img
    .resize(resizeOpts)
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(p + ".tmp");
  fs.renameSync(p + ".tmp", p);
  const newMB = fs.statSync(p).size / (1024 * 1024);
  console.log(`${f}: ${sizeMB.toFixed(2)} MB -> ${newMB.toFixed(2)} MB`);
  changed = true;
}

if (!changed) console.log("No images needed compression.");
