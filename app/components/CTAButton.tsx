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
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    variant === "primary" &&
      "bg-neutral-900 text-white shadow-[0_20px_48px_rgba(17,24,39,0.22)] hover:translate-x-1 hover:shadow-[0_0_28px_rgba(17,24,39,0.28)]",
    variant === "secondary" &&
      "border border-neutral-900/12 bg-white/60 text-neutral-900 shadow-[0_18px_38px_rgba(17,24,39,0.12)] backdrop-blur-md hover:translate-x-1 hover:shadow-[0_0_22px_rgba(17,24,39,0.18)]",
    variant === "glow" &&
      "relative overflow-hidden border border-white/25 bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950 text-white shadow-[0_26px_70px_rgba(17,24,39,0.32)] backdrop-blur-xl hover:translate-x-1 hover:shadow-[0_0_32px_rgba(17,24,39,0.4)] before:absolute before:inset-[-1px] before:-z-10 before:rounded-full before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_65%)] before:opacity-70 before:transition-opacity before:duration-200 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:w-1/2 after:-translate-x-full after:bg-gradient-to-r after:from-white/50 after:via-white/10 after:to-transparent after:opacity-0 after:transition after:duration-300 group-hover:after:translate-x-[180%] group-hover:after:opacity-100",
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
      <span className="whitespace-nowrap">{children}</span>
      <span
        aria-hidden="true"
        className="translate-x-0.5 text-lg transition-transform duration-200 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
