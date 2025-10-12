export interface SiteConfig {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    highlights: string[];
    ctaLabel: string;
  };
  articleTeaser: {
    title: string;
    summary: string;
    ctaLabel: string;
  };
  author: {
    name: string;
    alias?: string;
    roles: string[];
    bio: string;
    stats: {
      clients: number;
      years: number;
    };
    photo?: {
      src: string;
      alt: string;
    };
  };
  benefits: {
    title: string;
    items: {
      title: string;
      description?: string;
    }[];
  };
  leadMagnet: {
    title: string;
    description: string;
    webhookUrl: string;
  };
  footer: {
    email: string;
  };
  telegramLink: string;
}

export const siteConfig: SiteConfig = {
  meta: {
    title: process.env.NEXT_PUBLIC_SITE_TITLE ?? "ИмяФамилия — консультации и квизы",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Короткий квиз, который показывает точки роста в digital и автоматизации. Получите быстрый план и перейдите в Telegram."
  },
  hero: {
    title:
      process.env.NEXT_PUBLIC_HERO_TITLE ??
      "Как системно масштабировать цифровой продукт и продажи — мой 30-минутный план",
    subtitle:
      process.env.NEXT_PUBLIC_HERO_SUBTITLE ??
      "Я — Архим (Артём / mr.Kcopoc), цифровой консультант и разработчик автоматизаций. За 10 лет помог запустить >1700 кампаний и ботов, которые продают без боли.",
    highlights: [
      "Разбираем текущие воронки и уходим от ручных задач",
      "Покажу, как подключить Telegram-бота к продажам и аналитике",
      "Получаете таблицу с быстрыми внедрениями за 48 часов"
    ],
    ctaLabel: "Перейти в Telegram"
  },
  articleTeaser: {
    title: "Чек-лист: 7 шагов к автоматизации продаж через Telegram",
    summary:
      "Заберите мини-гайд и квиз в Telegram: вы узнаете, где проседают конверсии, и получите набор скриптов для команды.",
    ctaLabel: "Читать в Telegram"
  },
  author: {
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? "Архим",
    alias: process.env.NEXT_PUBLIC_AUTHOR_ALIAS ?? "Artem / mr.Kcopoc",
    roles: [
      "Цифровой консультант",
      "Создатель Telegram-ботов",
      "AI-архитектор"
    ],
    bio:
      process.env.NEXT_PUBLIC_AUTHOR_BIO ??
      "Айтишник и цифровой консультант. Делаю ботов и квизы, которые продают и дают аналитику в цифрах.",
    stats: {
      clients: Number(process.env.NEXT_PUBLIC_STATS_CLIENTS ?? 1700),
      years: Number(process.env.NEXT_PUBLIC_STATS_YEARS ?? 10)
    },
    photo: process.env.NEXT_PUBLIC_AUTHOR_PHOTO
      ? {
          src: process.env.NEXT_PUBLIC_AUTHOR_PHOTO,
          alt: "Архим"
        }
      : undefined
  },
  benefits: {
    title: "Что вы узнаете за консультацию",
    items: [
      {
        title: "Соберу карту текущих воронок и точек просадки",
        description: "Вы получите Miro-доску с заметками по этапам клиента."
      },
      {
        title: "Покажу стек инструментов для интеграции Telegram",
        description: "Подключим бота к CRM, Yandex.Metrika и Google Analytics."
      },
      {
        title: "Расчёт окупаемости автоматизации",
        description: "Числа в Google Sheets и сценарий триггеров для внедрения."
      },
      {
        title: "Скрипты для менеджеров и автоответов",
        description: "Готовые сообщения + логика квиза." 
      },
      {
        title: "План последующих касаний",
        description: "Календарь коммуникаций и шаблоны email/бот-цепочек."
      },
      {
        title: "Личный доступ к боту-менеджеру",
        description: "Telegram-бот отвечает на вопросы и фиксирует прогресс."
      }
    ]
  },
  leadMagnet: {
    title: "Короткий автоматический расчёт",
    description:
      "Ответьте на 5 вопросов — и получите Google Sheet с расчётом ROI внедрений + чек-лист по Telegram-боту.",
    webhookUrl: process.env.NEXT_PUBLIC_LEAD_WEBHOOK ?? "/api/lead"
  },
  footer: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hi@example.com"
  },
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/your_bot_or_channel"
};
