import json

# This script generates the complete translations.ts with all upgrades
# All inner double-quotes are properly escaped

content = r"""export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };
export type SaqsaywamanSection = { subtitle: string; content: string };

export type Translations = {{
  nav: {{ about: string; ecology: string; culture: string; saqsaywaman: string; bestTime: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string }};
  hero: {{ tagline: string; title: string; subtitle: string; cta: string }};
  rating: {{ reviews: string; source: string }};
  about: {{ title: string; p1: string; p2: string; highlights: {{ title: string; items: string[] }}; bestTime: {{ title: string; content: string; tip: string }} }};
  ecology: EcologySection;
  culture: CultureSection;
  saqsaywaman: SaqsaywamanSection;
  visiting: {{ title: string; hours: {{ title: string; content: string; note: string }}; price: {{ title: string; content: string; note: string }}; duration: {{ title: string; content: string; note: string }}; tips: {{ title: string; items: string[] }}; route: {{ title: string; content: string }} }};
  transportation: {{ title: string; airport: {{ title: string; content: string; options: TransportOption[] }}; city: {{ title: string; content: string; steps: string[] }}; selfDrive: {{ title: string; content: string; steps: string[] }} }};
  tips: {{ title: string; items: string[] }};
  gallery: {{ title: string; viewMore: string }};
  reviews: {{ title: string; subtitle: string; viewMore: string }};
  faq: {{ title: string; subtitle: string; items: FAQItem[] }};
  location: {{ title: string; address: string; openMaps: string }};
  footer: {{ callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] }};
}};

export const translations: Record<Locale, Translations> = {{
"""

# For brevity, write the file in parts using a different approach
# Just write the TypeScript file directly with proper escaping

# Actually, let me just write the file directly using a Node.js script
# since we know Node.js is available

print("Script created - use Node.js instead")
