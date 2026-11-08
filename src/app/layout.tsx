import type { Metadata, Viewport } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/inter/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALGA trip — поездки по Казахстану",
  description:
    "Лучшие достопримечательности, удобные маршруты и новые впечатления в каждом городе",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
