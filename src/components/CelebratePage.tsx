import { business, waHref } from "@/lib/chatAssistant";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";
import { SITE_URL } from "@/lib/seo";

function localePath(locale: Locale, path: string) {
  return locale === "es" ? path : `/${locale}${path}`;
}

export function CelebratePage({ locale }: { locale: Locale }) {
  const d = DICTS[locale];
  const c = d.celebratePage;
  const cel = d.eventos.celebrate;
  const pageUrl = `${SITE_URL}${localePath(locale, "/celebra")}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Light Green Bar & Grill", item: `${SITE_URL}${localePath(locale, "/")}`.replace(/\/$/, "") },
        { "@type": "ListItem", position: 2, name: c.h1, item: pageUrl },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-cream">
      {jsonLd.map((j, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }}
        />
      ))}

      {/* ============ HEADER ============ */}
      <header className="sticky inset-x-0 top-0 z-40 border-b border-terracotta/15 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
          <a href={localePath(locale, "/")} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/light-green-logo.jpg" alt="Light Green Bar & Grill" className="h-11 w-auto rounded-md sm:h-12" />
          </a>
          <nav aria-label="Idioma" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-ink-faint">/</span>}
                {l === locale ? (
                  <span className="text-terracotta">{d.langSwitch[l]}</span>
                ) : (
                  <a href={localePath(l, "/celebra")} className="text-ink-faint hover:text-ink">
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
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-widest2 text-terracotta sm:text-xs">
            {c.label}
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">{c.h1}</h1>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">{c.intro}</p>
          <a
            href={waHref(cel.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-olive px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:scale-105"
          >
            {cel.cta}
          </a>

          <h2 className="mt-16 font-display text-2xl font-bold text-ink">{c.includesTitle}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {cel.items.map((item) => (
              <li key={item} className="flex items-center gap-2.5 rounded-xl border border-terracotta/15 bg-cream-card px-4 py-3 text-sm text-ink">
                <span className="text-terracotta" aria-hidden="true">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest2 text-terracotta">{cel.capacity}</p>

          <h2 className="mt-16 font-display text-2xl font-bold text-ink">{c.stepsTitle}</h2>
          <ol className="mt-5 space-y-4">
            {c.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-terracotta font-display text-sm font-bold text-cream">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 font-display text-2xl font-bold text-ink">{c.faqTitle}</h2>
          <div className="mt-5 space-y-6">
            {c.faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg font-bold text-ink">{f.q}</h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-terracotta/20 bg-cream-card px-8 py-10 text-center shadow-xl shadow-ink/10">
            <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{c.ctaTitle}</p>
            <a
              href={waHref(cel.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-olive px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:scale-105"
            >
              {cel.cta}
            </a>
          </div>

          <a href={localePath(locale, "/")} className="mt-10 inline-block text-sm font-semibold text-terracotta hover:underline">
            {c.back}
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
            <a href={localePath(locale, "/aviso-legal")} className="hover:text-cream">{d.footer.legalNotice}</a>
            <a href={localePath(locale, "/privacidad")} className="hover:text-cream">{d.footer.privacy}</a>
            <a href={localePath(locale, "/cookies")} className="hover:text-cream">{d.footer.cookies}</a>
          </div>
          <p className="text-[0.65rem] text-cream/35">{d.footer.copyright}</p>
          <p className="text-xs text-cream/40">
            {d.footer.webBy}{" "}
            <a href="https://webhosteleros.es" className="text-olive-bright hover:text-cream">WebHosteleros</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
