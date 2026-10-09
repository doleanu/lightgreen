import type { Metadata } from "next";
import { CelebratePage } from "@/components/CelebratePage";
import { DICTS } from "@/lib/dict";
import { OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_URL } from "@/lib/seo";

const d = DICTS.es.celebratePage;

export const metadata: Metadata = {
  title: d.metaTitle,
  description: d.metaDescription,
  alternates: { canonical: `${SITE_URL}/celebra`, languages: { es: "/celebra", en: "/en/celebra", "x-default": "/celebra" } },
  openGraph: {
    title: d.metaTitle,
    description: d.metaDescription,
    locale: "es_ES",
    type: "website",
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Light Green Bar & Grill" }],
  },
};

export default function Page() {
  return <CelebratePage locale="es" />;
}
