import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "WRST BHVR | Napkin Wars 2026", description: "A KHG HugLife Event. Atlanta." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
