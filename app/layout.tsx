import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter"
});
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "mr.Kcopoc — AI и ведическая аналитика внутреннего кода",
    template: "%s — mr.Kcopoc"
  },
  description:
    "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий.",
  openGraph: {
    title: "mr.Kcopoc — AI и ведическая аналитика внутреннего кода",
    description:
      "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий.",
    url: siteUrl,
    siteName: "mr.Kcopoc",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "mr.Kcopoc — AI и ведическая аналитика внутреннего кода",
    description:
      "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${onest.variable} ${unbounded.variable}`}>
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}
