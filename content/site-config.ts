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
      "mr.Kcopoc — цифровая экосистема ботов, квизов и автоответов",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Живое портфолио mr.Kcopoc: лендинг, Telegram-бот и тематические сценарии показывают, как экосистема настраивается под любую нишу."
  },
  hero: {
    // Маленькая строка над заголовком
    eyebrow:
      process.env.NEXT_PUBLIC_HERO_EYEBROW ??
      "mr.Kcopoc · цифровая экосистема",
    // Главный заголовок первого экрана
    headline:
      process.env.NEXT_PUBLIC_HERO_HEADLINE ??
      "Этот проект — живое портфолио: лендинг, бот и автоответы, которые подстраиваются под любую профессию",
    // Подзаголовок с кратким объяснением сути
    subheadline:
      process.env.NEXT_PUBLIC_HERO_SUBHEADLINE ??
      "Вы листаете экосистему mr.Kcopoc: сайт, Telegram-бот и цифровые ответы, которые синхронизированы между собой. Сейчас сценарий заточен под астролога — потому что сложные ниши лучше всего показывают качество. Тот же стек легко переключается на сапожника, продюсера или продавца косметики.",
    // Текст основной кнопки под заголовком
    ctaLabel:
      process.env.NEXT_PUBLIC_HERO_CTA_LABEL ?? "Открыть экосистему в Telegram",
    // Текст альтернативной кнопки-приглашения
    secondaryCtaLabel:
      process.env.NEXT_PUBLIC_HERO_SECONDARY_CTA_LABEL ?? "Написать mr.Kcopoc",
    // Короткое пояснение под кнопками
    note:
      process.env.NEXT_PUBLIC_HERO_NOTE ??
      "В диалоге отвечает @baphbl: покажу, как экосистема перестраивается под вашу нишу и задачи."
  },
  features: [
    // Карточки с ключевыми вопросами/обещаниями результата
    { icon: "🤖", title: "Telegram-бот, который меняет тональность и оффер под любую экспертизу" },
    { icon: "🕸️", title: "Лендинг, квиз и автоответы связаны в единую digital-воронку" },
    { icon: "💬", title: "Тематика диалогов в личке — часть демонстрации продукта" },
    { icon: "💳", title: "Интеграции с YooKassa и аналитикой уже настроены" },
    { icon: "🧠", title: "AI-модули подсказывают, какие скрипты включить менеджеру" },
    { icon: "📚", title: "Документация и чек-листы позволяют развернуть сценарий под вашу нишу" }
  ],
  flow: {
    // Заголовок финального призыва к действию
    title:
      process.env.NEXT_PUBLIC_FLOW_TITLE ??
      "Посмотрите, как экосистема работает изнутри",
    // Подзаголовок/описание перед кнопкой
    description:
      process.env.NEXT_PUBLIC_FLOW_DESCRIPTION ??
      "Зайдите в Telegram, переключите сценарий и убедитесь, что контент, бот и автоответы мгновенно подстраиваются под любую профессию. Это демонстрация качества mr.Kcopoc, а не привязка к конкретной нише.",
    // Текст кнопки в нижнем блоке
    ctaLabel: process.env.NEXT_PUBLIC_FLOW_CTA_LABEL ?? "Протестировать в Telegram",
    // Небольшой хинт под кнопкой
    hint:
      process.env.NEXT_PUBLIC_FLOW_HINT ??
      "Пишите @baphbl — настрою демонстрацию под ваш кейс прямо в переписке."
  },
  // Финальная строка подвала
  closingNote:
    process.env.NEXT_PUBLIC_CLOSING_NOTE ??
    "mr.Kcopoc — экосистема, которая сегодня говорит от лица астролога, а завтра расскажет о вашем продукте.",
  // Ссылка в Telegram с UTM-метками добавляется автоматически в CTAButton
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/baphbl"
};
