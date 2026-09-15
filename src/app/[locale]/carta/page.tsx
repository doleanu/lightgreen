import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DigitalMenu } from "@/components/DigitalMenu";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";
import { OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_URL } from "@/lib/seo";

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
    title: d.menuPage.metaTitle,
    description: d.menuPage.metaDescription,
    alternates: { canonical: `${SITE_URL}/${locale}/carta`, languages: { es: "/carta", en: "/en/carta" } },
    openGraph: {
      title: d.menuPage.metaTitle,
      description: d.menuPage.metaDescription,
      locale: locale === "en" ? "en_GB" : locale,
      type: "website",
      images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Light Green Bar & Grill" }],
    },
  };
}

export default async function LocaleMenuPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "es") notFound();
  return <DigitalMenu locale={locale} />;
}
