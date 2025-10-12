"use client";

import { FormEvent, useState } from "react";

export interface LeadMagnetProps {
  title: string;
  description: string;
  webhookUrl: string;
}

export function LeadMagnet({ title, description, webhookUrl }: LeadMagnetProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setError(null);

    try {
      const response = await fetch(webhookUrl || "/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить форму. Попробуйте ещё раз.");
      }

      setStatus("success");
      (event.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Произошла ошибка");
    }
  };

  return (
    <section className="space-y-6 rounded-3xl border border-outline/60 bg-surface/60 p-6 shadow-2xl">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Лид-магнит</p>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit} aria-label="Форма получения лид-магнита">
        <input type="hidden" name="source" value="landing" />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted">Имя*</span>
            <input
              type="text"
              name="name"
              required
              className="rounded-xl border border-outline/50 bg-background px-4 py-3 text-white placeholder:text-muted/70 focus:outline-none focus-visible:shadow-focus"
              placeholder="Как к вам обращаться"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-muted">Email*</span>
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-outline/50 bg-background px-4 py-3 text-white placeholder:text-muted/70 focus:outline-none focus-visible:shadow-focus"
              placeholder="name@example.com"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-muted">Телефон (по желанию)</span>
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            className="rounded-xl border border-outline/50 bg-background px-4 py-3 text-white placeholder:text-muted/70 focus:outline-none focus-visible:shadow-focus"
            placeholder="+7"
          />
        </label>
        <label className="flex items-start gap-3 text-xs text-muted">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-outline/70 bg-background text-accent focus:outline-none focus-visible:shadow-focus"
            aria-required="true"
          />
          <span>
            Даю согласие на обработку персональных данных и получение материалов. <a href="/privacy.html" className="underline" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>.
          </span>
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition hover:bg-accent-hover focus:outline-none focus-visible:shadow-focus"
          disabled={status === "loading"}
          data-analytics-event="lead_submitted"
        >
          {status === "loading" ? "Отправляем..." : "Получить квиз и расчёт"}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {status === "success" && "Готово! Проверьте почту: материал уже отправлен."}
          {status === "error" && error}
        </p>
      </form>
    </section>
  );
}
