export interface SiteConfig {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    ctaLabel: string;
  };
  what: string[];
  how: string[];
  cta: {
    paragraphs: string[];
    ctaLabel: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
  footer: {
    text: string;
    ctaLabel: string;
  };
  telegramLink: string;
}

export const siteConfig: SiteConfig = {
  meta: {
    title:
      process.env.NEXT_PUBLIC_SITE_TITLE ??
      "Как сделать систему, которая приносит деньги без вложений — Артемий Ксорос",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Я сделал проект без бюджета и запустил поток заявок с помощью нейросетей. Без рекламы, без команды. Рассказываю, как.",
  },
  hero: {
    title: process.env.NEXT_PUBLIC_HERO_TITLE ?? "Артемий Ксорос",
    subtitle:
      process.env.NEXT_PUBLIC_HERO_SUBTITLE ??
      "человек, который собрал систему, приносящую деньги, не потратив ни рубля",
    paragraphs: [
      process.env.NEXT_PUBLIC_HERO_PARAGRAPH_1 ??
        "Я не запускал рекламу, не нанимал команду, не покупал курсы.",
      process.env.NEXT_PUBLIC_HERO_PARAGRAPH_2 ??
        "Просто собрал из нейросетей, логики и упрямства то, что работает.",
    ],
    ctaLabel: process.env.NEXT_PUBLIC_HERO_CTA_LABEL ?? "Написать в Telegram",
  },
  what: [
    process.env.NEXT_PUBLIC_WHAT_PARAGRAPH_1 ??
      "Запустил проект с нуля.\nБез бюджета. Без связей. Без таргета.",
    process.env.NEXT_PUBLIC_WHAT_PARAGRAPH_2 ??
      "Первый день — 14 просмотров.\nЧерез неделю — первые клиенты.\nТеперь система сама делает заявки.",
    process.env.NEXT_PUBLIC_WHAT_PARAGRAPH_3 ??
      "Не потому что повезло.\nА потому что перестал фантазировать и начал считать.",
  ],
  how: [
    process.env.NEXT_PUBLIC_HOW_STEP_1 ??
      "1. Идея, которая решает боль, а не “интересную тему”.",
    process.env.NEXT_PUBLIC_HOW_STEP_2 ??
      "2. Продукт, который можно продать сегодня, а не через месяц.",
    process.env.NEXT_PUBLIC_HOW_STEP_3 ??
      "3. Контент, который работает как ловушка для внимания.",
    process.env.NEXT_PUBLIC_HOW_STEP_4 ?? "4. GPT, который экономит время и заменяет команду.",
    process.env.NEXT_PUBLIC_HOW_STEP_5 ??
      "5. Система, которая собирает всё это в одну работающую цепочку.",
  ],
  cta: {
    paragraphs: [
      process.env.NEXT_PUBLIC_CTA_PARAGRAPH_1 ??
        "Могу показать тебе схему, по которой я запустился.",
      process.env.NEXT_PUBLIC_CTA_PARAGRAPH_2 ??
        "Без бюджета. Без мотивации. Без волшебства.",
      process.env.NEXT_PUBLIC_CTA_PARAGRAPH_3 ??
        "Ты просто поймёшь, как сделать из своих знаний систему, которая зарабатывает.",
    ],
    ctaLabel: process.env.NEXT_PUBLIC_CTA_LABEL ?? "Написать в Telegram",
  },
  faq: [
    {
      question: "Сколько нужно денег?",
      answer: "Ноль. Я начинал с телефона и ChatGPT.",
    },
    {
      question: "Нужно ли что-то уметь?",
      answer: "Думать. И не бояться облажаться.",
    },
    {
      question: "Сколько занимает запуск?",
      answer: "3 дня — первая версия. Неделя — первый результат.",
    },
    {
      question: "Это курс?",
      answer: "Нет. Это живая схема.",
    },
  ],
  footer: {
    text:
      process.env.NEXT_PUBLIC_FOOTER_TEXT ??
      "Хочешь понять, как это устроено — напиши мне.\nПокажу без красивых слов, без “продаж”, без фокусов.",
    ctaLabel: process.env.NEXT_PUBLIC_FOOTER_CTA_LABEL ?? "Написать в Telegram",
  },
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/baphbl",
};
