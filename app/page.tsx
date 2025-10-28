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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f8f8] via-[#fbfbfb] to-[#ffffff] text-neutral-900">
      <ScrollProgressBar />
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 24%, rgba(0,0,0,0.08), transparent 58%), radial-gradient(circle at 84% 18%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(circle at 48% 82%, rgba(0,0,0,0.05), transparent 62%)"
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "120px 120px"
          }}
        />
        <div className="absolute -left-20 top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_75%)] blur-[90px] animate-floating-spot" />
        <div className="absolute bottom-[-4rem] right-[-3rem] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.07),transparent_78%)] blur-[110px] animate-floating-spot" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-12 sm:px-10 sm:pt-16 lg:px-12">
        <header className="relative grid min-h-[70vh] items-center gap-12 pb-12 pt-10 md:grid-cols-[1.05fr_1fr] md:gap-16 md:pb-16 md:pt-12">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-6 -z-10 rounded-[44px] bg-gradient-to-b from-white/40 via-white/10 to-transparent backdrop-blur-sm md:hidden" aria-hidden />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-0 -z-20 bg-[linear-gradient(to_top,rgba(0,0,0,0.28),transparent)] md:hidden"
            aria-hidden
          />
          <div className="pointer-events-none absolute left-1/2 top-6 -z-10 h-[520px] w-[min(95vw,640px)] -translate-x-1/2 rounded-[55%] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.12),transparent_78%)] blur-[120px]" aria-hidden />

          <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
            <div className="glass-panel relative w-full max-w-xl rounded-[32px] px-6 py-8 shadow-none md:px-8">
              <h1 className="animate-fade-up text-3xl leading-tight tracking-tight text-neutral-900 sm:text-[3.05rem] sm:leading-[1.05]">
                {hero.title}
              </h1>
              <p
                className="mt-4 animate-fade-up text-base font-medium leading-relaxed text-neutral-900 [text-shadow:0_1px_3px_rgba(255,255,255,0.4)] sm:text-xl md:text-neutral-800 md:[text-shadow:none]"
              >
                {hero.subtitle}
              </p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-700 sm:text-lg">
                {hero.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="animate-fade-up text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-10 flex w-full justify-center md:hidden">
              <div className="relative w-[min(90vw,400px)]">
                <div className="absolute -inset-4 -z-10 rounded-[34px] bg-gradient-to-br from-white/40 via-white/10 to-transparent backdrop-blur-lg" aria-hidden />
                <Image
                  src="/photo.png"
                  alt="Портрет Артемия Ксороса"
                  priority
                  width={960}
                  height={1440}
                  className="w-full rounded-[28px] object-contain object-top"
                />
              </div>
            </div>
            <div className="mt-8 flex w-full flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-start sm:text-left">
              <CTAButton
                href={telegramLinkWithText}
                variant="glow"
                className="px-8 py-3.5 text-lg"
              >
                {hero.ctaLabel}
              </CTAButton>
            </div>
          </div>

          <div className="relative hidden justify-center md:flex">
            <div className="relative w-[min(88vw,480px)] max-w-[480px]">
              <div className="absolute -inset-6 -z-10 rounded-[42px] bg-gradient-to-br from-white/50 via-white/20 to-transparent backdrop-blur-lg" aria-hidden />
              <Image
                src="/photo.png"
                alt="Портрет Артемия Ксороса"
                priority
                width={960}
                height={1440}
                sizes="(min-width: 1280px) 480px, (min-width: 768px) 420px, (min-width: 640px) 380px, 88vw"
                className="w-full origin-top rounded-[36px] object-cover object-top"
              />
            </div>
          </div>
        </header>

        <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-24">
          <section
            id="what"
            className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#f8f8f8]/85 via-[#fcfcfc]/70 to-white/60 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-lg md:p-12 animate-fade-up"
          >
            <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
              <div className="absolute -top-16 left-8 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_78%)] blur-2xl" />
              <div className="absolute bottom-[-3rem] right-6 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_76%)] blur-3xl" />
            </div>
            <div className="relative z-10 space-y-6 text-left text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
              {what.map((paragraph) => (
                <p key={paragraph} className="animate-fade-up border-l border-neutral-900/10 pl-6 text-pretty">
                  <TextWithBreaks text={paragraph} />
                </p>
              ))}
            </div>
          </section>

          <div className="h-px w-full bg-neutral-900/10" aria-hidden />

          <section
            id="how"
            className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#f9f9f9]/80 via-[#f5f5f5]/70 to-white/50 px-6 py-12 backdrop-blur-lg sm:px-12 animate-fade-up"
          >
            <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
              <div className="absolute -top-20 right-6 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_78%)] blur-3xl" />
              <div className="absolute bottom-[-4rem] left-[-2rem] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_74%)] blur-3xl" />
            </div>
            <div className="relative z-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
              {how.map((step, index) => (
                <article
                  key={step}
                  className="group relative flex items-start gap-5 rounded-[28px] border border-neutral-900/10 bg-white/20 px-5 py-6 backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[16px] border border-neutral-900/10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 text-base font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-pretty text-base leading-relaxed text-neutral-800 sm:text-lg">
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="h-px w-full bg-neutral-900/10" aria-hidden />

          <section
            id="cta"
            className="relative flex flex-col gap-8 overflow-hidden rounded-[40px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 p-8 text-center text-white sm:p-14 md:text-left animate-fade-up"
          >
            <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_78%)] blur-3xl" />
              <div className="absolute bottom-[-4rem] right-[-3rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_78%)] blur-3xl" />
            </div>
            <div className="relative z-10 space-y-5 text-lg leading-relaxed text-white/90 sm:text-xl">
              {cta.paragraphs.map((paragraph) => (
                <p key={paragraph} className="animate-fade-up text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
              <CTAButton href={telegramLinkWithText} variant="glow" className="px-10 py-3.5 text-lg">
                {cta.ctaLabel}
              </CTAButton>
            </div>
          </section>

          <div className="h-px w-full bg-neutral-900/10" aria-hidden />

          <section
            id="faq"
            className="relative grid gap-6 rounded-[36px] bg-gradient-to-br from-[#fafafa]/85 via-[#f8f8f8]/70 to-white/55 p-8 backdrop-blur-lg sm:grid-cols-2 sm:gap-8 sm:p-12 animate-fade-up"
          >
            <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
              <div className="absolute -top-14 left-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_78%)] blur-2xl" />
              <div className="absolute bottom-[-3rem] right-8 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_74%)] blur-3xl" />
            </div>
            {faq.map((item) => (
              <article
                key={item.question}
                className="relative flex flex-col gap-3 rounded-[26px] border border-neutral-900/10 bg-white/20 p-6 backdrop-blur-sm"
              >
                <h3 className="animate-fade-up text-lg text-neutral-900 sm:text-xl">{item.question}</h3>
                <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">{item.answer}</p>
              </article>
            ))}
          </section>

          <div className="h-px w-full bg-neutral-900/10" aria-hidden />

          <footer className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[36px] bg-gradient-to-br from-[#f8f8f8]/85 via-[#fdfdfd]/70 to-white/55 p-8 text-center backdrop-blur-lg sm:flex-row sm:justify-between sm:p-12 sm:text-left animate-fade-up">
            <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
              <div className="absolute left-8 top-6 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_76%)] blur-2xl" />
              <div className="absolute bottom-[-3rem] right-6 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_74%)] blur-3xl" />
            </div>
            <p className="relative z-10 text-base leading-relaxed text-neutral-800 sm:text-lg">
              <TextWithBreaks text={footer.text} />
            </p>
            <CTAButton href={telegramLinkWithText} variant="glow" className="relative z-10 px-9 py-3.5 text-base sm:text-lg">
              {footer.ctaLabel}
            </CTAButton>
          </footer>
        </div>

        <div className="mt-16 text-center text-[12px] uppercase tracking-[0.5px] text-neutral-500/70">
          v2.5 | zero-budget build | GPT-integrated system
        </div>
      </div>
    </main>
  );
}
