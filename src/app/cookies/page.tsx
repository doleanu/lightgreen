import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { DICTS } from "@/lib/dict";

const d = DICTS.es;

export const metadata: Metadata = {
  title: d.legal.cookies.metaTitle,
  description: d.legal.cookies.metaDescription,
  alternates: { languages: { es: "/cookies", en: "/en/cookies" } },
};

export default function Page() {
  return <LegalPage locale="es" doc={d.legal.cookies} currentPath="/cookies" />;
}
