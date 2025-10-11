import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Za7️⃣You — технологично-философский разбор",
  description:
    "Za7️⃣You — пространство для тех, кто ищет структуру себя через синтез AI и ведической философии."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
