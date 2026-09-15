import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";
import { SITE_URL } from "@/lib/seo";

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
    title: d.legal.privacy.metaTitle,
    description: d.legal.privacy.metaDescription,
    alternates: { canonical: `${SITE_URL}/${locale}/privacidad`, languages: { es: "/privacidad", en: "/en/privacidad" } },
  };
}

export default async function LocalePrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "es") notFound();
  return <LegalPage locale={locale} doc={DICTS[locale].legal.privacy} currentPath="/privacidad" />;
}
