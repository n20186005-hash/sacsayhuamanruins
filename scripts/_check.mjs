import fs from "node:fs";
const langs = ["es", "en", "qu", "zh"];
for (const l of langs) {
  const f = `dist/${l}/index.html`;
  const s = fs.readFileSync(f, "utf8");
  const m = s.match(/[一-鿿]/g);
  const ga = (s.match(/G-HXM22WWPKP/g) || []).length;
  const fo = s.includes('localStorage.getItem("theme")');
  const json = s.includes("application/ld+json");
  const xd = s.includes('hreflang="x-default"');
  const heroHasEs = s.includes("Sacsayhuamán") || s.includes("fortaleza");
  console.log(`${l}.html | 中文:${m ? m.length : 0} GA:${ga} 主题脚本:${fo} JSON-LD:${json} x-default:${xd} 含西语hero:${heroHasEs}`);
}
// 确认各语言页都包含主页面锚点（说明 React 岛已预渲染）
const es = fs.readFileSync("dist/es/index.html", "utf8");
console.log("es 含 #about 锚点:", es.includes('id="about"'));
console.log("es 含画廊:", es.includes("gallery-grid"));
console.log("es 含 FAQ:", es.includes("faq"));
