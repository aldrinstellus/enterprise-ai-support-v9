import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise AI Support V9 - Multi-Persona Interface",
  description: "Enterprise AI Support Dashboard with multi-persona interface - C-Level, CS Manager, Support Agent",
  keywords: ["support", "ticketing", "AI", "dashboard", "analytics", "demo", "multi-persona"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="h-screen overflow-hidden bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
