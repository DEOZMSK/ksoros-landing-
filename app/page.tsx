import type { Metadata } from "next";
import Image from "next/image";

import { CTAButton } from "./components/CTAButton";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
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
    <main className="relative min-h-screen overflow-hidden bg-[#f4f5f7] text-neutral-900">
      <ScrollProgressBar />
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-x-[-10%] top-[-35%] h-[520px] rounded-[240px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15),transparent_70%)] blur-[160px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[-5%] bottom-[-40%] h-[620px] rounded-[280px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),transparent_72%)] blur-[180px]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_45%),linear-gradient(0deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <header className="relative overflow-hidden rounded-[56px] border border-white/30 bg-white/35 px-6 py-12 shadow-[0_60px_160px_rgba(15,23,42,0.16)] backdrop-blur-[28px] sm:px-10 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-x-[-20%] top-[-30%] h-[420px] rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_70%)] blur-[120px]" />
            <div className="absolute bottom-[-25%] left-[-10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),transparent_72%)] blur-[140px]" />
            <div className="absolute right-[-8%] top-1/3 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.16),transparent_70%)] blur-[150px]" />
          </div>

          <div className="relative flex flex-col gap-14 lg:gap-16">
            <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/40 px-5 py-3 text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600 backdrop-blur-xl">
              <span className="font-semibold text-neutral-900">KSOROS</span>
              <span className="text-neutral-500">2025 edition</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-16">
              <div className="relative flex flex-col gap-10 text-left">
                <div className="flex flex-col gap-5">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-2 text-xs uppercase tracking-[0.35em] text-neutral-600 backdrop-blur-xl">
                    без бюджета · без рекламы
                  </span>
                  <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-[3.3rem] sm:leading-[1.04]">
                    {hero.title}
                  </h1>
                  <p className="max-w-xl text-pretty text-base font-medium leading-relaxed text-neutral-700 sm:text-2xl">
                    {hero.subtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
                  {hero.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="animate-fade-up text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <CTAButton
                    href={telegramLinkWithText}
                    variant="glow"
                    className="px-9 py-3.5 text-lg"
                  >
                    {hero.ctaLabel}
                  </CTAButton>
                  <span className="text-sm text-neutral-600 sm:text-base">
                    Напиши «привет» — и схема прилетит сразу
                  </span>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute inset-y-[-12%] left-1/2 w-[min(88vw,520px)] -translate-x-1/2 rounded-[52px] border border-white/35 bg-white/25 shadow-[0_50px_160px_rgba(15,23,42,0.24)] backdrop-blur-[24px]" aria-hidden />
                <div className="absolute inset-y-[-15%] left-1/2 w-[min(76vw,420px)] -translate-x-1/2 rounded-[48px] border border-white/25 bg-gradient-to-b from-white/80 via-white/30 to-transparent" aria-hidden />
                <Image
                  src="/photo.png"
                  alt="Портрет Артемия Ксороса"
                  priority
                  width={960}
                  height={1440}
                  sizes="(min-width: 1280px) 480px, (min-width: 768px) 420px, (min-width: 640px) 360px, 90vw"
                  className="relative z-10 w-[min(82vw,440px)] max-w-[440px] rounded-[48px] border border-white/25 object-cover object-top shadow-[0_40px_120px_rgba(15,23,42,0.28)]"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="mt-24 flex flex-col gap-24">
          <section
            id="what"
            className="relative overflow-hidden rounded-[48px] border border-white/40 bg-white/45 px-8 py-12 shadow-[0_50px_140px_rgba(15,23,42,0.12)] backdrop-blur-[26px] sm:px-12"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-10%] top-[-20%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.16),transparent_72%)] blur-[120px]" />
              <div className="absolute right-[-8%] bottom-[-25%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.14),transparent_72%)] blur-[140px]" />
            </div>

            <div className="relative z-10 flex flex-col gap-8">
              <span className="text-xs uppercase tracking-[0.32em] text-neutral-500">
                история запуска
              </span>
              <div className="grid gap-8 text-lg leading-relaxed text-neutral-700 sm:grid-cols-2 sm:text-xl">
                {what.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="animate-fade-up rounded-[28px] border border-white/35 bg-gradient-to-br from-white/50 via-white/20 to-transparent px-6 py-6 text-pretty shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                  >
                    <TextWithBreaks text={paragraph} />
                  </p>
                ))}
              </div>
            </div>
          </section>

          <div className="mx-auto h-px w-full max-w-4xl bg-neutral-900/10" aria-hidden />

          <section
            id="how"
            className="relative overflow-hidden rounded-[48px] border border-white/35 bg-white/35 px-8 py-12 shadow-[0_50px_140px_rgba(15,23,42,0.12)] backdrop-blur-[26px] sm:px-12"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-neutral-900/10 to-transparent" />
              <div className="absolute left-12 top-16 bottom-12 hidden w-px bg-gradient-to-b from-neutral-900/15 via-neutral-900/5 to-transparent md:block" />
            </div>

            <div className="relative z-10 flex flex-col gap-10">
              <span className="text-xs uppercase tracking-[0.32em] text-neutral-500">
                схема из пяти шагов
              </span>
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {how.map((step, index) => (
                  <article
                    key={step}
                    className="group relative overflow-hidden rounded-[32px] border border-white/35 bg-gradient-to-br from-white/45 via-white/10 to-transparent px-6 py-7 shadow-[0_20px_54px_rgba(15,23,42,0.1)] backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-[-30%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.16),transparent_72%)]" />
                    </div>
                    <div className="relative z-10 flex items-start gap-5">
                      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[16px] border border-white/45 bg-white/40 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-pretty text-base leading-relaxed text-neutral-800 sm:text-lg">
                        {step}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <div className="mx-auto h-px w-full max-w-4xl bg-neutral-900/10" aria-hidden />

          <section
            id="cta"
            className="relative overflow-hidden rounded-[56px] border border-neutral-900/15 bg-neutral-950 px-8 py-14 text-white shadow-[0_60px_160px_rgba(15,23,42,0.26)] sm:px-14"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-[-30%] top-[-20%] h-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_70%)] blur-[140px]" />
              <div className="absolute inset-x-[-10%] bottom-[-35%] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_74%)] blur-[150px]" />
            </div>

            <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="space-y-5 text-lg leading-relaxed text-white/90 sm:text-xl">
                {cta.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="animate-fade-up text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
              <CTAButton
                href={telegramLinkWithText}
                variant="glow"
                className="px-12 py-3.5 text-lg"
              >
                {cta.ctaLabel}
              </CTAButton>
            </div>
          </section>

          <div className="mx-auto h-px w-full max-w-4xl bg-neutral-900/10" aria-hidden />

          <section
            id="faq"
            className="relative overflow-hidden rounded-[48px] border border-white/35 bg-white/40 px-8 py-12 shadow-[0_50px_140px_rgba(15,23,42,0.12)] backdrop-blur-[26px] sm:px-12"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-neutral-900/12 to-transparent" />
              <div className="absolute bottom-[-25%] right-[-12%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.14),transparent_72%)] blur-[140px]" />
            </div>

            <div className="relative z-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
              {faq.map((item) => (
                <article
                  key={item.question}
                  className="group relative overflow-hidden rounded-[32px] border border-white/35 bg-gradient-to-br from-white/45 via-white/15 to-transparent px-6 py-7 shadow-[0_20px_54px_rgba(15,23,42,0.1)] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-[-30%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.16),transparent_72%)]" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">{item.question}</h3>
                    <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="relative overflow-hidden rounded-[48px] border border-white/35 bg-white/40 px-8 py-10 text-center shadow-[0_50px_140px_rgba(15,23,42,0.12)] backdrop-blur-[26px] sm:px-12 sm:text-left">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-[25%] top-0 h-px bg-gradient-to-r from-transparent via-neutral-900/12 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
              <p className="max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                <TextWithBreaks text={footer.text} />
              </p>
              <CTAButton
                href={telegramLinkWithText}
                variant="secondary"
                className="px-9 py-3.5 text-base sm:text-lg"
              >
                {footer.ctaLabel}
              </CTAButton>
            </div>
          </footer>
        </div>

        <div className="mt-16 text-center text-[12px] uppercase tracking-[0.5px] text-neutral-500/70">
          v2.5 | zero-budget build | GPT-integrated system
        </div>
      </div>
    </main>
  );
}
