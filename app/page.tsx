import type { Metadata } from "next";

import Image from "next/image";

import { CTAButton } from "./components/CTAButton";
import { siteConfig } from "../content/site-config";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description
  }
};

const createTelegramLinkWithText = (baseLink: string, text: string) => {
  try {
    const url = new URL(baseLink);
    url.searchParams.set("text", text);
    return url.toString();
  } catch (error) {
    const separator = baseLink.includes("?") ? "&" : "?";
    return `${baseLink}${separator}text=${encodeURIComponent(text)}`;
  }
};

const TextWithBreaks = ({ text }: { text: string }) => {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

export default function HomePage() {
  const { hero, what, how, cta, faq, footer, telegramLink } = siteConfig;
  const defaultTelegramMessage = "Привет! Хочу увидеть схему запуска без бюджета.";
  const telegramLinkWithText = createTelegramLinkWithText(
    telegramLink,
    defaultTelegramMessage
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f9f9f7] via-[#f2f2f0] to-[#e8e8e6] text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, rgba(0,0,0,0.12), transparent 60%), radial-gradient(circle at 78% 18%, rgba(0,0,0,0.08), transparent 64%), radial-gradient(circle at 48% 80%, rgba(0,0,0,0.05), transparent 66%)"
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 78%, rgba(0,0,0,0.09) 0, rgba(0,0,0,0) 58%), radial-gradient(circle at 88% 82%, rgba(0,0,0,0.06) 0, rgba(0,0,0,0) 60%)"
          }}
        />
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] blur-3xl animate-float" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent_78%)] blur-3xl animate-soft-pulse" />
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),transparent_74%)] blur-[120px] animate-soft-pulse" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "120px 120px"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 pb-12 pt-0 sm:gap-16 sm:px-10 sm:py-16 lg:px-12">
        <header className="relative flex min-h-screen flex-col justify-end overflow-visible pb-16 pt-24 sm:min-h-[640px] sm:justify-center sm:pb-24 sm:pt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-6 -z-10 h-[520px] w-[min(95vw,600px)] -translate-x-1/2 rounded-[55%] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.12),transparent_76%)] blur-3xl"
          />

          <div
            className="pointer-events-none absolute left-1/2 -top-2 -z-10 flex w-screen -translate-x-1/2 justify-center md:hidden"
            style={{ height: "min(100vh, calc(100vw * 1.5))" }}
          >
            <Image
              src="/photo.png"
              alt="Портрет Артемия Ксороса"
              priority
              width={960}
              height={1440}
              className="h-full w-full origin-top transform-gpu object-contain object-top"
            />
          </div>

          <div className="relative z-10 flex w-full flex-col gap-10 sm:gap-12 md:grid md:grid-cols-[1.02fr_1fr] md:items-center">
            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div
                className="pointer-events-none absolute inset-x-[-1.75rem] bottom-[-4.5rem] top-[-5.5rem] -z-10 rounded-[42px] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.24),transparent_72%)] backdrop-blur-md md:hidden"
                aria-hidden
              />
              <div className="absolute inset-x-[-1.25rem] top-[-2.75rem] -z-10 h-[120%] rounded-[38px] bg-gradient-to-b from-black/65 via-black/55 to-black/20 shadow-[0_45px_120px_rgba(0,0,0,0.4)] md:hidden" />
              <div className="mt-3 max-w-xl drop-shadow-[0_14px_38px_rgba(0,0,0,0.32)] sm:mt-0 md:drop-shadow-none">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)] md:text-[3.1rem] md:leading-[1.05] md:text-neutral-900 md:drop-shadow-none">
                  <span className="relative inline-flex">
                    <span className="animate-hero-shimmer bg-[linear-gradient(120deg,#080808,#757575,#f5f5f5,#757575,#080808)] bg-[length:220%_220%] bg-clip-text text-transparent drop-shadow-[0_8px_22px_rgba(0,0,0,0.4)]">
                      {hero.title}
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(circle,#2f2f2f55,transparent_68%)] blur-[22px]"
                    />
                  </span>
                </h1>
                <p className="mt-4 text-lg font-medium leading-relaxed text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)] sm:text-xl md:text-neutral-700 md:drop-shadow-none">
                  {hero.subtitle}
                </p>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-white/95 drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)] sm:text-lg md:text-neutral-600 md:drop-shadow-none">
                  {hero.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex w-full flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-start sm:text-left">
                <CTAButton
                  href={telegramLinkWithText}
                  variant="glow"
                  className="px-8 py-3.5 text-lg shadow-[0_22px_70px_rgba(0,0,0,0.18)]"
                >
                  {hero.ctaLabel}
                </CTAButton>
              </div>
            </div>

            <div className="relative hidden justify-center md:flex">
              <div className="relative w-[min(88vw,520px)] max-w-[520px]">
                <Image
                  src="/photo.png"
                  alt="Портрет Артемия Ксороса"
                  priority
                  width={960}
                  height={1440}
                  sizes="(min-width: 1280px) 520px, (min-width: 768px) 460px, (min-width: 640px) 420px, 88vw"
                  className="w-full origin-top scale-[0.97] transform-gpu rounded-[36px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </header>

        <section
          id="what"
          className="relative overflow-hidden rounded-[38px] border border-white/20 bg-white/70 p-9 shadow-[0_28px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.12),transparent_55%)] before:content-[''] after:absolute after:inset-x-10 after:top-0 after:-z-10 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-black/20 after:to-transparent after:content-[''] sm:p-14"
        >
          <div className="relative grid gap-6 text-left text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
            {what.map((paragraph) => (
              <div
                key={paragraph}
                className="rounded-[26px] border border-black/5 bg-white/90 px-5 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)] md:px-6 md:py-5"
              >
                <p className="text-pretty text-neutral-800">
                  <TextWithBreaks text={paragraph} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how"
          className="relative overflow-hidden rounded-[42px] border border-white/30 bg-gradient-to-br from-white/85 via-[#f4f4f4]/90 to-[#ececec]/95 px-8 py-12 shadow-[0_36px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
            <div className="absolute -top-20 right-6 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.14),transparent_68%)] blur-3xl" />
            <div className="absolute bottom-[-5rem] left-[-3rem] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent_70%)] blur-3xl" />
          </div>
          <div className="relative z-10 grid gap-5 sm:grid-cols-2 sm:gap-8">
            {how.map((step, index) => (
              <article
                key={step}
                className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-white/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.16)]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] blur-xl" />
                <div className="relative z-10 flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[18px] border border-black/10 bg-gradient-to-br from-[#111111] via-[#222222] to-[#444444] text-lg font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.28)]">
                    {index + 1}
                  </span>
                  <p className="text-pretty text-base leading-relaxed text-neutral-800 sm:text-lg">
                    {step}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="relative flex flex-col gap-9 overflow-hidden rounded-[40px] border border-white/30 bg-gradient-to-br from-[#111111] via-[#1d1d1d] to-[#2e2e2e] p-8 text-center shadow-[0_36px_90px_rgba(0,0,0,0.32)] sm:p-14 md:text-left"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_74%)] blur-3xl" />
            <div className="absolute bottom-[-5rem] right-[-3rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_78%)] blur-3xl" />
          </div>
          <div className="relative z-10 space-y-5 text-lg leading-relaxed text-white/90 sm:text-xl">
            {cta.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
            <CTAButton
              href={telegramLinkWithText}
              variant="glow"
              className="px-10 py-3.5 text-lg shadow-[0_22px_70px_rgba(0,0,0,0.3)]"
            >
              {cta.ctaLabel}
            </CTAButton>
          </div>
        </section>

        <section
          id="faq"
          className="relative grid gap-6 rounded-[42px] border border-white/25 bg-white/80 p-9 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:grid-cols-2 sm:gap-8 sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
            <div className="absolute -top-16 left-12 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent_72%)] blur-3xl" />
            <div className="absolute bottom-[-4rem] right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] blur-3xl" />
          </div>
          {faq.map((item) => (
            <article
              key={item.question}
              className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/90 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute -right-6 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_74%)] blur-2xl" />
              <div className="relative z-10 space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">{item.question}</h3>
                <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">{item.answer}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[40px] border border-white/25 bg-gradient-to-br from-white/85 via-white/75 to-white/65 p-9 text-center shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:flex-row sm:justify-between sm:p-12 sm:text-left">
          <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
            <div className="absolute left-8 top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),transparent_72%)] blur-2xl" />
            <div className="absolute bottom-[-4rem] right-6 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_70%)] blur-3xl" />
          </div>
          <p className="relative z-10 text-base leading-relaxed text-neutral-800 sm:text-lg">
            <TextWithBreaks text={footer.text} />
          </p>
          <CTAButton
            href={telegramLinkWithText}
            variant="glow"
            className="relative z-10 px-9 py-3.5 text-base sm:text-lg shadow-[0_22px_70px_rgba(0,0,0,0.22)]"
          >
            {footer.ctaLabel}
          </CTAButton>
        </footer>
      </div>
    </main>
  );
}
