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
    variant === "primary" &&
      "bg-neutral-900 text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-[box-shadow,transform] duration-200 ease-out hover:translate-x-1 hover:shadow-[0_0_12px_rgba(0,0,0,0.18)]",
    variant === "secondary" &&
      "border border-neutral-900/10 bg-white/80 text-neutral-900 shadow-[0_10px_26px_rgba(0,0,0,0.1)] transition-[box-shadow,transform] duration-200 ease-out hover:translate-x-1 hover:shadow-[0_0_12px_rgba(0,0,0,0.14)]",
    variant === "glow" &&
      "relative overflow-hidden border border-neutral-900/10 bg-gradient-to-r from-[#fafafa] via-[#f3f3f3] to-[#eaeaea] text-neutral-900 shadow-[0_16px_46px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-[box-shadow,transform] duration-200 ease-out hover:translate-x-1 hover:shadow-[0_0_12px_rgba(0,0,0,0.12)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)] before:opacity-70 before:transition-opacity before:duration-200 hover:before:opacity-100",
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
