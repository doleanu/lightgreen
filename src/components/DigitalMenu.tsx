"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/chatAssistant";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";

const TEL_HREF = business.phoneHref;
const WA_URL = `https://wa.me/${business.whatsappNumber}`;

function localePath(locale: Locale, path: string) {
  return locale === "es" ? path : `/${locale}${path}`;
}

// "34,50 €" or "€34.50" → "34.50", for schema.org Offer.price (plain decimal).
function parsePrice(price: string) {
  return price.replace(/[€\s]/g, "").replace(",", ".");
}

export function DigitalMenu({ locale }: { locale: Locale }) {
  const d = DICTS[locale];
  const m = d.menuPage;
  const [activeTab, setActiveTab] = useState(m.tabs[0].key);

  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: m.metaTitle,
    hasMenuSection: m.tabs.map((tab) => ({
      "@type": "MenuSection",
      name: tab.label,
      hasMenuItem: tab.sections.flatMap((section) =>
        section.items.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.desc,
          offers: {
            "@type": "Offer",
            price: parsePrice(item.price),
            priceCurrency: "EUR",
          },
        }))
      ),
    })),
  };

  return (
    <main className="relative min-h-screen bg-cream">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      {/* ============ HEADER ============ */}
      <header className="sticky inset-x-0 top-0 z-40 border-b border-terracotta/15 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3 sm:px-8">
          <a href={localePath(locale, "/")} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/light-green-logo.jpg"
              alt="Light Green Bar & Grill"
              className="h-11 w-auto rounded-md sm:h-12"
            />
          </a>
          <div className="flex items-center gap-3">
            <nav aria-label="Idioma" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
              {LOCALES.map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className="text-ink-faint">/</span>}
                  {l === locale ? (
                    <span className="text-terracotta">{d.langSwitch[l]}</span>
                  ) : (
                    <a href={localePath(l, "/carta")} className="text-ink-faint hover:text-ink">
                      {DICTS[l].langSwitch[l]}
                    </a>
                  )}
                </span>
              ))}
            </nav>
            <a
              href={localePath(locale, "/")}
              className="hidden text-xs font-semibold uppercase tracking-wide text-ink-faint hover:text-ink sm:inline-flex"
            >
              {m.backLabel}
            </a>
          </div>
        </div>
        {/* ============ TABS ============ */}
        <div className="mx-auto flex max-w-4xl gap-1 overflow-x-auto px-5 sm:px-8">
          {m.tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTab(t.key)}
              className={`shrink-0 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                t.key === activeTab
                  ? "border-terracotta text-terracotta"
                  : "border-transparent text-ink-faint hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      {/* ============ INTRO ============ */}
      <section className="relative overflow-hidden bg-terracotta py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest2 text-cream/80 sm:text-xs">
            {m.kicker}
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-cream sm:text-5xl">
            {m.title}
            <span className="text-char">{m.titleWarm}</span>
          </h1>
          <p className="mt-5 mx-auto max-w-lg text-base font-light leading-relaxed text-cream/90">
            {m.subtitle}
          </p>
          <p className="mt-6 inline-block rounded-full bg-char/20 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-cream">
            {m.grillNote}
          </p>
        </div>
      </section>

      {/* ============ MENU SECTIONS (all tabs rendered; CSS toggles visibility so
           the full menu stays in the server-rendered HTML for crawlers) ============ */}
      <section className="relative bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {m.tabs.map((t) => (
            <div key={t.key} className={t.key === activeTab ? "block" : "hidden"}>
              {t.sections.map((section, sIdx) => (
                <div key={section.title || `section-${sIdx}`} className={sIdx > 0 ? "mt-14" : ""}>
                  {section.title && (
                    <h2 className="mb-6 text-center font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      {section.title}
                    </h2>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {section.items.map((item, i) => (
                      <Reveal key={item.name} delay={`${(i % 4) * 0.06}s`}>
                        <div className="warm-card flex h-full flex-col justify-between rounded-2xl border border-terracotta/15 bg-cream-card p-5">
                          <div>
                            <div className="flex items-baseline justify-between gap-3">
                              <p className="font-display text-lg font-bold text-ink">{item.name}</p>
                              <span className="shrink-0 text-right font-sans text-sm font-bold text-terracotta">
                                {item.price}
                              </span>
                            </div>
                            {item.desc && (
                              <p className="mt-2 text-sm text-ink-soft font-light leading-relaxed">{item.desc}</p>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <p className="mt-10 text-center text-xs text-ink-faint">{m.note}</p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative bg-cream-deep py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 px-5 text-center sm:px-8">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-olive px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:scale-105"
          >
            {m.ctaWhatsapp}
          </a>
          <a
            href={TEL_HREF}
            className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/50"
          >
            {m.ctaCall} · {business.phoneDisplay}
          </a>
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
