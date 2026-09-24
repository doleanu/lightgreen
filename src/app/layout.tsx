import type { Metadata, Viewport } from "next";
import { Inter, Bitter } from "next/font/google";
import { ChatWidget } from "@/components/ChatWidget";
import { SITE_URL, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SCHEMA_IMAGE } from "@/lib/seo";
import { business } from "@/lib/chatAssistant";

const MAPS_URL = business.mapsUrl;
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

// Title/description are per-locale (see src/app/page.tsx and
// src/app/[locale]/page.tsx) — this root layout only sets the shared bits.
// openGraph/twitter here are a fallback (logo thumbnail) for pages that don't
// set their own — e.g. the legal pages — so shared links never look bare.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "Light Green Bar & Grill",
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Light Green Bar & Grill" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
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
  url: SITE_URL,
  hasMenu: `${SITE_URL}/carta`,
  // Both URLs already verified/used elsewhere in the codebase (chatAssistant.ts)
  // — no Instagram handle is confirmed anywhere, so it's deliberately omitted.
  sameAs: ["https://www.facebook.com/lightgreentenerife", MAPS_URL],
  servesCuisine: ["Argentinian", "Grill", "Steakhouse"],
  image: SCHEMA_IMAGE,
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
    ratingValue: 4.7,
    bestRating: 5,
    reviewCount: 29,
  },
  // Evening service every day, plus a Sunday lunch sitting — matches the
  // venue's real Google Business Profile hours (checked 2026-09-15).
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
      ],
      opens: "17:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "17:00",
      closes: "00:00",
    },
  ],
};

// Every route is prerendered statically (see the build output), so this root
// layout can't know the locale server-side without opting the whole site out
// of static rendering — not worth it for an attribute Google doesn't use for
// language targeting anyway (hreflang above already handles that correctly).
// This one-line script keeps the actual DOM attribute honest for the case
// that does care: screen readers and browser features like spell-check.
const setHtmlLangScript = `document.documentElement.lang=location.pathname.startsWith("/en")?"en":"es";`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: setHtmlLangScript }}
        />
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
