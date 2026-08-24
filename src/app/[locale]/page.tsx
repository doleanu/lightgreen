import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";
import { OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== "es").map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

function isLocale(l: string): l is Locale {
  return (LOCALES as string[]).includes(l);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "es") return {};
  const d = DICTS[locale];
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: { languages: { es: "/", en: "/en" } },
    openGraph: {
      title: d.meta.title,
      description: d.meta.ogDescription,
      locale: locale === "en" ? "en_GB" : locale,
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
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "es") notFound();
  return <Site locale={locale} />;
}
