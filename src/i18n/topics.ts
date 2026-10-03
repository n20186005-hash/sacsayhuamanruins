import type { Locale } from "./translations";

export type TopicKey =
  | "tickets"
  | "opening-hours"
  | "how-to-get-there"
  | "history"
  | "stones";

export type TopicSection = { heading: string; body: string };
export type TopicContent = {
  title: string;
  metaDescription: string;
  intro: string;
  sections: TopicSection[];
  faq: { question: string; answer: string }[];
  lastVerified: string;
  backLabel: string;
};

export const topicKeys: TopicKey[] = [
  "tickets",
  "opening-hours",
  "how-to-get-there",
  "history",
  "stones",
];

export const topics: Record<TopicKey, Record<Locale, TopicContent>> = {
  tickets: {
    en: {
      title: "Saqsaywaman Tickets & Entrance Fee: Cusco Tourist Ticket Guide",
      metaDescription:
        "How much are Saqsaywaman tickets? There is no separate ticket—entry is with the Cusco Tourist Ticket (BTC). Full S/130 or Partial Circuit 1 S/70, where to buy, and what's included.",
      intro:
        "There is no Saqsaywaman-only admission ticket. Entry to the site is included with the Cusco Tourist Ticket (Boleto Turístico del Cusco, or BTC), the official pass that covers the city's main archaeological sites. Understanding the BTC is the single most useful thing to plan before you visit.",
      sections: [
        {
          heading: "Cusco Tourist Ticket (BTC) options",
          body: "The BTC comes in two forms relevant to Saqsaywaman:\n\n**Full Ticket (Boleto Integral):** S/130, valid for 10 days, includes all archaeological and cultural sites around Cusco.\n\n**Partial Circuit 1 (Circuito 1):** S/70, valid for 1 day, includes Saqsaywaman, Q'enqo, Puka Pukara and Tambomachay—the four sites on the northern outskirts of Cusco. For most visitors who only want Saqsaywaman and its neighbours, Circuit 1 is the right choice.",
        },
        {
          heading: "Where to buy the BTC",
          body: "The BTC is sold at official COSITUC offices in Cusco and at most of the included sites themselves. The main COSITUC office is on Avenida El Sol. Avoid buying from street touts near the entrance—only the official ticket is valid.\n\nBring your passport or national ID, and note that the ticket is paper-based, so keep it safe across the day.",
        },
        {
          heading: "Practical ticket tips",
          body: "• Circuit 1 is valid for a single day, so plan to see all four sites (Saqsaywaman, Q'enqo, Puka Pukara, Tambomachay) together.\n• Prices are quoted for foreign visitors and may change; confirm the current amount with the official COSITUC source before you travel.\n• There is no separate gate ticket for Saqsaywaman alone—do not expect to pay at the entrance.",
        },
      ],
      faq: [
        {
          question: "How much is the Saqsaywaman entrance fee?",
          answer:
            "There is no standalone Saqsaywaman ticket. You need the Cusco Tourist Ticket (BTC). The Partial Circuit 1 costs S/70 (valid 1 day) and includes Saqsaywaman, Q'enqo, Puka Pukara and Tambomachay. The Full Ticket is S/130 (valid 10 days) and includes all sites.",
        },
        {
          question: "Can I buy a separate ticket at the Saqsaywaman gate?",
          answer:
            "No. Saqsaywaman does not sell a separate admission ticket at the gate. Entry is only with the Cusco Tourist Ticket (BTC), which you buy at official COSITUC offices or at most included sites.",
        },
        {
          question: "What is included in Circuit 1?",
          answer:
            "Partial Circuit 1 of the Cusco Tourist Ticket includes four sites on the northern side of Cusco: Saqsaywaman, Q'enqo, Puka Pukara and Tambomachay. It is valid for one day.",
        },
      ],
      lastVerified: "October 2026",
      backLabel: "← Back to the Saqsaywaman guide",
    },
    es: {
      title: "Entradas y Precios de Saqsaywaman: Guía del Boleto Turístico del Cusco",
      metaDescription:
        "¿Cuánto cuesta la entrada a Saqsaywaman? No hay entrada separada; el ingreso es con el Boleto Turístico del Cusco (BTC). Completo S/130 o Circuito 1 S/70, dónde comprar e incluidos.",
      intro:
        "No existe una entrada exclusiva para Saqsaywaman. El ingreso al sitio está incluido en el Boleto Turístico del Cusco (BTC), el pase oficial que cubre los principales sitios arqueológicos de la ciudad. Entender el BTC es lo más útil para planificar la visita.",
      sections: [
        {
          heading: "Opciones del Boleto Turístico del Cusco (BTC)",
          body: "El BTC tiene dos formas relevantes para Saqsaywaman:\n\n**Boleto Completo (Boleto Integral):** S/130, válido 10 días, incluye todos los sitios arqueológicos y culturales de Cusco.\n\n**Circuito 1 Parcial:** S/70, válido 1 día, incluye Saqsaywaman, Q'enqo, Puka Pukara y Tambomachay, los cuatro sitios al norte de Cusco. Para la mayoría de los visitantes, el Circuito 1 es la opción correcta.",
        },
        {
          heading: "Dónde comprar el BTC",
          body: "El BTC se vende en oficinas oficiales de COSITUC en Cusco y en la mayoría de los sitios incluidos. La oficina principal está en la Avenida El Sol. Evite comprar a revendedores cercanos a la entrada: solo el boleto oficial es válido.\n\nLleve su pasaporte o documento de identidad; el boleto es en papel, así que consérvelo durante el día.",
        },
        {
          heading: "Consejos prácticos",
          body: "• El Circuito 1 es válido por un día, así que planee ver los cuatro sitios (Saqsaywaman, Q'enqo, Puka Pukara, Tambomachay) juntos.\n• Los precios pueden cambiar; confirme el monto actual con la fuente oficial de COSITUC antes de viajar.\n• No hay entrada separada en la puerta de Saqsaywaman; no espere pagar al ingreso.",
        },
      ],
      faq: [
        {
          question: "¿Cuánto cuesta la entrada a Saqsaywaman?",
          answer:
            "No hay entrada independiente para Saqsaywaman. Necesita el Boleto Turístico del Cusco (BTC). El Circuito 1 Parcial cuesta S/70 (válido 1 día) e incluye Saqsaywaman, Q'enqo, Puka Pukara y Tambomachay. El Boleto Completo cuesta S/130 (válido 10 días) e incluye todos los sitios.",
        },
        {
          question: "¿Puedo comprar una entrada separada en la puerta de Saqsaywaman?",
          answer:
            "No. Saqsaywaman no vende entrada separada en la puerta. El ingreso solo es con el Boleto Turístico del Cusco (BTC), que se compra en oficinas oficiales de COSITUC o en la mayoría de los sitios incluidos.",
        },
        {
          question: "¿Qué incluye el Circuito 1?",
          answer:
            "El Circuito 1 Parcial del Boleto Turístico del Cusco incluye cuatro sitios al norte de Cusco: Saqsaywaman, Q'enqo, Puka Pukara y Tambomachay. Es válido por un día.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Volver a la guía de Saqsaywaman",
    },
    zh: {
      title: "萨克塞华曼门票与费用：库斯科游客通票指南",
      metaDescription:
        "萨克塞华曼门票多少钱？没有独立门票，须持库斯科游客通票（BTC）。全套 S/130 或 Circuit 1 部分通票 S/70，购买地点与包含景点一文掌握。",
      intro:
        "萨克塞华曼没有独立门票。入园须持库斯科游客通票（Boleto Turístico del Cusco，简称 BTC）——这是覆盖库斯科主要考古遗址的官方联票。了解 BTC 是出行前最有用的准备。",
      sections: [
        {
          heading: "库斯科游客通票（BTC）的两种选择",
          body: "与本站相关的 BTC 有两种：\n\n**全套通票（Boleto Integral）：** S/130，10 天有效，包含所有考古与文化遗址。\n\n**Circuit 1 部分通票：** S/70，1 天有效，含萨克塞华曼、Qenqo、Puka Pukara、Tambomachay——库斯科北郊的四个遗址。多数只想看萨克塞华曼及周边游客，选 Circuit 1 即可。",
        },
        {
          heading: "在哪里购买 BTC",
          body: "BTC 在库斯科官方 COSITUC 服务点及大部分含票景点发售，主要服务点位于 Avenida El Sol。请勿在入口附近向街头贩子购买——只有官方票有效。\n\n请携带护照或身份证件；票为纸质，请妥善保管一整天。",
        },
        {
          heading: "实用购票提示",
          body: "• Circuit 1 仅 1 天有效，建议将四个遗址（萨克塞华曼、Qenqo、Puka Pukara、Tambomachay）安排在同一天游览。\n• 价格可能调整，出行前请以 COSITUC 官方公告为准。\n• 萨克塞华曼不设门口单独售票，请勿指望在入口付费入园。",
        },
      ],
      faq: [
        {
          question: "萨克塞华曼门票多少钱？",
          answer:
            "萨克塞华曼没有独立门票，须持库斯科游客通票（BTC）。Circuit 1 部分通票 S/70（1 天有效），含萨克塞华曼、Qenqo、Puka Pukara、Tambomachay；全套通票 S/130（10 天有效），包含所有遗址。",
        },
        {
          question: "可以在萨克塞华曼门口单独买票吗？",
          answer:
            "不能。萨克塞华曼不在门口单独售票，只能凭库斯科游客通票（BTC）入园，可在官方 COSITUC 服务点或大部分含票景点购买。",
        },
        {
          question: "Circuit 1 包含哪些景点？",
          answer:
            "库斯科游客通票 Circuit 1 部分通票包含库斯科北侧的四个遗址：萨克塞华曼、Qenqo、Puka Pukara 与 Tambomachay，1 天有效。",
        },
      ],
      lastVerified: "2026 年 10 月",
      backLabel: "← 返回萨克塞华曼指南",
    },
    qu: {
      title: "Saqsaywaman Boleto | Cusco",
      metaDescription:
        "Saqsaywaman boleto. Cusco Turistico Boleto (BTC). S/130, Circuito 1 S/70.",
      intro:
        "Saqsaywaman nisqapi mana ukhuy boletochu. Cusco Turistico Boleto (BTC) nisqawan puriy.",
      sections: [
        {
          heading: "Cusco Turistico Boleto",
          body: "Boleto Completo: S/130, 10 punllakama. Circuito 1: S/70, 1 punchaw, Saqsaywaman, Qenqo, Puka Pukara, Tambomachay.",
        },
        {
          heading: "Maypin rantisunchis",
          body: "COSITUC oficinas nisqapi rantiy. Mana callepi rantiychu.",
        },
      ],
      faq: [
        {
          question: "Hayk'a qullqi?",
          answer: "Circuito 1 S/70, 1 punchaw. Completo S/130, 10 punllakama.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Saqsaywaman guía",
    },
  },

  "opening-hours": {
    en: {
      title: "Saqsaywaman Opening Hours & Best Time to Visit",
      metaDescription:
        "Saqsaywaman is open daily 07:00–17:30. Best time to visit: early morning and the dry season (May–September). Altitude, weather and the Inti Raymi festival explained.",
      intro:
        "Saqsaywaman is open every day of the year. Planning around the opening hours, the time of day and the season will make your visit far more enjoyable—and help you avoid crowds and afternoon rain.",
      sections: [
        {
          heading: "Opening hours",
          body: "**Saqsaywaman is open daily from 07:00 to 17:30**, including weekends and public holidays. As it is an open-air archaeological site, visiting in daylight is strongly recommended for both safety and the best photographs of the megalithic walls.",
        },
        {
          heading: "Best time of day",
          body: "Arrive at opening (07:00) for the fewest tourists and the softest light on the stone walls. Mid-morning is pleasant, while early afternoon often brings clouds and short rains in the wet season. Because the site sits at about 3,700 m, a calm early start also helps with altitude.",
        },
        {
          heading: "Best season",
          body: "Cusco's dry season runs roughly **May to September**, with clear skies and the most reliable weather—the most popular time to visit. The wet season (November to March) is greener and quieter but brings afternoon showers. Shoulder months (April, October) are a good compromise.",
        },
        {
          heading: "Inti Raymi and special dates",
          body: "On **June 24** the great Inca Sun Festival, Inti Raymi, is re-enacted on Saqsaywaman's central esplanade. It is spectacular but extremely crowded; book grandstand seating in advance and expect altered site access on the day.",
        },
      ],
      faq: [
        {
          question: "What are the opening hours of Saqsaywaman?",
          answer:
            "Saqsaywaman is open every day from 07:00 to 17:30, all year round. Daytime visits are recommended for safety and lighting.",
        },
        {
          question: "What is the best time of day to visit?",
          answer:
            "Early morning at opening (07:00) has the fewest crowds and the best light on the megalithic walls. It also helps with the ~3,700 m altitude.",
        },
        {
          question: "When is the best season to visit Saqsaywaman?",
          answer:
            "The dry season (May to September) has the clearest, most reliable weather. The wet season (November to March) is quieter but brings afternoon rain.",
        },
      ],
      lastVerified: "October 2026",
      backLabel: "← Back to the Saqsaywaman guide",
    },
    es: {
      title: "Horario de Saqsaywaman y Mejor Época para Visitar",
      metaDescription:
        "Saqsaywaman abre todos los días de 07:00 a 17:30. Mejor hora: temprano y estación seca (mayo–septiembre). Altitud, clima e Inti Raymi.",
      intro:
        "Saqsaywaman está abierto todos los días del año. Planificar según el horario, la hora del día y la estación hará su visita mucho más agradable y le ayudará a evitar aglomeraciones y lluvias.",
      sections: [
        {
          heading: "Horario de apertura",
          body: "**Saqsaywaman abre todos los días de 07:00 a 17:30**, incluyendo fines de semana y feriados. Como es un sitio arqueológico al aire libre, se recomienda visitarlo de día para mayor seguridad y mejores fotografías.",
        },
        {
          heading: "Mejor hora del día",
          body: "Llegue a la apertura (07:00) para menos turistas y mejor luz sobre los muros megalíticos. El mediodía suele traer nubes y lluvias cortas en la estación húmeda. Como el sitio está a ~3.700 m, un inicio tranquilo también ayuda con la altura.",
        },
        {
          heading: "Mejor estación",
          body: "La estación seca de Cusco va de **mayo a septiembre**, con cielos despejados y clima más estable—la época más popular. La estación húmeda (noviembre a marzo) es más verde y tranquila pero con lluvias por la tarde.",
        },
        {
          heading: "Inti Raymi y fechas especiales",
          body: "El **24 de junio** se reescenifica el gran Inti Raymi en la esplanada central de Saqsaywaman. Es espectacular pero muy concurrido; reserve asientos con anticipación y espere acceso alterado ese día.",
        },
      ],
      faq: [
        {
          question: "¿Cuál es el horario de Saqsaywaman?",
          answer:
            "Saqsaywaman abre todos los días de 07:00 a 17:30, todo el año. Se recomienda visitarlo de día.",
        },
        {
          question: "¿Cuál es la mejor hora del día para visitar?",
          answer:
            "Temprano a la apertura (07:00) hay menos gente y mejor luz sobre los muros. También ayuda con los ~3.700 m de altura.",
        },
        {
          question: "¿Cuándo es la mejor estación para visitar Saqsaywaman?",
          answer:
            "La estación seca (mayo a septiembre) tiene el clima más estable. La húmeda (noviembre a marzo) es más tranquila pero con lluvias por la tarde.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Volver a la guía de Saqsaywaman",
    },
    zh: {
      title: "萨克塞华曼开放时间与最佳游览时机",
      metaDescription:
        "萨克塞华曼每天 07:00–17:30 开放。最佳时段：清晨与旱季（5–9 月）。海拔、天气与太阳祭典（Inti Raymi）一文说明。",
      intro:
        "萨克塞华曼全年每天开放。结合开放时间、一天中的时段与季节来规划，会让游览更舒适，也有助于避开人潮与午后降雨。",
      sections: [
        {
          heading: "开放时间",
          body: "**萨克塞华曼每天 07:00–17:30 开放**，含周末与公共假日。作为露天考古遗址，强烈建议白天参观，既安全又能拍出巨石墙最佳光线。",
        },
        {
          heading: "一天中的最佳时段",
          body: "开园（07:00）抵达人最少、巨石墙光线最柔和。上午舒适，湿季午后常有阴云与短时阵雨。遗址海拔约 3,700 米，清晨从容开始也有助于适应高反。",
        },
        {
          heading: "最佳季节",
          body: "库斯科旱季约为 **5 月至 9 月**，天空晴朗、天气最稳定，是游客最多的时段。湿季（11 月至次年 3 月）更绿更安静，但午后多雨；4 月与 10 月是折中的好选择。",
        },
        {
          heading: "太阳祭典与特殊日期",
          body: "每年 **6 月 24 日**，印加太阳祭典（Inti Raymi）会在萨克塞华曼中央广场重演，场面壮观但极为拥挤；建议提前预订观礼席，当天景区通行可能调整。",
        },
      ],
      faq: [
        {
          question: "萨克塞华曼的开放时间是？",
          answer:
            "萨克塞华曼每天 07:00–17:30 开放，全年无休。建议白天参观，安全且光线更好。",
        },
        {
          question: "一天中什么时间游览最好？",
          answer:
            "清晨开园（07:00）人最少、巨石墙光线最佳，也有助于适应约 3,700 米海拔。",
        },
        {
          question: "萨克塞华曼最佳季节是？",
          answer:
            "旱季（5–9 月）天气最稳定、晴朗；湿季（11–3 月）更安静但午后多雨。",
        },
      ],
      lastVerified: "2026 年 10 月",
      backLabel: "← 返回萨克塞华曼指南",
    },
    qu: {
      title: "Saqsaywaman Punchaw | Cusco",
      metaDescription: "Saqsaywaman 07:00-17:30. Allin punchaw.",
      intro: "Saqsaywaman sapa punchaw 07:00-17:30 kachkan.",
      sections: [
        {
          heading: "Punchaw",
          body: "07:00-17:30 sapa punchaw. Intiraymi Junio 24.",
        },
        {
          heading: "Allin punchaw",
          body: "Mayo-Mayo (Mayo a Setiembre) chiri mit'a. Noviembre-Marzo paray mit'a.",
        },
      ],
      faq: [
        {
          question: "Hayk'aq kachkan?",
          answer: "07:00-17:30 sapa punchaw.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Saqsaywaman guía",
    },
  },

  "how-to-get-there": {
    en: {
      title: "How to Get to Saqsaywaman from Cusco",
      metaDescription:
        "Saqsaywaman sits on the hills north of Cusco, ~15 minutes by taxi from Plaza de Armas. Taxi tips, the walk down, and getting from the airport explained.",
      intro:
        "Saqsaywaman is only about 2 km from Cusco's historic centre, but it sits roughly 300 m higher at around 3,700 m. The easiest way up is a short taxi ride; many visitors then walk back down to the city.",
      sections: [
        {
          heading: "From Cusco city centre (Plaza de Armas)",
          body: "A taxi from Plaza de Armas to the upper entrance of Saqsaywaman takes about **15 minutes** and costs roughly S/15–20. Ask the driver to drop you at the top entrance near the Cristo Blanco statue so you can walk downhill through the site.",
        },
        {
          heading: "From Alejandro Velasco Astete Airport (CUZ)",
          body: "The airport is about 20 minutes from the centre. Take a registered taxi or ride app into Cusco first, then a second taxi up to Saqsaywaman. There is no direct public transport from the airport to the site.",
        },
        {
          heading: "Walking down to the city",
          body: "After exploring, you can walk downhill from Saqsaywaman back towards Plaza de Armas in roughly 30–45 minutes. The descent is the classic way to enjoy the views and avoid altitude exertion on the way up.",
        },
        {
          heading: "Tours and altitude tips",
          body: "Local guided tours include transport and commentary. Whichever way you arrive, take it easy on the first day at altitude: rest, hydrate, and consider coca leaves or oxygen if you feel the effects of soroche (altitude sickness).",
        },
      ],
      faq: [
        {
          question: "How far is Saqsaywaman from Plaza de Armas?",
          answer:
            "About 2 km and a 15-minute taxi ride (roughly S/15–20) from Plaza de Armas, up to the upper entrance near Cristo Blanco.",
        },
        {
          question: "Can I walk from Cusco to Saqsaywaman?",
          answer:
            "Yes—many visitors take a taxi up and walk down. Walking up is steep at ~3,700 m and tiring; walking down to the city takes about 30–45 minutes.",
        },
        {
          question: "How do I get there from the airport?",
          answer:
            "Take a taxi or ride app from Alejandro Velasco Astete Airport (CUZ) into Cusco centre (~20 min), then a second taxi up to Saqsaywaman. There is no direct public transport.",
        },
      ],
      lastVerified: "October 2026",
      backLabel: "← Back to the Saqsaywaman guide",
    },
    es: {
      title: "Cómo Llegar a Saqsaywaman desde Cusco",
      metaDescription:
        "Saqsaywaman está en las colinas norte de Cusco, a ~15 min en taxi de Plaza de Armas. Consejos de taxi, bajada a pie y llegada desde el aeropuerto.",
      intro:
        "Saqsaywaman está a solo unos 2 km del centro histórico de Cusco, pero unos 300 m más alto, a ~3.700 m. La forma más fácil de subir es en taxi; muchos visitantes luego caminan cuesta abajo a la ciudad.",
      sections: [
        {
          heading: "Desde el centro de Cusco (Plaza de Armas)",
          body: "Un taxi desde Plaza de Armas hasta la entrada superior de Saqsaywaman tarda unos **15 minutos** y cuesta aproximadamente S/15–20. Pida que lo deje en la entrada alta cerca del Cristo Blanco para caminar cuesta abajo por el sitio.",
        },
        {
          heading: "Desde el aeropuerto (CUZ)",
          body: "El aeropuerto está a unos 20 minutos del centro. Tome un taxi registrado o app hasta Cusco y luego un segundo taxi hacia Saqsaywaman. No hay transporte público directo del aeropuerto al sitio.",
        },
        {
          heading: "Caminando cuesta abajo a la ciudad",
          body: "Tras recorrer el sitio, puede caminar cuesta abajo hasta Plaza de Armas en unos 30–45 minutos. La bajada es la forma clásica de disfrutar las vistas y evitar el esfuerzo de subir a la altura.",
        },
        {
          heading: "Tours y consejos de altura",
          body: "Los tours locales incluyen transporte y guía. Sea prudente el primer día a la altura: descanse, hidrátese y considere hojas de coca u oxígeno si siente el soroche.",
        },
      ],
      faq: [
        {
          question: "¿A qué distancia está Saqsaywaman de Plaza de Armas?",
          answer:
            "Unos 2 km y 15 minutos en taxi (aprox. S/15–20) desde Plaza de Armas, hasta la entrada alta cerca del Cristo Blanco.",
        },
        {
          question: "¿Puedo caminar desde Cusco a Saqsaywaman?",
          answer:
            "Sí: muchos toman taxi subida y caminan bajada. Subir a pie es empinado a ~3.700 m; bajar a la ciudad toma unos 30–45 minutos.",
        },
        {
          question: "¿Cómo llegar desde el aeropuerto?",
          answer:
            "Tome taxi o app desde el aeropuerto (CUZ) al centro (~20 min) y luego otro taxi hacia Saqsaywaman. No hay transporte público directo.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Volver a la guía de Saqsaywaman",
    },
    zh: {
      title: "如何从库斯科前往萨克塞华曼",
      metaDescription:
        "萨克塞华曼位于库斯科北侧山丘，距武器广场打车约 15 分钟。打车建议、步行下山与机场交通一文说明。",
      intro:
        "萨克塞华曼距库斯科老城仅约 2 公里，但高出约 300 米、海拔约 3,700 米。最轻松的上山方式是短途打车；许多游客游览后步行下山返回市区。",
      sections: [
        {
          heading: "从库斯科市中心（武器广场）",
          body: "从武器广场打车到萨克塞华曼上层入口约 **15 分钟**，车费约 S/15–20。请司机送到 Cristo Blanco 白雕像附近的上层入口，便于一路走下山。",
        },
        {
          heading: "从亚历杭德罗·韦拉斯科·阿斯泰特机场（CUZ）",
          body: "机场距市中心约 20 分钟。先乘正规出租车或网约车到库斯科市区，再换一辆出租车上山。机场没有直达遗址的公共交通。",
        },
        {
          heading: "步行下山回市区",
          body: "游览结束后，可从萨克塞华曼步行下山返回武器广场，约 30–45 分钟。这是欣赏全景、避免上山高反的经典方式。",
        },
        {
          heading: "跟团与高反提示",
          body: "当地导览团含交通与讲解。无论何种方式抵达，到高海拔首日都要放慢节奏：休息、补水，如高反不适可考虑古柯叶或氧气。",
        },
      ],
      faq: [
        {
          question: "萨克塞华曼离武器广场多远？",
          answer:
            "约 2 公里，从武器广场打车约 15 分钟（约 S/15–20）到 Cristo Blanco 附近上层入口。",
        },
        {
          question: "可以从库斯科步行到萨克塞华曼吗？",
          answer:
            "可以——多数游客打车上山、步行下山。徒步上山在约 3,700 米海拔较吃力；步行下山回市区约 30–45 分钟。",
        },
        {
          question: "从机场怎么去？",
          answer:
            "从机场（CUZ）乘出租车或网约车到库斯科市区（约 20 分钟），再换一辆出租车上山。无直达公共交通。",
        },
      ],
      lastVerified: "2026 年 10 月",
      backLabel: "← 返回萨克塞华曼指南",
    },
    qu: {
      title: "Saqsaywaman Chaykamuy | Cusco",
      metaDescription: "Saqsaywaman Plaza de Armas-manta taxi 15 minuto.",
      intro: "Saqsaywaman Cusco llaqta ñawpin, ~3.700 m.",
      sections: [
        {
          heading: "Plaza de Armas-manta",
          body: "Taxi 15 minuto, S/15-20. Cristo Blanco punkupi uraykamuy.",
        },
        {
          heading: "Aeropuerto-manta",
          body: "Aeropuerto CUZ Cusco chawpiman, chaymanta taxi Saqsaywaman-man.",
        },
      ],
      faq: [
        {
          question: "Hayk'a karu?",
          answer: "Plaza de Armas-manta 15 minuto taxi.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Saqsaywaman guía",
    },
  },

  history: {
    en: {
      title: "Saqsaywaman History: What It Is & Who Built It",
      metaDescription:
        "What is Saqsaywaman? The megalithic Inca ceremonial and military complex above Cusco, built under the Inca Empire, scene of the 1536 revolt and the Inti Raymi festival.",
      intro:
        "Saqsaywaman (also spelled Sacsayhuaman) is the great megalithic complex that crowns the hills above Cusco. Far more than a fortress, it was a ceremonial, administrative and defensive centre of the Inca Empire—and one of its most extraordinary building achievements.",
      sections: [
        {
          heading: "What Saqsaywaman is",
          body: "Saqsaywaman is an Inca archaeological complex of massive stone walls, terraces and esplanades overlooking Cusco, the former capital of the Inca Empire. In Inca urban planning, Cusco's layout was said to form a puma, with Saqsaywaman as the puma's head and its zigzag walls as the animal's teeth or mane.",
        },
        {
          heading: "Who built it",
          body: "Construction is attributed to the Inca Empire at its height, under rulers such as Pachacuti and his successors, using the labour of tens of thousands of workers. The largest stones weigh an estimated 100–128 tons and were fitted without mortar—an achievement of Inca stonemasonry that still resists earthquakes today.",
        },
        {
          heading: "The 1536 revolt and colonial demolition",
          body: "In 1536 Manco Inca led a rebellion against the Spanish, and Saqsaywaman became the bloody focal point of the siege of Cusco. After the uprising failed, the Spanish dismantled much of the site, rolling the smaller blocks down the hill to build the colonial churches and houses of Cusco. What survives is estimated at only about 20% of the original complex.",
        },
        {
          heading: "Saqsaywaman today",
          body: "Today Saqsaywaman is a major heritage site and the stage for Inti Raymi, the re-enactment of the Inca Sun Festival held every June 24 on its central esplanade—the most important cultural event in Cusco.",
        },
      ],
      faq: [
        {
          question: "What is Saqsaywaman?",
          answer:
            "Saqsaywaman is a megalithic Inca complex of massive stone walls and esplanades above Cusco, Peru. It served as a ceremonial, administrative and defensive centre of the Inca Empire.",
        },
        {
          question: "Who built Saqsaywaman?",
          answer:
            "It was built by the Inca Empire at its height, attributed to rulers such as Pachacuti, using the labour of tens of thousands of workers. The largest stones weigh an estimated 100–128 tons.",
        },
        {
          question: "How much of Saqsaywaman remains?",
          answer:
            "After the Spanish colonial demolition, only about 20% of the original complex is thought to survive—yet that remaining fifth is still enormous and impressive.",
        },
      ],
      lastVerified: "October 2026",
      backLabel: "← Back to the Saqsaywaman guide",
    },
    es: {
      title: "Historia de Saqsaywaman: Qué es y Quién lo Construyó",
      metaDescription:
        "¿Qué es Saqsaywaman? El complejo megalítico inca sobre Cusco, construido en el Imperio Inca, escenario de la rebelión de 1536 e Inti Raymi.",
      intro:
        "Saqsaywaman (también escrito Sacsayhuamán) es el gran complejo megalítico que corona las colinas sobre Cusco. Mucho más que una fortaleza, fue centro ceremonial, administrativo y defensivo del Imperio Inca y una de sus obras más extraordinarias.",
      sections: [
        {
          heading: "Qué es Saqsaywaman",
          body: "Saqsaywaman es un complejo arqueológico inca de muros, terrazas y explanadas de piedra gigante que domina Cusco, la antigua capital del Imperio Inca. En el urbanismo inca, el trazado de Cusco formaba un puma, con Saqsaywaman como la cabeza y sus muros en zigzag como los dientes o la melena.",
        },
        {
          heading: "Quién lo construyó",
          body: "Su construcción se atribuye al Imperio Inca en su apogeo, bajo gobernantes como Pachacuti y sus sucesores, con el trabajo de decenas de miles de personas. Las piedras mayores pesan entre 100 y 128 toneladas y se ensamblan sin mortero, una obra de la cantería inca que hoy resiste terremotos.",
        },
        {
          heading: "La rebelión de 1536 y la demolición colonial",
          body: "En 1536 Manco Inca encabezó una rebelión contra los españoles, y Saqsaywaman fue el foco sangriento del sitio de Cusco. Tras fallar la rebelión, los españoles desmantelaron gran parte del sitio, rodando las piedras menores cuesta abajo para construir las iglesias y casonas coloniales de Cusco. Se estima que sobrevive solo el 20% del complejo original.",
        },
        {
          heading: "Saqsaywaman hoy",
          body: "Hoy Saqsaywaman es un gran sitio patrimonial y el escenario del Inti Raymi, la reescenificación de la fiesta del Sol inca que se celebra cada 24 de junio en su explanada central, el evento cultural más importante de Cusco.",
        },
      ],
      faq: [
        {
          question: "¿Qué es Saqsaywaman?",
          answer:
            "Saqsaywaman es un complejo inca megalítico de muros y explanadas de piedra gigante sobre Cusco, Perú. Fue centro ceremonial, administrativo y defensivo del Imperio Inca.",
        },
        {
          question: "¿Quién construyó Saqsaywaman?",
          answer:
            "Lo construyó el Imperio Inca en su apogeo, atribuido a gobernantes como Pachacuti, con decenas de miles de trabajadores. Las piedras mayores pesan entre 100 y 128 toneladas.",
        },
        {
          question: "¿Cuánto de Saqsaywaman queda?",
          answer:
            "Tras la demolición colonial, se estima que sobrevive solo el 20% del complejo original; aun así, esa quinta parte es enorme e impresionante.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Volver a la guía de Saqsaywaman",
    },
    zh: {
      title: "萨克塞华曼历史：它是什么、谁建造的",
      metaDescription:
        "萨克塞华曼是什么？库斯科上方的印加巨石祭祀与军事建筑群，由印加帝国建造，1536 年起义与太阳祭典的发生地。",
      intro:
        "萨克塞华曼（亦作 Sacsayhuaman）是矗立在库斯科北侧山丘上的巨大巨石建筑群。它远不止是一座堡垒，而是印加帝国的祭祀、行政与防御中心，也是其最非凡的建筑成就之一。",
      sections: [
        {
          heading: "萨克塞华曼是什么",
          body: "萨克塞华曼是印加考古建筑群，由巨型石墙、台基与广场组成，俯瞰印加帝国古都库斯科。在印加城市规划中，库斯科城廓被喻为一只美洲豹，萨克塞华曼即豹首，其锯齿状石墙则是豹的獠牙或鬃毛。",
        },
        {
          heading: "谁建造了它",
          body: "建造归属于鼎盛期的印加帝国，多归功于帕查库特克等君主，动用了数万劳工。最大石块重约 100–128 吨，无灰泥砌合——这一印加石工成就至今仍能抗震。",
        },
        {
          heading: "1536 年起义与殖民拆毁",
          body: "1536 年曼科·印加发动反抗西班牙的起义，萨克塞华曼成为库斯科围城战的血腥焦点。起义失败后，西班牙人拆毁了大部分遗址，将较小石块滚下山用于建造库斯科的殖民教堂与宅邸。据估计，现仅存原建筑群约 20%。",
        },
        {
          heading: "今日的萨克塞华曼",
          body: "如今萨克塞华曼是重要的遗产遗址，也是太阳祭典（Inti Raymi）的舞台——每年 6 月 24 日在其中央广场重演印加太阳节，是库斯科最重要的文化活动。",
        },
      ],
      faq: [
        {
          question: "萨克塞华曼是什么？",
          answer:
            "萨克塞华曼是秘鲁库斯科上方的印加巨石建筑群，由巨型石墙与广场组成，曾是印加帝国的祭祀、行政与防御中心。",
        },
        {
          question: "谁建造了萨克塞华曼？",
          answer:
            "由鼎盛期的印加帝国建造，多归功于帕查库特克等君主，动用数万劳工。最大石块约 100–128 吨。",
        },
        {
          question: "萨克塞华曼还剩多少？",
          answer:
            "经殖民拆毁，据估仅存原建筑群约 20%；但仅剩的五分之一依旧宏大震撼。",
        },
      ],
      lastVerified: "2026 年 10 月",
      backLabel: "← 返回萨克塞华曼指南",
    },
    qu: {
      title: "Saqsaywaman Wiñay Kawsay | Cusco",
      metaDescription: "Saqsaywaman Inka rumikuna. 1536 Manco Inca.",
      intro: "Saqsaywaman Inka Imperio megalithic fortress. Inti Raymi.",
      sections: [
        {
          heading: "Imaymana",
          body: "Saqsaywaman Cusco llaqta above. Puma uma. Rumikuna 100-128 toneladas.",
        },
        {
          heading: "Piwaruq",
          body: "Inka Imperio, Pachacuti. 1536 Manco Inca.",
        },
      ],
      faq: [
        {
          question: "Imaymana Saqsaywaman?",
          answer: "Inka megalithic fortress Cusco above.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Saqsaywaman guía",
    },
  },

  stones: {
    en: {
      title: "Saqsaywaman's Megalithic Stones & How They Were Built",
      metaDescription:
        "Saqsaywaman's three zigzag walls hold stones weighing 100–128 tons, up to 8.5 m tall, fitted without mortar. Where the stones came from and how they were moved.",
      intro:
        "The fame of Saqsaywaman rests on its stones. The three-tiered zigzag walls are built from blocks of andesite and limestone so large—and fitted so precisely—that they have puzzled engineers for 500 years.",
      sections: [
        {
          heading: "The three zigzag walls",
          body: "The iconic defensive walls run in three terraced, zigzag lines about **400 m** long. Their largest blocks reach about **8.5 m** in height and are estimated to weigh between **100 and 128 tons**—comparable to a fully loaded truck stacked several storeys high.",
        },
        {
          heading: "Where the stones came from",
          body: "Geological analysis shows the andesite and diorite were not local. They were quarried at Waqoto and Rumiqolqa, roughly **15 to 35 km** from the site. Moving them across the Andes without wheels, iron tools or draft animals is one of the great unsolved questions of Inca engineering.",
        },
        {
          heading: "Mortar-free polygonal masonry",
          body: "The blocks are cut into complex polygons and fitted together without mortar, leaning against one another so tightly that a sheet of paper cannot be inserted between them. This flexible, interlocking construction is why the walls have survived centuries of earthquakes.",
        },
        {
          heading: "Theories of how they were moved",
          body: "No one knows exactly how the Incas placed these megaliths. The most accepted explanations involve log rollers, earthen ramps, agile-fibre ropes and the coordinated labour of tens of thousands of workers. What is certain is the result: a structure that still stands, perfectly balanced, centuries later.",
        },
      ],
      faq: [
        {
          question: "How heavy are the stones of Saqsaywaman?",
          answer:
            "The largest stones at Saqsaywaman are about 8.5 m tall and are estimated to weigh between 100 and 128 tons. The three zigzag walls are roughly 400 m long.",
        },
        {
          question: "How were the megalithic stones moved?",
          answer:
            "The stones were quarried 15–35 km away and moved without wheels, iron or draft animals. Scholars believe the Incas used log rollers, earthen ramps, fibre ropes and tens of thousands of coordinated workers, but the exact method remains debated.",
        },
        {
          question: "Why don't the walls use mortar?",
          answer:
            "The blocks are cut into interlocking polygons and lean against each other without mortar. This flexible masonry lets the walls shift slightly during earthquakes and is why they have survived for centuries.",
        },
      ],
      lastVerified: "October 2026",
      backLabel: "← Back to the Saqsaywaman guide",
    },
    es: {
      title: "Las Piedras Megalíticas de Saqsaywaman y Cómo se Construyeron",
      metaDescription:
        "Los muros en zigzag de Saqsaywaman tienen piedras de 100–128 toneladas, hasta 8,5 m, sin mortero. De dónde venían y cómo se movieron.",
      intro:
        "La fama de Saqsaywaman descansa en sus piedras. Los muros en zigzag de tres niveles están hechos de bloques de andesita y caliza tan grandes y tan precisos que han desconcertado a los ingenieros durante 500 años.",
      sections: [
        {
          heading: "Los tres muros en zigzag",
          body: "Los muros defensivos icónicos corren en tres líneas terraza en zigzag de unos **400 m** de largo. Sus bloques mayores alcanzan unos **8,5 m** de alto y pesan entre **100 y 128 toneladas**, comparable a un camión cargado de varios pisos.",
        },
        {
          heading: "De dónde venían las piedras",
          body: "El análisis geológico muestra que la andesita y la diorita no eran locales; se extrajeron en Waqoto y Rumiqolqa, a unos **15 a 35 km** del sitio. Moverlas por los Andes sin ruedas, hierro ni animales de carga es una de las grandes incógnitas de la ingeniería inca.",
        },
        {
          heading: "Albañilería poligonal sin mortero",
          body: "Los bloques se tallan en polígonos complejos y se ensamblan sin mortero, apoyándose unos en otros tan ajustados que no entra un papel entre ellos. Esta construcción flexible es la razón por la que los muros han sobrevivido siglos de terremotos.",
        },
        {
          heading: "Teorías de cómo se movieron",
          body: "Nadie sabe exactamente cómo los incas colocaron estos megalitos. Las explicaciones más aceptadas involucran rodillos de troncos, rampas de tierra, cuerdas de fibra y decenas de miles de trabajadores coordinados. Lo cierto es el resultado: una estructura que sigue en pie, perfectamente equilibrada.",
        },
      ],
      faq: [
        {
          question: "¿Cuánto pesan las piedras de Saqsaywaman?",
          answer:
            "Las piedras mayores de Saqsaywaman miden unos 8,5 m de alto y pesan entre 100 y 128 toneladas. Los tres muros en zigzag miden unos 400 m.",
        },
        {
          question: "¿Cómo se movieron los megalitos?",
          answer:
            "Las piedras se extrajeron a 15–35 km y se movieron sin ruedas, hierro ni animales. Se cree que los incas usaron rodillos, rampas de tierra, cuerdas de fibra y decenas de miles de trabajadores, pero el método exacto se debate.",
        },
        {
          question: "¿Por qué los muros no usan mortero?",
          answer:
            "Los bloques se tallan en polígonos que se entrelazan y se apoyan sin mortero. Esta mampostería flexible permite que los muros se muevan ligeramente en los terremotos y es por lo que han sobrevivido siglos.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Volver a la guía de Saqsaywaman",
    },
    zh: {
      title: "萨克塞华曼的巨石与建造之谜",
      metaDescription:
        "萨克塞华曼三层锯齿墙的石块重达 100–128 吨、高约 8.5 米，无灰泥砌合。石料来源与搬运方式一文解析。",
      intro:
        "萨克塞华曼的名声建立在它的巨石之上。三层锯齿状石墙由安山岩与石灰岩巨块砌成，块体之大、拼合之精，让工程师困惑了 500 年。",
      sections: [
        {
          heading: "三层锯齿石墙",
          body: "标志性的防御石墙呈三级阶梯式锯齿排列，全长约 **400 米**。最大石块高约 **8.5 米**，估计重 **100–128 吨**——相当于好几层楼高的满载卡车。",
        },
        {
          heading: "石料来自哪里",
          body: "地质分析显示，安山岩与闪长岩并非就地取材，而是采自距遗址约 **15–35 公里**的 Waqoto 与 Rumiqolqa 采石场。在没有车轮、铁器或驮兽的印加时代，将这些巨石运越安第斯山脉，是印加工程学最大的未解之谜之一。",
        },
        {
          heading: "无灰泥多边形砌合",
          body: "石块被切成复杂多边形、彼此咬合、不用灰泥，严丝合缝到连一张纸都插不进。这种柔性互锁结构，正是石墙历经数百年地震仍屹立的原因。",
        },
        {
          heading: "巨石如何搬运的推测",
          body: "无人确切知道印加人如何安放这些巨石。较被接受的解释是：原木滚木、土坡道、龙舌兰纤维绳索，以及数万劳工的协同劳作。可以确定的是结果——一座历经数百年仍精准平衡的建筑。",
        },
      ],
      faq: [
        {
          question: "萨克塞华曼的石头有多重？",
          answer:
            "最大石块高约 8.5 米，估计重 100–128 吨；三层锯齿墙全长约 400 米。",
        },
        {
          question: "巨石是怎样搬运的？",
          answer:
            "石料采自 15–35 公里外，在无车轮、铁器与驮兽的条件下运抵。学者认为印加人使用滚木、土坡道、纤维绳与数万协同劳工，但确切方法仍有争议。",
        },
        {
          question: "石墙为什么不用灰泥？",
          answer:
            "石块被切成互相锁扣的多边形、彼此倚靠而不用灰泥。这种柔性砌体能在大地震中轻微位移，正是它历经数百年不倒的原因。",
        },
      ],
      lastVerified: "2026 年 10 月",
      backLabel: "← 返回萨克塞华曼指南",
    },
    qu: {
      title: "Saqsaywaman Rumikuna | Cusco",
      metaDescription: "Saqsaywaman rumikuna 100-128 toneladas.",
      intro: "Saqsaywaman rumikuna 8.5 m, 100-128 toneladas.",
      sections: [
        {
          heading: "Rumikuna",
          body: "Saqsaywaman muros 400m. Rumikuna 100-128 toneladas, 8.5m.",
        },
        {
          heading: "Maypin",
          body: "Waqoto, Rumiqolqa 15-35 km. Mana ruedas.",
        },
      ],
      faq: [
        {
          question: "Hayk'a llasaq?",
          answer: "100-128 toneladas.",
        },
      ],
      lastVerified: "Octubre 2026",
      backLabel: "← Saqsaywaman guía",
    },
  },
};
