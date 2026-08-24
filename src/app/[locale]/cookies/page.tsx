import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";

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
    title: d.legal.cookies.metaTitle,
    description: d.legal.cookies.metaDescription,
    alternates: { languages: { es: "/cookies", en: "/en/cookies" } },
  };
}

export default async function LocaleCookiesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "es") notFound();
  return <LegalPage locale={locale} doc={DICTS[locale].legal.cookies} currentPath="/cookies" />;
}
