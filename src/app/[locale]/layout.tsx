import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "saqsaywaman.com"}`;

// 语言配置：HTML lang 属性 + OG locale 映射
const localeConfig: Record<string, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: "es", ogLocale: "es_PE" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN" },
  qu: { htmlLang: "qu", ogLocale: "qu_PE" },
};

// 生成绝对 URL 的 hreflang 映射
// Next.js 需要绝对 URL 才能正确输出 <link rel="alternate" hreflang> 标签
function getHreflangAlternates(baseUrl: string) {
  return {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    qu: `${baseUrl}/qu`,
    "x-default": `${baseUrl}/en`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        locale === "es"
          ? "Saqsaywaman — Cusco, Perú"
          : locale === "zh"
          ? "萨克塞华曼 — 秘鲁库斯科"
          : locale === "qu"
          ? "Saqsaywaman — Cusco, Piruw"
          : "Saqsaywaman — Cusco, Peru",
      template:
        locale === "es"
          ? "%s | Saqsaywaman"
          : locale === "zh"
          ? "%s | 萨克塞华曼"
          : locale === "qu"
          ? "%s | Saqsaywaman"
          : "%s | Saqsaywaman",
    },
    description:
      locale === "es"
        ? "Guía de viaje a Saqsaywaman en Cusco, Perú. Fortaleza inca con piedras megalíticas."
        : locale === "zh"
        ? "萨克塞华曼旅行指南——探索秘鲁库斯科的印加古迹，欣赏印加石工技术的巅峰之作。"
        : locale === "qu"
        ? "Saqsaywaman rikuy, Cusco, Piruw. Inca rumi."
        : "A travel guide to Saqsaywaman in Cusco, Peru. The famous Inca fortress with megalithic stones.",
    keywords: [
      "Saqsaywaman",
      "Sacsayhuaman",
      "Cusco tourism",
      "Inca fortress",
      "Cusco attractions",
      "Peru tourism",
      "Inca architecture",
      "Cusco archaeological site",
    ],
    authors: [{ name: "Saqsaywaman Travel Guide" }],
    creator: "Saqsaywaman Travel Guide",
    publisher: "Saqsaywaman Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale]?.ogLocale || "en_US",
      alternateLocale: Object.values(localeConfig)
        .map((c) => c.ogLocale)
        .filter(
          (l) => l !== (localeConfig[locale]?.ogLocale || "en_US")
        ),
      url: `${baseUrl}/${locale}`,
      title:
        locale === "es"
          ? "Saqsaywaman — Cusco, Perú"
          : locale === "zh"
          ? "萨克塞华曼 — 秘鲁库斯科"
          : locale === "qu"
          ? "Saqsaywaman — Cusco, Piruw"
          : "Saqsaywaman — Cusco, Peru",
      description:
        locale === "es"
          ? "Guía de viaje a Saqsaywaman en Cusco, Perú. Fortaleza inca."
          : locale === "zh"
          ? "萨克塞华曼旅行指南——探索秘鲁库斯科的印加古迹。"
          : locale === "qu"
          ? "Saqsaywaman rikuy, Cusco, Piruw."
          : "A travel guide to Saqsaywaman in Cusco, Peru.",
      siteName:
        locale === "es"
          ? "Saqsaywaman Guía de Viaje"
          : locale === "zh"
          ? "萨克塞华曼旅行指南"
          : locale === "qu"
          ? "Saqsaywaman rikuy"
          : "Saqsaywaman Travel Guide",
      images: [
        {
          url: "/gallery/saqsaywaman (1).jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? "Saqsaywaman - Cusco, Perú"
              : locale === "zh"
              ? "萨克塞华曼 - 秘鲁库斯科"
              : locale === "qu"
              ? "Saqsaywaman - Cusco, Piruw"
              : "Saqsaywaman - Cusco, Peru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "es"
          ? "Saqsaywaman — Cusco, Perú"
          : locale === "zh"
          ? "萨克塞华曼 — 秘鲁库斯科"
          : locale === "qu"
          ? "Saqsaywaman — Cusco, Piruw"
          : "Saqsaywaman — Cusco, Peru",
      description:
        locale === "es"
          ? "Guía de viaje a Saqsaywaman en Cusco, Perú."
          : locale === "zh"
          ? "萨克塞华曼旅行指南——探索秘鲁库斯科的印加古迹。"
          : locale === "qu"
          ? "Saqsaywaman rikuy, Cusco, Piruw."
          : "A travel guide to Saqsaywaman in Cusco, Peru.",
      images: ["/gallery/saqsaywaman (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangs,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
    { locale: "zh" },
    { locale: "qu" },
  ];
}

import { generateSchema } from "../schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = localeConfig[locale]?.htmlLang || "en";

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
