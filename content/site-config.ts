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
      "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий.",
  },
  hero: {
    // Маленькая строка над заголовком
    eyebrow:
      process.env.NEXT_PUBLIC_HERO_EYEBROW ??
      "mr.Kcopoc · Digital AI-менеджер",
    // Главный заголовок первого экрана
    headline:
      process.env.NEXT_PUBLIC_HERO_HEADLINE ??
      "Напиши «привет» — и тебе ответит мой настроенный AI, который собирает запрос и подключает меня в нужный момент",
    // Подзаголовок с кратким объяснением сути
    subheadline:
      process.env.NEXT_PUBLIC_HERO_SUBHEADLINE ??
      "Ты обращаешься в Telegram, думая, что пишешь мне лично. На самом деле вступает в диалог AI-консьерж: он уточняет задачу, подбирает формат взаимодействия и связывает с остальными сервисами, когда это действительно нужно.",
    // Текст основной кнопки под заголовком
    ctaLabel: process.env.NEXT_PUBLIC_HERO_CTA_LABEL ?? "Написать «привет» в Telegram",
    // Короткое пояснение под кнопками
    note:
      process.env.NEXT_PUBLIC_HERO_NOTE ??
      "",
  },
  features: [
    // Карточки с ключевыми вопросами/обещаниями результата
    { icon: "🤖", title: "AI принимает первое сообщение и сам определяет, что тебе действительно нужно" },
    { icon: "🧭", title: "Готовит сценарий: консультация, расчёт или оплата — без лишних шагов" },
    { icon: "🪄", title: "Подтягивает мои материалы и собирает итоговый отчёт по твоему запросу" },
    { icon: "🔗", title: "Передаёт мне контекст, когда настало время живого разговора" },
  ],
  flow: {
    // Заголовок финального призыва к действию
    title:
      process.env.NEXT_PUBLIC_FLOW_TITLE ??
      "Как выглядит путь внутри Telegram",
    // Подзаголовок/описание перед кнопкой
    description:
      process.env.NEXT_PUBLIC_FLOW_DESCRIPTION ??
      "",
    steps: [
      "Ты пишешь любое сообщение — хоть «привет».",
      "AI задаёт пару точных вопросов, фиксирует цель и прикидывает формат взаимодействия.",
      "Когда контекст собран, он предлагает мои бесплатные/платные ресурсы, и остаётся на связи по меня нет.",
    ],
    // Текст кнопки в нижнем блоке
    ctaLabel: process.env.NEXT_PUBLIC_FLOW_CTA_LABEL ?? "Стартовать диалог с AI",
    // Небольшой хинт под кнопкой
    hint:
      process.env.NEXT_PUBLIC_FLOW_HINT ??
      "Можно начать с любого слова — бот поймёт и направит дальше.",
  },
  // Финальная строка подвала
  closingNote:
    process.env.NEXT_PUBLIC_CLOSING_NOTE ??
    "AI — это фильтр без шума: ты не тратишь время на ожидание, а я получаю чистый контекст и прихожу, когда нужен.",
  // Ссылка в Telegram с UTM-метками добавляется автоматически в CTAButton
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/baphbl",
};
