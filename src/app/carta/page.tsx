import type { Metadata } from "next";
import { DigitalMenu } from "@/components/DigitalMenu";
import { DICTS } from "@/lib/dict";
import { OG_IMAGE } from "../layout";

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
    images: [{ url: OG_IMAGE, width: 1200, height: 1600, alt: "Carta digital de Light Green Bar & Grill" }],
  },
};

export default function Page() {
  return <DigitalMenu locale="es" />;
}
