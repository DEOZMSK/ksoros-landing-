interface SectionHeadingProps {
  kicker?: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({ kicker, title, align = "left" }: SectionHeadingProps) {
  return (
    <header className={align === "center" ? "text-center" : "text-left"}>
      {kicker ? (
        <p className="text-xs uppercase tracking-[0.35em] text-muted">{kicker}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
    </header>
  );
}
