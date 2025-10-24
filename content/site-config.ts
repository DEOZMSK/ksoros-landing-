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
      "Астролог Ксорос — тёплый диалог начинается с «привет»",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Зайди в Telegram, напиши «привет», и мой помощник встретит тебя первым, расскажет всё подробнее",
  },
  hero: {
    eyebrow:
      process.env.NEXT_PUBLIC_HERO_EYEBROW ??
      "Артемий Ксорос · астролог, который отвечает лично",
    headline:
      process.env.NEXT_PUBLIC_HERO_HEADLINE ??
      "Не держи это в себе, давай разберёмся..",
    subheadline: process.env.NEXT_PUBLIC_HERO_SUBHEADLINE ?? "",
    ctaLabel: process.env.NEXT_PUBLIC_HERO_CTA_LABEL ?? "Начать разговор в Telegram",
    note: process.env.NEXT_PUBLIC_HERO_NOTE ?? "",
  },
  features: [
    {
      icon: "🌸",
      title: "Просто начни разговор",
      description:
        "Напиши так, как чувствуешь — без формальностей и лишних слов. Здесь тебя не оценивают, просто слушают и понимают."
    },
    {
      icon: "⭐",
      title: "В своём ритме",
      description:
        "Можно говорить коротко или подробно — как удобно тебе. Всё происходит естественно, без спешки и давления."
    },
    {
      icon: "🤲",
      title: "Когда нужен живой отклик",
      description:
        "Если тема важная, я подключаюсь сам и продолжаю разговор лично. Мы идём до момента, когда внутри появится ясность и спокойствие."
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
        sender: "bot",
        text: "(a few moments later…)"
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
    title: process.env.NEXT_PUBLIC_FLOW_TITLE ?? "",
    description: process.env.NEXT_PUBLIC_FLOW_DESCRIPTION ?? "",
    steps: [] as string[],
    ctaLabel: process.env.NEXT_PUBLIC_FLOW_CTA_LABEL ?? "Написать «привет» сейчас",
    hint: process.env.NEXT_PUBLIC_FLOW_HINT ?? "",
  },
  closingNote: process.env.NEXT_PUBLIC_CLOSING_NOTE ?? "",
  telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/baphbl",
};
