import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body"
});

const yesevaOne = Yeseva_One({
  subsets: ["latin", "cyrillic-ext"],
  weight: "400",
  style: ["normal"],
  display: "swap",
  variable: "--font-heading"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Астролог Артём Ксорос — тёплый диалог начинается с «привет»",
    template: "%s — Артём Ксорос"
  },
  description:
    "Напиши «привет» в Telegram — мягкий помощник Артёма Ксороса встретит тебя и пригласит к живой консультации, когда тебе захочется услышать его лично.",
  openGraph: {
    title: "Астролог Артём Ксорос — тёплый диалог начинается с «привет»",
    description:
      "Напиши «привет» в Telegram — мягкий помощник Артёма Ксороса встретит тебя и пригласит к живой консультации, когда тебе захочется услышать его лично.",
    url: siteUrl,
    siteName: "Артём Ксорос",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Астролог Артём Ксорос — тёплый диалог начинается с «привет»",
    description:
      "Напиши «привет» в Telegram — мягкий помощник Артёма Ксороса встретит тебя и пригласит к живой консультации, когда тебе захочется услышать его лично."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${plusJakartaSans.variable} ${yesevaOne.variable}`}>
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}
