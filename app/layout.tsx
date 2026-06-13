import type { Metadata } from "next";
import type { ReactNode } from "react";
import { THEME_STORAGE_KEY } from "@/util/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novare | Landing Pages de Alta Performance",
  description: "Design estratégico e tecnologia para landing pages de alta conversão.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeScript = `
    try {
      const theme = sessionStorage.getItem("${THEME_STORAGE_KEY}");
      document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");
    } catch {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  `;

  return (
    <html data-theme="dark" lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
