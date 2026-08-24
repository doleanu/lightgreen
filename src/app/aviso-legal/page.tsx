import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { DICTS } from "@/lib/dict";

const d = DICTS.es;

export const metadata: Metadata = {
  title: d.legal.legalNotice.metaTitle,
  description: d.legal.legalNotice.metaDescription,
  alternates: { languages: { es: "/aviso-legal", en: "/en/aviso-legal" } },
};

export default function Page() {
  return <LegalPage locale="es" doc={d.legal.legalNotice} currentPath="/aviso-legal" />;
}
