import type { Metadata } from "next";

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

export default function HomePage() {
  const { hero, features, flow, closingNote, telegramLink } = siteConfig;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070f] text-white">
      {/* Фон с цифровой глубиной */}
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 58%), radial-gradient(circle at 80% 25%, rgba(236,72,153,0.16), transparent 62%), radial-gradient(circle at 50% 80%, rgba(56,189,248,0.16), transparent 60%)"
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px"
          }}
        />
        <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.3),transparent_65%)] blur-3xl animate-float" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)] blur-3xl animate-soft-pulse" />
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.28),transparent_70%)] blur-[120px] animate-soft-pulse" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-between gap-12 px-6 py-16 sm:px-10 lg:px-12">
        <header className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
            {hero.eyebrow}
          </span>

          <div className="space-y-6">
            <h1 className="font-semibold leading-tight tracking-tight text-white text-3xl md:text-[2.75rem] lg:text-[2.95rem] lg:leading-[1.12]">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-lg text-white/75 md:text-xl">
              {hero.subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton href={telegramLink} variant="glow" className="px-8 py-3.5 text-lg shadow-[0_18px_60px_rgba(79,70,229,0.25)]">
              {hero.ctaLabel}
            </CTAButton>
          </div>

          <p className="text-sm text-white/60 sm:max-w-md">{hero.note}</p>
        </header>

        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.25),transparent_70%)] animate-soft-pulse" />
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl md:text-3xl">{feature.icon}</span>
                  <h2 className="text-lg font-medium leading-snug text-white md:text-xl">
                    {feature.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-6 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),transparent_65%)] opacity-70 blur-3xl animate-soft-pulse" />
            <div className="absolute bottom-[-3rem] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_70%)] opacity-60 blur-3xl animate-float" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_60%)] opacity-40" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-semibold leading-snug text-white md:text-[2.2rem]">
              {flow.title}
            </h2>
            <p className="max-w-2xl text-base text-white/75 md:text-lg">
              {flow.description}
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <CTAButton href={telegramLink} variant="glow" className="px-8 py-3.5 text-lg">
                {flow.ctaLabel}
              </CTAButton>
              <span className="text-sm text-white/60">{flow.hint}</span>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          {closingNote}
        </footer>
      </div>
    </main>
  );
}
