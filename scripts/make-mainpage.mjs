// 将 Next.js 的 src/app/[locale]/page.tsx 转换为 Astro 用的 React 岛组件 src/components/MainPage.tsx
// 去掉 Next 专属依赖（next/link、next-themes、params Promise），主题切换改为自定义实现。
import fs from "node:fs";
import path from "node:path";

const src = path.resolve("src/app/[locale]/page.tsx");
const out = path.resolve("src/components/MainPage.tsx");
let s = fs.readFileSync(src, "utf-8");
// 归一化 Windows CRLF 行尾，保证后续 \n 精确匹配
s = s.replace(/\r\n/g, "\n");

// 1. 移除 Next 专属导入 / "use client"
s = s.replace('"use client";\n', "");
s = s.replace("import Link from \"next/link\";\n", "");
s = s.replace('import { useTheme } from "next-themes";\n', "");

// 2. 增加 Locale 类型导入
s = s.replace(
  'import { LangProvider, useLang } from "@/components/LangProvider";',
  'import type { Locale } from "@/i18n/translations";\nimport { LangProvider, useLang } from "@/components/LangProvider";'
);

// 3. ThemeToggle：去掉 next-themes，改为自定义 data-theme + localStorage
const oldTheme = `  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ width: "24px", height: "24px" }} />;`;

const newTheme = `  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<string>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    setThemeState(current);
    setMounted(true);
  }, []);

  const setTheme = (next: string) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  };

  if (!mounted) return <div style={{ width: "24px", height: "24px" }} />;`;

if (!s.includes(oldTheme)) {
  console.error("THEME_BLOCK_NOT_FOUND");
  process.exit(1);
}
s = s.replace(oldTheme, newTheme);

// 4. Footer：注入 lang 并将 next/link 改为 <a>（本地化路径）
s = s.replace(
  "function Footer() {\n  const { t } = useLang();",
  "function Footer() {\n  const { t, lang } = useLang();"
);
s = s.replace('<Link href="/privacy"', '<a href={`/${lang}/privacy`}');
s = s.replace('<Link href="/terms"', '<a href={`/${lang}/terms`}');
s = s.replace('<Link href="/cookies"', '<a href={`/${lang}/cookies`}');
s = s.replace("</Link>", "</a>");

// 5. 默认导出：由 Next 动态路由改为接收 locale prop 的组件
const oldExport = `export default function Home(props: { params: Promise<{ locale: string }> }) {
  const params = React.use(props.params);
  return (
    <LangProvider initialLocale={params.locale as "en" | "zh" | "es" | "qu"}>`;

const newExport = `export default function MainPage({ locale }: { locale: Locale }) {
  return (
    <LangProvider initialLocale={locale}>`;

if (!s.includes(oldExport)) {
  console.error("EXPORT_BLOCK_NOT_FOUND");
  process.exit(1);
}
s = s.replace(oldExport, newExport);

fs.writeFileSync(out, s);
console.log("Wrote", out);
