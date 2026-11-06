import type { Metadata } from "next";
import { DigitalMenu } from "@/components/DigitalMenu";
import { getMenuTabs } from "@/lib/menuTabs";
import { DICTS } from "@/lib/dict";
import { OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_URL } from "@/lib/seo";

const d = DICTS.es;

export const metadata: Metadata = {
  title: d.menuPage.metaTitle,
  description: d.menuPage.metaDescription,
  alternates: { canonical: `${SITE_URL}/carta`, languages: { es: "/carta", en: "/en/carta", "x-default": "/carta" } },
  openGraph: {
    title: d.menuPage.metaTitle,
    description: d.menuPage.metaDescription,
    locale: "es_ES",
    type: "website",
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Light Green Bar & Grill" }],
  },
};

// Refreshed on demand when the owner saves in /admin/precios; this is only the daily safety net.
export const revalidate = 86400;

export default async function Page() {
  return <DigitalMenu locale="es" tabs={await getMenuTabs("es")} />;
}
