import Link from "next/link";

export interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  analyticsEvent?: string;
  variant?: "primary" | "secondary" | "glow";
  newTab?: boolean;
}

export function CTAButton({
  href,
  children,
  className,
  analyticsEvent = "click_telegram",
  variant = "primary",
  newTab = true
}: CTAButtonProps) {
  const classes = [
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition focus:outline-none focus-visible:shadow-focus",
    variant === "primary" && "bg-accent text-white hover:bg-accent-hover",
    variant === "secondary" && "bg-white/10 text-white hover:bg-white/20",
    variant === "glow" &&
      "relative overflow-hidden border border-white/15 bg-gradient-to-r from-rose-200/35 via-violet-100/15 to-sky-200/30 text-white shadow-[0_18px_48px_rgba(236,72,153,0.35)] backdrop-blur-md transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_64px_rgba(14,116,144,0.35)] hover:brightness-110 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,rgba(251,113,133,0.65),transparent_58%)] before:opacity-85 before:transition-opacity before:duration-300 hover:before:opacity-100",
    "no-underline",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={classes}
      data-analytics-event={analyticsEvent}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
