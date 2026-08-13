import type { Metadata, Viewport } from "next";
import { Inter, Bitter } from "next/font/google";
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bitter({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display",
  display: "swap",
});

export const SITE_URL = "https://lightgreen-green.vercel.app";
export const OG_IMAGE = `${SITE_URL}/photos/entrada-real.jpg`;

// Title/description are per-locale (see src/app/page.tsx and
// src/app/[locale]/page.tsx) — this root layout only sets the shared bits.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f6ead6",
};

// LocalBusiness structured data — helps both classic SEO (rich results) and
// AI answer engines ground factual claims (name, address, phone, hours,
// cuisine, rating) directly from the page. Every field here is a real fact
// already shown in the visible page content (see business in chatAssistant.ts
// and the JSX below) — nothing invented for the schema alone.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Light Green Bar & Grill",
  servesCuisine: ["Argentinian", "Grill", "Steakhouse"],
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. San Blas, Local 4",
    addressLocality: "Golf del Sur, San Miguel de Abona",
    addressRegion: "Santa Cruz de Tenerife",
    postalCode: "38639",
    addressCountry: "ES",
  },
  telephone: "+393511733108",
  priceRange: "€20–30",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "11:00",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
