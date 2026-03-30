import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "WRST BHVR | Napkin Wars 2026 | Atlanta & DC",
  description: "System Error. BHVR.EXE. Atlanta and DC's most unapologetic nightlife experience. VIP tables, bottle service, and Napkin Wars. A KHG HugLife Event.",
  keywords: "WRST BHVR, Napkin Wars, Atlanta nightlife, DC nightlife, VIP, bottle service, KHG, HugLife",
  openGraph: {
    title: "WRST BHVR | Napkin Wars 2026",
    description: "The aftermath of the best night you'll never fully remember. Atlanta & DC.",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "WRST BHVR: Napkin Wars",
              "description": "Atlanta's most unhinged nightlife event.",
              "url": "https://wrstbhvr.com",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Atlanta, GA",
                "address": { "@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA" }
              },
              "organizer": {
                "@type": "Organization",
                "name": "HugLife Events",
                "url": "https://huglife.com"
              }
            })
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
