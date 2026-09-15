import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { DICTS } from "@/lib/dict";
import { SITE_URL } from "@/lib/seo";

const d = DICTS.es;

export const metadata: Metadata = {
  title: d.legal.cookies.metaTitle,
  description: d.legal.cookies.metaDescription,
  alternates: { canonical: `${SITE_URL}/cookies`, languages: { es: "/cookies", en: "/en/cookies" } },
};

export default function Page() {
  return <LegalPage locale="es" doc={d.legal.cookies} currentPath="/cookies" />;
}
