import type { Metadata } from "next";
import { Site } from "@/components/Site";
import { DICTS } from "@/lib/dict";
import { OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_URL } from "@/lib/seo";

const d = DICTS.es;

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: [
    "parrilla argentina Tenerife",
    "restaurante Golf del Sur",
    "bar grill San Blas Tenerife",
    "chimichurri Tenerife",
    "carne de vacuno canario Tenerife",
    "carne a la brasa Golf del Sur",
  ],
  alternates: { canonical: SITE_URL, languages: { es: "/", en: "/en" } },
  openGraph: {
    title: d.meta.title,
    description: d.meta.ogDescription,
    locale: "es_ES",
    type: "website",
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Light Green Bar & Grill" }],
  },
  twitter: {
    card: "summary_large_image",
    title: d.meta.title,
    description: d.meta.ogDescription,
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <Site locale="es" />;
}
