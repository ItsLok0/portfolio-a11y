import type { Metadata } from "next";
import "@/app/globals.css";
import SkipLink from "@/app/ui/layout/skip-link";
import { open_sans } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: {
      default: "Kore A11y",
      template: "%s | Kore A11y",
  },
  description: "Composants accessibles WCAG 2.2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${open_sans.className} antialiased flex flex-1 min-h-screen h-auto flex-col`}>
        { <SkipLink /> }
        <header>
          <p className="w-full flex justify-center font-bold">Header content</p>
        </header>
        <main id="main-content" tabIndex={-1}>
          { children }
        </main>
      </body>
    </html>
  );
}