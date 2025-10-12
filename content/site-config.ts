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
    secondaryCtaLabel: string;
    note: string;
  };
  features: {
    icon: string;
    title: string;
  }[];
  flow: {
    title: string;
    description: string;
    ctaLabel: string;
    hint: string;
  };
  closingNote: string;
  telegramLink: string;
}

// Все тексты вынесены в конфиг, чтобы их можно было легко заменить или прокинуть из переменных окружения.
// Комментарии рядом с блоками подсказывают, какой копирайт отвечает за конкретный элемент лендинга.
export const siteConfig: SiteConfig = {
  meta: {
    // Метаданные страницы (заголовок вкладки и description в поиске)
    title:
      process.env.NEXT_PUBLIC_SITE_TITLE ??
      "mr.Kcopoc — AI и ведическая аналитика внутреннего кода",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий."
  },
  hero: {
    // Маленькая строка над заголовком
    eyebrow:
      process.env.NEXT_PUBLIC_HERO_EYEBROW ??
      "mr.Kcopoc · честный навигатор самонаблюдения",
    // Главный заголовок первого экрана
    headline:
      process.env.NEXT_PUBLIC_HERO_HEADLINE ??
      "Для тех, кто устал разбираться в себе, но хочет наконец увидеть, как устроен его код — честно, без мистики и без иллюзий",
    // Подзаголовок с кратким объяснением сути
    subheadline:
      process.env.NEXT_PUBLIC_HERO_SUBHEADLINE ??
      "AI и ведическая философия помогают увидеть твои внутренние паттерны — и переписать сценарий, по которому живёт твоя система.",
    // Текст основной кнопки под заголовком
    ctaLabel: process.env.NEXT_PUBLIC_HERO_CTA_LABEL ?? "Рассчитать свой код",
    // Текст альтернативной кнопки-приглашения
    secondaryCtaLabel:
      process.env.NEXT_PUBLIC_HERO_SECONDARY_CTA_LABEL ?? "Честный диалог в Telegram",
    // Короткое пояснение под кнопками
    note:
      process.env.NEXT_PUBLIC_HERO_NOTE ??
      "15 минут — и ты видишь карту собственных решений. Никаких продаж, только наблюдение."
  },
  features: [
    // Карточки с ключевыми вопросами/обещаниями результата
    { icon: "🔍", title: "Почему ты снова попадаешь в одни и те же сценарии" },
    { icon: "⚙️", title: "Какие внутренние алгоритмы управляют твоими решениями" },
    { icon: "🧩", title: "Где именно в твоём коде прячется сопротивление переменам" },
    { icon: "🧭", title: "Как выйти из повторяющихся циклов и переписать свой путь" },
    { icon: "💡", title: "5 шагов, которые покажут, как работает твоя система" },
    { icon: "🪶", title: "Честный отчёт без эзотерики и пустых обещаний" }
  ],
  flow: {
    // Заголовок финального призыва к действию
    title:
      process.env.NEXT_PUBLIC_FLOW_TITLE ??
      "Готов увидеть, что на самом деле управляет твоими решениями?",
    // Подзаголовок/описание перед кнопкой
    description:
      process.env.NEXT_PUBLIC_FLOW_DESCRIPTION ??
      "mr.Kcopoc собирает твои ответы, дополняет их AI-ракурсами и показывает карту паттернов. Без оценок. Без давления.",
    // Текст кнопки в нижнем блоке
    ctaLabel: process.env.NEXT_PUBLIC_FLOW_CTA_LABEL ?? "Увидеть свою систему",
    // Небольшой хинт под кнопкой
    hint:
      process.env.NEXT_PUBLIC_FLOW_HINT ??
      "Переход в Telegram безопасен: всё остаётся между тобой и инструментом."
  },
  // Финальная строка подвала
  closingNote:
    process.env.NEXT_PUBLIC_CLOSING_NOTE ??
    "Система не говорит, кем тебе быть. Она просто показывает, как работает твой код.",
  // Ссылка в Telegram с UTM-метками добавляется автоматически в CTAButton
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/baphbl"
};
