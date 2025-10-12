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
  variant?: "primary" | "secondary";
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition focus:outline-none focus-visible:shadow-focus",
    variant === "primary" ? "bg-accent text-white hover:bg-accent-hover" : "bg-white/10 text-white hover:bg-white/20",
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
