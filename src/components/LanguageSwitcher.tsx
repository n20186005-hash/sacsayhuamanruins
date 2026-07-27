import { useLang } from "@/components/LangProvider";

const LANGUAGES = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "qu", label: "QU" },
];

export function LanguageSwitcher() {
  const { lang } = useLang();

  const switchLang = (code: string) => {
    const parts = window.location.pathname.split("/");
    // parts[0] === "", parts[1] 为当前语言段（若存在）
    if (parts[1] && LANGUAGES.some((l) => l.code === parts[1])) {
      parts[1] = code;
    } else {
      parts.splice(1, 0, code);
    }
    window.location.pathname = parts.join("/");
  };

  return (
    <div className="lang-switcher">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          className={`lang-btn ${lang === l.code ? "active" : ""}`}
          onClick={() => switchLang(l.code)}
          aria-current={lang === l.code ? "true" : undefined}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
