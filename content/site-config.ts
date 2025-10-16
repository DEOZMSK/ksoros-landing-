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
    description: string;
  }[];
  chatPreview: {
    title: string;
    messages: {
      sender: "user" | "bot";
      text: string;
    }[];
  };
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
      "Астролог Артём Ксорос — тёплый диалог начинается с «привет»",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Зайди в Telegram, напиши «привет», и мой мягкий помощник встретит тебя первым, чтобы пригласить меня к живому разговору в тот момент, когда тебе это важно.",
  },
  hero: {
    eyebrow:
      process.env.NEXT_PUBLIC_HERO_EYEBROW ??
      "Артём Ксорос · астролог, который отвечает лично",
    headline:
      process.env.NEXT_PUBLIC_HERO_HEADLINE ??
      "Не держи это в себе. Давай разберёмся спокойно.",
    subheadline:
      process.env.NEXT_PUBLIC_HERO_SUBHEADLINE ??
      "Я — Артём, ведический астролог.\nРазвернём ситуацию и увидим первый шаг.",
    ctaLabel: process.env.NEXT_PUBLIC_HERO_CTA_LABEL ?? "Начать разговор в Telegram →",
    note:
      process.env.NEXT_PUBLIC_HERO_NOTE ??
      "Сначала ответит мой помощник — задаст пару простых вопросов и соберёт контекст, чтобы тебя не грузить рутиной.",
  },
  features: [
    {
      icon: "🌙",
      title: "Пишешь, как подруге",
      description:
        "Никаких форм и заявок — просто напиши, что на душе, и получишь мягкий отклик в ту же минуту."
    },
    {
      icon: "💗",
      title: "Слышит эмоции",
      description:
        "Помощник спрашивает о твоём настроении, чтобы я почувствовал, где поддержать теплом, а где — конкретикой."
    },
    {
      icon: "⭐",
      title: "Поддержка в твоём темпе",
      description:
        "Мы вместе выбираем формат: голос, текст, экспресс-разбор или сопровождение — без давления и дедлайнов."
    },
    {
      icon: "🤲",
      title: "Всегда с живым продолжением",
      description:
        "Когда ощущаешь, что нужен я, помощник зовёт меня в чат и остаётся рядом до полного ясного плана."
    }
  ],
  chatPreview: {
    title:
      process.env.NEXT_PUBLIC_CHAT_PREVIEW_TITLE ??
      "💬 КАК НАЧИНАЕТСЯ НАШЕ ЗНАКОМСТВО",
    messages: [
      {
        sender: "user",
        text:
          "Лена:\nЯ случайно попала на сайт… Честно, сейчас даже на консультацию денег нет. Но очень нужно понять, что делать дальше."
      },
      {
        sender: "bot",
        text:
          "Артём:\nПонимаю. Давай сделаем по-простому: я дам короткую ориентацию без оплаты — чтобы стало спокойнее и понятнее."
      },
      {
        sender: "user",
        text: "Лена:\nПравда можно?"
      },
      {
        sender: "bot",
        text:
          "Артём:\nДа. Скажи, где у тебя узел: отношения, работа или здоровье? И что больше всего тревожит сейчас — выбор или последствия?"
      },
      {
        sender: "user",
        text: "Лена:\nОтношения. Я держусь, но как будто всё зависло, не знаю, тянуть или отпустить."
      },
      {
        sender: "bot",
        text:
          "Артём:\nСейчас тебе нужен не глобальный прогноз, а опора на ближайшие 2–3 шага.\n1) Назови, что ты точно не готова терпеть.\n2) Что ты хочешь чувствовать рядом с человеком (2–3 слова).\n3) Какой один маленький шаг вернёт тебе уважение к себе уже сегодня."
      },
      {
        sender: "user",
        text: "Лена:\nПоняла… Уже легче. Спасибо, будто воздух появился."
      },
      {
        sender: "bot",
        text:
          "Артём:\nЭто и есть ориентир. Когда сформируешь ответы — напиши, сверим и соберём план. Если позже решишься на разбор — подберём формат по силам."
      },
      {
        sender: "user",
        text: "Лена:\nОгромное спасибо. Честно, я даже не ожидала, что поможете вот так, бесплатно. У меня сейчас внутри тишина."
      }
    ]
  },
  flow: {
    title:
      process.env.NEXT_PUBLIC_FLOW_TITLE ??
      "Как продолжается наше знакомство после твоего «привет»",
    description:
      process.env.NEXT_PUBLIC_FLOW_DESCRIPTION ??
      "Весь путь похож на доверительную переписку: помощник держит пространство, а я подключаюсь, когда хочется услышать меня лично.",
    steps: [
      "Ты пишешь «привет» или любое слово — в ответ прилетает живое приветствие и ощущение, что тебя ждали.",
      "Мы мягко собираем, что у тебя происходит, делимся первыми подсказками и настраиваемся на твоё дыхание.",
      "Когда чувствуешь отклик на живой разговор, я присоединяюсь и предлагаю консультацию или сопровождение.",
    ],
    ctaLabel: process.env.NEXT_PUBLIC_FLOW_CTA_LABEL ?? "Написать «привет» сейчас",
    hint:
      process.env.NEXT_PUBLIC_FLOW_HINT ??
      "Говори так, как тебе удобно — я рядом и всё читаю лично.",
  },
  closingNote:
    process.env.NEXT_PUBLIC_CLOSING_NOTE ??
    "AI помогает мне быть рядом быстрее, но каждая встреча и решение рождаются в нашем диалоге — Артём Ксорос.",
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/baphbl",
};
