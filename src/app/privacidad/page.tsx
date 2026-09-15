import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { DICTS } from "@/lib/dict";
import { SITE_URL } from "@/lib/seo";

const d = DICTS.es;

export const metadata: Metadata = {
  title: d.legal.privacy.metaTitle,
  description: d.legal.privacy.metaDescription,
  alternates: { canonical: `${SITE_URL}/privacidad`, languages: { es: "/privacidad", en: "/en/privacidad" } },
};

export default function Page() {
  return <LegalPage locale="es" doc={d.legal.privacy} currentPath="/privacidad" />;
}
