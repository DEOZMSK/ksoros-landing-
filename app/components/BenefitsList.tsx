export interface BenefitItem {
  title: string;
  description?: string;
}

export interface BenefitsListProps {
  items: BenefitItem[];
}

export function BenefitsList({ items }: BenefitsListProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Что вы получите</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-3 rounded-2xl border border-outline/60 bg-surface/70 p-4 shadow-lg"
          >
            <span
              className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
              aria-hidden="true"
            >
              ✓
            </span>
            <div>
              <p className="text-base font-medium text-white">{item.title}</p>
              {item.description ? (
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
