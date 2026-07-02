export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "sacsayhuamanruins.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Saqsaywaman"
    : locale === "zh"
    ? "萨克塞华曼"
    : locale === "qu"
    ? "Saqsaywaman"
    : "Saqsaywaman";

  const description = locale === "es"
    ? "Saqsaywaman en Cusco, Perú. Fortaleza inca con piedras megalíticas."
    : locale === "zh"
    ? "秘鲁库斯科的萨克塞华曼（Saqsaywaman），印加帝国军事防御工事的巅峰之作。"
    : locale === "qu"
    ? "Saqsaywaman, Cusco, Piruw. Inca rumi."
    : "Saqsaywaman in Cusco, Peru. Magnificent Inca fortress with megalithic stones.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "HistoricalLandmark"],
        "name": name,
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/saqsaywaman (1).jpg`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cusco",
          "addressCountry": "PE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -13.5160923,
          "longitude": -71.9674137
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "17:30"
        },
        "priceRange": "$$",
        "isAccessibleForFree": false,
        "sameAs": [
          "https://maps.app.goo.gl/bBdBGNwo6QqUcx7L8"
        ]
      },
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-PE" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-PE" : "en-US",
        "isAccessibleForFree": true
      }
    ]
  };
}
