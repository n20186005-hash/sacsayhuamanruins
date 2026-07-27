import fs from "node:fs";
const s = fs.readFileSync("dist/es/index.html", "utf8");
const re = /[一-鿿]+/g;
let m;
const seen = new Set();
while ((m = re.exec(s))) {
  const start = Math.max(0, m.index - 40);
  const end = Math.min(s.length, m.index + m[0].length + 40);
  const ctx = s.slice(start, end).replace(/\s+/g, " ");
  const key = ctx;
  if (!seen.has(key)) {
    seen.add(key);
    console.log("—", ctx);
  }
}
