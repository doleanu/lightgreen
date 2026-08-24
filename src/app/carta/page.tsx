import type { Metadata } from "next";
import { DigitalMenu } from "@/components/DigitalMenu";
import { DICTS } from "@/lib/dict";
import { OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from "@/lib/seo";

const d = DICTS.es;

export const metadata: Metadata = {
  title: d.menuPage.metaTitle,
  description: d.menuPage.metaDescription,
  alternates: { languages: { es: "/carta", en: "/en/carta" } },
  openGraph: {
    title: d.menuPage.metaTitle,
    description: d.menuPage.metaDescription,
    locale: "es_ES",
    type: "website",
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Light Green Bar & Grill" }],
  },
};

export default function Page() {
  return <DigitalMenu locale="es" />;
}
