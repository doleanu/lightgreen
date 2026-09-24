import { business } from "@/lib/chatAssistant";
import { DICTS, LOCALES, type Locale, type LegalDoc } from "@/lib/dict";

function localePath(locale: Locale, path: string) {
  return locale === "es" ? path : `/${locale}${path}`;
}

export function LegalPage({ locale, doc, currentPath }: { locale: Locale; doc: LegalDoc; currentPath: string }) {
  const d = DICTS[locale];

  return (
    <main className="relative min-h-screen bg-cream">
      {/* ============ HEADER ============ */}
      <header className="sticky inset-x-0 top-0 z-40 border-b border-terracotta/15 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
          <a href={localePath(locale, "/")} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/light-green-logo.jpg"
              alt="Light Green Bar & Grill"
              className="h-11 w-auto rounded-md sm:h-12"
            />
          </a>
          <nav aria-label="Idioma" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-ink-faint">/</span>}
                {l === locale ? (
                  <span className="text-terracotta">{d.langSwitch[l]}</span>
                ) : (
                  <a href={localePath(l, currentPath)} className="text-ink-faint hover:text-ink">
                    {DICTS[l].langSwitch[l]}
                  </a>
                )}
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* ============ CONTENT ============ */}
      <section className="relative bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{doc.title}</h1>
          <p className="mt-2 text-xs uppercase tracking-widest2 text-ink-faint">{doc.updated}</p>
          <p className="mt-6 text-ink-soft font-light leading-relaxed">{doc.intro}</p>

          <div className="mt-10 space-y-8">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-lg font-bold text-ink">{section.heading}</h2>
                <div className="mt-2 space-y-2">
                  {section.body.map((p, i) => (
                    <p key={i} className="text-sm text-ink-soft font-light leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-terracotta/15 bg-char py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/light-green-logo.jpg" alt="Light Green Bar & Grill" className="h-14 w-auto rounded-lg" />
          <p className="text-xs text-cream/50">{business.address}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.65rem] uppercase tracking-widest2 text-cream/50">
            <a href={localePath(locale, "/aviso-legal")} className="hover:text-cream">
              {d.footer.legalNotice}
            </a>
            <a href={localePath(locale, "/privacidad")} className="hover:text-cream">
              {d.footer.privacy}
            </a>
            <a href={localePath(locale, "/cookies")} className="hover:text-cream">
              {d.footer.cookies}
            </a>
          </div>
          <p className="text-[0.65rem] text-cream/35">{d.footer.copyright}</p>
          <p className="text-xs text-cream/40">
            {d.footer.webBy}{" "}
            <a href="https://webhosteleros.es" className="text-olive-bright hover:text-cream">
              WebHosteleros
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
