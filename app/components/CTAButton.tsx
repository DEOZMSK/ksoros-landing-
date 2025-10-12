import Link from "next/link";

const UTM_QUERY = "utm_source=site&utm_medium=landing&utm_campaign=mariham_clone";

const isTelegramLink = (href: string) => href.startsWith("https://t.me/") || href.startsWith("tg://");

const withTracking = (href: string) => {
  if (isTelegramLink(href)) {
    const delimiter = href.includes("?") ? "&" : "?";
    const encoded = encodeURIComponent(UTM_QUERY);
    // Telegram deep links используют параметр start для передачи UTM.
    return href.includes("start=") ? href : `${href}${delimiter}start=${encoded}`;
  }

  try {
    const url = new URL(href);
    const params = new URLSearchParams(url.search);
    params.set("utm_source", "site");
    params.set("utm_medium", "landing");
    params.set("utm_campaign", "mariham_clone");
    url.search = params.toString();
    return url.toString();
  } catch (error) {
    // Если URL относительный, просто добавим query-string.
    const delimiter = href.includes("?") ? "&" : "?";
    return `${href}${delimiter}${UTM_QUERY}`;
  }
};

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
  const trackedHref = withTracking(href);

  const classes = [
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition focus:outline-none focus-visible:shadow-focus",
    variant === "primary" && "bg-accent text-white hover:bg-accent-hover",
    variant === "secondary" && "bg-white/10 text-white hover:bg-white/20",
    variant === "glow" &&
      "relative overflow-hidden border border-white/15 bg-gradient-to-r from-white/10 via-white/5 to-white/10 text-white shadow-[0_10px_40px_rgba(79,70,229,0.25)] backdrop-blur-md transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(79,70,229,0.35)] hover:brightness-110 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.45),transparent_65%)] before:opacity-75 before:transition-opacity before:duration-300 hover:before:opacity-100",
    "no-underline",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={trackedHref}
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
