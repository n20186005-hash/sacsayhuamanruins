import fs from "fs";

const base = "https://www.sacsayhuamanruins.com";
const langs = ["zh", "en", "es", "qu"];
const topics = ["tickets", "opening-hours", "how-to-get-there", "history", "stones"];
const legal = ["privacy", "terms", "cookies"];

const urls = [];
langs.forEach((l) => urls.push({ u: `${base}/${l}/`, prio: "1.0" }));
langs.forEach((l) =>
  topics.forEach((t) => urls.push({ u: `${base}/${l}/${t}/`, prio: "0.8" }))
);
langs.forEach((l) =>
  legal.forEach((t) => urls.push({ u: `${base}/${l}/${t}/`, prio: "0.4" }))
);

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((x) => `  <url><loc>${x.u}</loc><priority>${x.prio}</priority></url>`).join("\n") +
  `\n</urlset>\n`;

fs.writeFileSync("public/sitemap.xml", xml);
console.log("wrote", urls.length, "urls to public/sitemap.xml");
