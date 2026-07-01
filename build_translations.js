const fs = require('fs');
const path = require('path');

// Read the current translations.ts
const filePath = path.join(__dirname, 'src/i18n/translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The file was restored via git checkout, so it should be the original working version
// Let me just verify it has no syntax errors by checking for the old content

// Step 1: Add SaqsaywamanSection type after CultureSection
content = content.replace(
  'export type CultureSection = { subtitle: string; content: string };',
  'export type CultureSection = { subtitle: string; content: string };\nexport type SaqsaywamanSection = { subtitle: string; content: string };'
);

// Step 2: Add saqsaywaman to Translations type
content = content.replace(
  '  culture: CultureSection;\n  visiting:',
  '  culture: CultureSection;\n  saqsaywaman: SaqsaywamanSection;\n  visiting:'
);

// Step 3: Add saqsaywaman to zh nav
content = content.replace(
  "culture: \"印加文化\", bestTime:",
  "culture: \"印加文化\", saqsaywaman: \"萨克塞华曼\", bestTime:"
);

// Step 4: Add saqsaywaman to en nav
content = content.replace(
  'culture: "Inca Culture", bestTime:',
  'culture: "Inca Culture", saqsaywaman: "Saqsaywaman", bestTime:'
);

// Step 5: Add saqsaywaman to es nav
content = content.replace(
  'culture: "Cultura Inca", bestTime:',
  'culture: "Cultura Inca", saqsaywaman: "Saqsaywaman", bestTime:'
);

// Step 6: Add saqsaywaman to qu nav
content = content.replace(
  'culture: "Kultura", bestTime:',
  'culture: "Kultura", saqsaywaman: "Saqsaywaman", bestTime:'
);

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Basic type/nav updates done. Now need to add saqsaywaman content to each language object.');
