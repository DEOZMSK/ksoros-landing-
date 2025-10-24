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

export default function HomePage() {
  const { hero, features, chatPreview, flow, closingNote, telegramLink } = siteConfig;
  const defaultTelegramMessage = "Привет! А какие ресурсы у вас есть?";
  const heroTelegramLink = createTelegramLinkWithText(telegramLink, defaultTelegramMessage);
  const flowTelegramLink = createTelegramLinkWithText(telegramLink, defaultTelegramMessage);
  const heroSubheadline = hero.subheadline.trim();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#040414] via-[#120f24] to-[#241538] text-white">
      {/* Фон с цифровой глубиной */}
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, rgba(244,114,182,0.28), transparent 60%), radial-gradient(circle at 78% 18%, rgba(34,211,238,0.2), transparent 64%), radial-gradient(circle at 48% 80%, rgba(192,132,252,0.22), transparent 66%)"
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 78%, rgba(236,72,153,0.18) 0, rgba(236,72,153,0) 58%), radial-gradient(circle at 88% 82%, rgba(14,165,233,0.16) 0, rgba(14,165,233,0) 60%)"
          }}
        />
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_62%)] blur-3xl animate-float" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.24),transparent_68%)] blur-3xl animate-soft-pulse" />
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.35),transparent_70%)] blur-[120px] animate-soft-pulse" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "120px 120px"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-between gap-6 px-6 pb-8 pt-0 sm:gap-16 sm:px-10 sm:py-16 lg:px-12">
        <header className="relative flex min-h-screen flex-col justify-end overflow-visible pb-12 pt-24 sm:min-h-[660px] sm:justify-center sm:pb-24 sm:pt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-6 -z-10 h-[520px] w-[min(95vw,600px)] -translate-x-1/2 rounded-[55%] bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.28),transparent_74%)] blur-3xl"
          />

          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 flex w-screen -translate-x-1/2 justify-center md:hidden"
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

          <div className="relative z-10 flex w-full flex-col gap-5 sm:gap-10 md:grid md:grid-cols-[1.02fr_1fr] md:items-center">
            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div className="pointer-events-none absolute inset-x-[-1.5rem] bottom-[-4rem] top-[-5rem] -z-10 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(10,6,28,0.72),transparent_68%)] backdrop-blur-[2px] md:hidden" aria-hidden />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.32em] text-white/80">
                {hero.eyebrow}
              </span>

              <div className="mt-3 max-w-xl drop-shadow-[0_12px_32px_rgba(8,6,24,0.4)] sm:mt-6">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-[2.85rem] lg:text-[3.15rem] lg:leading-[1.08]">
                  {hero.headline}
                </h1>
                {heroSubheadline && (
                  <p className="mt-5 text-lg text-white/80 md:text-xl">
                    {heroSubheadline}
                  </p>
                )}
              </div>

              <div className="mt-5 flex w-full flex-col items-center gap-4 text-center sm:mt-10 sm:flex-row sm:items-center sm:justify-start sm:text-left">
                <CTAButton
                  href={heroTelegramLink}
                  variant="glow"
                  className="px-8 py-3.5 text-lg shadow-[0_22px_70px_rgba(236,72,153,0.32)]"
                >
                  {hero.ctaLabel}
                </CTAButton>

                {hero.note && (
                  <p className="max-w-md text-sm text-white/70 sm:text-left">{hero.note}</p>
                )}
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

        <section className="space-y-6 sm:space-y-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15"
                >
                  <div className="absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.32),transparent_70%)] animate-soft-pulse" />
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl md:text-4xl">{feature.icon}</span>
                    <h2 className="text-lg font-bold tracking-[0.01em] text-white md:text-[1.35rem]">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-sm font-medium leading-relaxed tracking-[0.015em] text-white/80 md:text-base">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
            <aside className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
                <div className="absolute -top-24 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.42),transparent_68%)] blur-3xl" />
                <div className="absolute bottom-[-4rem] left-[-3rem] h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.38),transparent_72%)] blur-3xl" />
              </div>
              <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-200" />
                  {chatPreview.title}
                </div>
                <div className="flex flex-1 flex-col gap-3 text-sm">
                  {chatPreview.messages.map((message, index) => (
                    <div
                      key={`${message.sender}-${index}`}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[17rem] rounded-2xl border px-4 py-3 shadow-[0_14px_38px_rgba(17,6,31,0.32)] backdrop-blur-sm ${
                          message.sender === "user"
                            ? "border-white/35 bg-rose-200/30 text-white"
                            : "border-white/65 bg-white/95 text-[#351027]"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/20 via-white/10 to-white/5 px-6 py-10 shadow-[0_28px_78px_rgba(18,8,40,0.6)] backdrop-blur-2xl sm:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-6 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.45),transparent_60%)] opacity-70 blur-3xl animate-soft-pulse" />
            <div className="absolute bottom-[-3rem] left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.4),transparent_68%)] opacity-65 blur-3xl animate-float" />
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.1),transparent_60%)] opacity-45" />
          </div>

          <div className="relative z-10 space-y-6">
            {flow.title && (
              <h2 className="text-3xl font-semibold leading-snug text-white md:text-[2.25rem]">
                {flow.title}
              </h2>
            )}
            {flow.description && (
              <p className="max-w-2xl text-base text-white/80 md:text-lg">
                {flow.description}
              </p>
            )}
            {flow.steps && flow.steps.length > 0 && (
              <ol className="space-y-4">
                {flow.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base font-medium text-white/85">
                      {index + 1}
                    </span>
                    <p className="text-base text-white/80 md:text-lg">{step}</p>
                  </li>
                ))}
              </ol>
            )}
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <CTAButton href={flowTelegramLink} variant="glow" className="px-8 py-3.5 text-lg">
                {flow.ctaLabel}
              </CTAButton>
              {flow.hint && <span className="text-sm text-white/75">{flow.hint}</span>}
            </div>
          </div>
        </section>

        {closingNote && (
          <footer className="border-t border-white/15 pt-6 text-center text-sm text-white/70">
            {closingNote}
          </footer>
        )}
      </div>
    </main>
  );
}
