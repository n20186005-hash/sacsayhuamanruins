const fs = require('fs');
const p = 'c:/Users/Administrator/Documents/GitHub/秘鲁/saqsaywaman/src/i18n/translations.ts';
let c = fs.readFileSync(p, 'utf8');

// 1. Add SaqsaywamanSection type after CultureSection
c = c.replace(
  'export type CultureSection = { subtitle: string; content: string };',
  'export type CultureSection = { subtitle: string; content: string };\nexport type SaqsaywamanSection = { subtitle: string; content: string };'
);

// 2. Add saqsaywaman to Translations type
c = c.replace(
  '  culture: CultureSection;\n  visiting:',
  '  culture: CultureSection;\n  saqsaywaman: SaqsaywamanSection;\n  visiting:'
);

// 3. Add saqsaywaman to zh nav
c = c.replace(
  'culture: "印加文化", bestTime:',
  'culture: "印加文化", saqsaywaman: "萨克塞华曼", bestTime:'
);

// 4. Add saqsaywaman to en nav
c = c.replace(
  'culture: "Inca Culture", bestTime:',
  'culture: "Inca Culture", saqsaywaman: "Saqsaywaman", bestTime:'
);

// 5. Add saqsaywaman to es nav
c = c.replace(
  'culture: "Cultura Inca", bestTime:',
  'culture: "Cultura Inca", saqsaywaman: "Saqsaywaman", bestTime:'
);

// 6. Add saqsaywaman to qu nav
c = c.replace(
  'culture: "Kultura", bestTime:',
  'culture: "Kultura", saqsaywaman: "Saqsaywaman", bestTime:'
);

fs.writeFileSync(p, c, 'utf8');
console.log('Types and nav updated. Now add content...');
