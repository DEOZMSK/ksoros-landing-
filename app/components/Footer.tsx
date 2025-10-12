interface FooterProps {
  telegramLink: string;
  email?: string;
  year?: number;
}

export function Footer({ telegramLink, email = "hello@example.com", year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-outline/60 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} mr.Kcopoc. Цифровая экосистема и портфолио.</p>
        <nav className="flex flex-wrap items-center gap-4">
          <a href="/privacy.html" className="hover:text-white" rel="noopener noreferrer">
            Политика конфиденциальности
          </a>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Telegram
          </a>
          <a href={`mailto:${email}`} className="hover:text-white" rel="noopener noreferrer">
            {email}
          </a>
          <span className="text-xs text-muted/70">Сделано на Next.js + Tailwind</span>
        </nav>
      </div>
    </footer>
  );
}
