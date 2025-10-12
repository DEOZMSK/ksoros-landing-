import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"; // TODO: заменить на боевой домен
const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Za7You — AI и ведическая аналитика внутреннего кода",
    template: "%s — Za7You"
  },
  description:
    "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий.",
  openGraph: {
    title: "Za7You — AI и ведическая аналитика внутреннего кода",
    description:
      "Интеллектуальный инструмент самонаблюдения: AI + ведическая философия показывают твой внутренний код без иллюзий.",
    url: siteUrl,
    siteName: "Za7You",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Za7You — AI и ведическая аналитика внутреннего кода",
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
    <html lang="ru" className={inter.variable}>
      <body className="bg-background">
        {children}
        {yandexMetrikaId && (
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${yandexMetrikaId}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                ecommerce:"dataLayer"
              });
            `}
          </Script>
        )}
        {gaMeasurementId && (
          <>
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script id="google-analytics-inline" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
