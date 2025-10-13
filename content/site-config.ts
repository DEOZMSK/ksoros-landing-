export interface SiteConfig {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
    note: string;
  };
  features: {
    icon: string;
    title: string;
  }[];
  flow: {
    title: string;
    description: string;
    steps?: string[];
    ctaLabel: string;
    hint: string;
  };
  closingNote: string;
  telegramLink: string;
}

export const siteConfig: SiteConfig = {
  meta: {
    title:
      process.env.NEXT_PUBLIC_SITE_TITLE ??
      "mr.Kcopoc — AI и ведическая аналитика внутреннего кода",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий.",
  },
  hero: {
    eyebrow:
      process.env.NEXT_PUBLIC_HERO_EYEBROW ??
      "mr.Kcopoc · Digital AI-менеджер",
    headline:
      process.env.NEXT_PUBLIC_HERO_HEADLINE ??
      "Напиши «привет» — и тебе ответит мой настроенный AI, который собирает запрос и подключает меня в нужный момент",
    subheadline:
      process.env.NEXT_PUBLIC_HERO_SUBHEADLINE ??
      "Ты обращаешься в Telegram, думая, что пишешь мне лично. На самом деле вступает в диалог AI-консьерж: он уточняет задачу, подбирает формат взаимодействия и связывает с остальными сервисами, когда это действительно нужно.",
    ctaLabel: process.env.NEXT_PUBLIC_HERO_CTA_LABEL ?? "Написать «привет» в Telegram",
    note:
      process.env.NEXT_PUBLIC_HERO_NOTE ??
      "",
  },
  features: [
    { icon: "🤖", title: "AI принимает первое сообщение и сам определяет, что тебе действительно нужно" },
    { icon: "🧭", title: "Готовит сценарий: консультация, расчёт или оплата — без лишних шагов" },
    { icon: "🪄", title: "Подтягивает мои материалы и собирает итоговый отчёт по твоему запросу" },
    { icon: "🔗", title: "Передаёт мне контекст, когда настало время живого разговора" },
  ],
  flow: {
    title:
      process.env.NEXT_PUBLIC_FLOW_TITLE ??
      "Как выглядит путь внутри Telegram",
    description:
      process.env.NEXT_PUBLIC_FLOW_DESCRIPTION ??
      "",
    steps: [
      "Ты пишешь любое сообщение — хоть «привет».",
      "AI задаёт пару точных вопросов, фиксирует цель и прикидывает формат взаимодействия.",
      "Когда контекст готов, он предлагает подходящие бесплатные и платные материалы и остаётся на связи, пока меня нет.",
    ],
    ctaLabel: process.env.NEXT_PUBLIC_FLOW_CTA_LABEL ?? "Стартовать диалог с AI",
    hint:
      process.env.NEXT_PUBLIC_FLOW_HINT ??
      "Можно начать с любого слова — бот поймёт и направит дальше.",
  },
  closingNote:
    process.env.NEXT_PUBLIC_CLOSING_NOTE ??
    "AI — это фильтр без шума: ты не тратишь время на ожидание, а я получаю чистый контекст и прихожу, когда нужен.",
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/baphbl",
};
