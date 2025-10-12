import { CTAButton } from "./CTAButton";

export interface HeroProps {
  title: string;
  subtitle: string;
  highlights: string[];
  telegramLink: string;
  ctaLabel?: string;
}

export function Hero({ title, subtitle, highlights, telegramLink, ctaLabel = "Перейти в Telegram" }: HeroProps) {
  return (
    <section className="space-y-10 rounded-3xl border border-outline/60 bg-surface/70 p-8 shadow-2xl">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Digital-консалтинг Архима</p>
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h1>
        <p className="text-lg leading-relaxed text-muted sm:text-xl">{subtitle}</p>
      </div>
      <ul className="space-y-3">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base text-muted">
            <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-[0.7rem] text-accent" aria-hidden="true">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div>
        <CTAButton href={telegramLink} className="w-full sm:w-auto">
          {ctaLabel}
        </CTAButton>
      </div>
    </section>
  );
}
