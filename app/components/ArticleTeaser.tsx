import { CTAButton } from "./CTAButton";

export interface ArticleTeaserProps {
  title: string;
  summary: string;
  telegramLink: string;
  label?: string;
}

export function ArticleTeaser({ title, summary, telegramLink, label = "Читать в Telegram" }: ArticleTeaserProps) {
  return (
    <section className="rounded-3xl border border-outline/60 bg-surface/60 p-6 shadow-lg">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Лид-магнит</p>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-sm leading-relaxed text-muted">{summary}</p>
        <CTAButton href={telegramLink} variant="secondary" className="w-full sm:w-auto">
          {label}
        </CTAButton>
      </div>
    </section>
  );
}
