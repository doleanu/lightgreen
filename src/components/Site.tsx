import Reveal from "@/components/Reveal";
import { GrillGrate, MusicNotes } from "@/components/art";
import { ReservationForm } from "@/components/ReservationForm";
import { business } from "@/lib/chatAssistant";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";

const TEL_HREF = business.phoneHref;
const WA_URL = `https://wa.me/${business.whatsappNumber}`;
const MESSENGER_URL = business.messengerUrl;
const MAPS_URL = business.mapsUrl;

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[0.62rem] sm:text-xs font-semibold uppercase tracking-widest2 text-terracotta">
      {children}
    </p>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-terracotta" aria-hidden="true">
      <path d="M10 1.5 12.4 7 18.5 7.7 14 11.8 15.3 18 10 14.7 4.7 18 6 11.8 1.5 7.7 7.6 7Z" />
    </svg>
  );
}

function localePath(locale: Locale, path: string) {
  return locale === "es" ? path : `/${locale}${path}`;
}

export function Site({ locale }: { locale: Locale }) {
  const d = DICTS[locale];

  return (
    <main className="relative">
      {/* ============ HEADER ============ */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-terracotta/15 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href={localePath(locale, "/#top")} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/light-green-logo.jpg"
              alt="Light Green Bar & Grill"
              className="h-11 w-auto rounded-md sm:h-12"
            />
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <nav aria-label="Idioma" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
              {LOCALES.map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className="text-ink-faint">/</span>}
                  {l === locale ? (
                    <span className="text-terracotta">{d.langSwitch[l]}</span>
                  ) : (
                    <a href={localePath(l, "/")} className="text-ink-faint hover:text-ink">
                      {DICTS[l].langSwitch[l]}
                    </a>
                  )}
                </span>
              ))}
            </nav>
            <a
              href={localePath(locale, "/carta")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ember px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-ember-soft"
            >
              {d.nav.menu}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-olive/50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-olive transition-colors hover:bg-olive hover:text-cream"
            >
              {d.nav.whatsapp}
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-terracotta/50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
            >
              {d.nav.messenger}
            </a>
            <a
              href={TEL_HREF}
              className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-terracotta-bright"
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      {/* ============ HERO — editorial split, real photo ============ */}
      <section id="top" className="relative overflow-hidden bg-cream pt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6 md:order-1">
            <MonoLabel>{d.hero.kicker}</MonoLabel>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] text-ink headline-tight sm:text-6xl md:text-7xl">
              {d.hero.titleLine1}
              <br />
              {d.hero.titleLine2}{" "}
              <span className="warm-glow">{d.hero.titleWarm}</span>
            </h1>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft sm:text-lg">
              {d.hero.subtitle}
            </p>

            <div className="mt-7 flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
              <span className="ml-1 text-base font-bold text-ink">4,7</span>
              <span className="text-sm text-ink-faint">(24) {d.hero.ratingSuffix}</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-olive px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:scale-105"
              >
                {d.hero.ctaWhatsapp}
              </a>
              <a
                href={TEL_HREF}
                className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/50"
              >
                {d.hero.ctaCall} · {business.phoneDisplay}
              </a>
              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/50"
              >
                {d.hero.ctaMessenger}
              </a>
              <a
                href={localePath(locale, "/carta")}
                className="rounded-full bg-ember px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:scale-105"
              >
                {d.hero.ctaMenu}
              </a>
            </div>

            <p className="mt-7 text-xs uppercase tracking-widest2 text-ink-faint">
              {business.address}
            </p>
          </div>

          <div className="md:col-span-6 md:order-2">
            <Reveal>
              <figure className="warm-card overflow-hidden rounded-[1.75rem] border border-terracotta/20 shadow-xl shadow-ink/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/hero-carne-real.jpg"
                  alt={d.hero.photoAlt}
                  className="h-[26rem] w-full object-cover sm:h-[32rem]"
                  loading="eager"
                />
                <figcaption className="bg-char py-3 text-center font-sans text-[0.65rem] uppercase tracking-widest2 text-cream/70">
                  {d.hero.photoCaption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <GrillGrate className="h-8 w-full opacity-50" />

      {/* ============ EL FUEGO ============ */}
      <section id="fuego" className="relative bg-cream-deep py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <figure className="warm-card mx-auto max-w-xs overflow-hidden rounded-[1.5rem] border border-terracotta/20 shadow-lg shadow-ink/10 md:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/steak-real.jpg"
                alt={d.fuego.photoAlt}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="bg-char py-2.5 text-center font-sans text-[0.62rem] uppercase tracking-widest2 text-cream/70">
                {d.fuego.photoCaption}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay="0.1s" className="md:col-span-7">
            <MonoLabel>{d.fuego.label}</MonoLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {d.fuego.titlePre}
              <span className="warm-glow">{d.fuego.titleWarm}</span>
            </h2>
            <p className="mt-5 max-w-lg text-ink-soft font-light leading-relaxed">{d.fuego.para1}</p>
            <p className="mt-4 max-w-lg text-ink-faint font-light leading-relaxed text-sm">
              {d.fuego.para2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ LA CARTA ============ */}
      <section id="carta" className="relative bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <MonoLabel>{d.carta.label}</MonoLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {d.carta.titlePre}
              <span className="warm-glow">{d.carta.titleWarm}</span>
            </h2>
            <p className="mt-5 mx-auto max-w-lg text-ink-soft font-light leading-relaxed">
              {d.carta.intro}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {d.carta.categories.map((cat, i) => (
              <Reveal key={cat.title} delay={`${i * 0.1}s`}>
                <div className="warm-card h-full overflow-hidden rounded-2xl border border-terracotta/15 bg-cream-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.photo}
                    alt={cat.alt}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <p className="font-display text-xl font-bold text-ink">{cat.title}</p>
                    <p className="mt-2 text-sm text-ink-soft font-light leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs uppercase tracking-widest2 text-ink-faint">
            {d.carta.priceNote}
          </p>
        </div>
      </section>

      {/* ============ QR / CARTA DIGITAL ============ */}
      <section id="qr" className="relative bg-cream-deep py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <MonoLabel>{d.qr.label}</MonoLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {d.qr.titlePre}
              <span className="warm-glow">{d.qr.titleWarm}</span>
            </h2>
            <p className="mt-5 mx-auto max-w-lg text-ink-soft font-light leading-relaxed">{d.qr.para}</p>
            <ul className="mt-6 inline-flex flex-col items-start space-y-2.5 text-left text-sm text-ink-soft font-light">
              {d.qr.bullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="text-terracotta">→</span> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* carne de vacuno canario — the one thing we want front and centre here */}
          <Reveal className="mt-16">
            <p className="text-center text-xs uppercase tracking-widest2 text-terracotta/90">
              {d.qr.cardLabel}
            </p>
            <div className="warm-card mx-auto mt-5 max-w-3xl rounded-[2rem] bg-terracotta px-8 py-12 text-center shadow-2xl shadow-terracotta/30 sm:px-16 sm:py-16">
              <p className="font-display text-3xl font-extrabold leading-tight text-cream sm:text-4xl">
                {d.qr.cardBeefTitle}
              </p>
              <p className="mt-4 mx-auto max-w-xl text-base font-light leading-relaxed text-cream/90 sm:text-lg">
                {d.qr.cardBeefText}
              </p>
            </div>
            <p className="mt-5 text-center text-[0.7rem] text-ink-faint max-w-md mx-auto">
              {d.qr.cardNote}
            </p>
          </Reveal>

          {/* real menu preview — what scanning the QR actually shows */}
          <div className="mt-20">
            <p className="text-center text-xs uppercase tracking-widest2 text-ink-faint">
              {d.qr.menuPreviewLabel}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.qr.menuItems.map((item, i) => (
                <Reveal key={item.name} delay={`${(i % 3) * 0.08}s`}>
                  <div className="warm-card flex h-full flex-col justify-between rounded-2xl border border-terracotta/15 bg-cream-card p-5">
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-display text-base font-bold text-ink">{item.name}</p>
                        <span className="shrink-0 font-sans text-sm font-bold text-terracotta">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-[0.7rem] text-ink-faint">{d.qr.menuNote}</p>
          </div>
        </div>
      </section>

      <GrillGrate className="h-8 w-full opacity-50" />

      {/* ============ AMBIENTE ============ */}
      <section id="ambiente" className="relative bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-12 md:items-center">
          <Reveal delay="0.1s" className="md:col-span-7 md:order-1">
            <MonoLabel>{d.ambiente.label}</MonoLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {d.ambiente.titlePre}
              <span className="warm-glow">{d.ambiente.titleWarm}</span>
            </h2>
            <p className="mt-5 max-w-lg text-ink-soft font-light leading-relaxed">{d.ambiente.para}</p>
          </Reveal>
          <Reveal className="md:col-span-5 md:order-2 flex justify-center">
            <MusicNotes className="h-40 w-40 opacity-90" />
          </Reveal>
        </div>
      </section>

      {/* ============ EVENTOS ============ */}
      <section id="eventos" className="relative bg-cream-deep py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <MonoLabel>{d.eventos.label}</MonoLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {d.eventos.titlePre}
              <span className="warm-glow">{d.eventos.titleWarm}</span>
            </h2>
            <p className="mt-5 mx-auto max-w-lg text-ink-soft font-light leading-relaxed">
              {d.eventos.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {d.eventos.weekly.map((ev, i) => (
              <Reveal key={ev.title} delay={`${i * 0.1}s`}>
                <div className="warm-card h-full overflow-hidden rounded-2xl border border-terracotta/15 bg-cream-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ev.photo} alt={ev.alt} className="h-48 w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <p className="font-display text-xl font-bold text-ink">{ev.title}</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-terracotta">
                      {ev.schedule}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft font-light">{ev.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay="0.2s" className="mt-12">
            <p className="text-center text-xs uppercase tracking-widest2 text-terracotta/90">
              {d.eventos.specialLabel}
            </p>
            <div className="warm-card mx-auto mt-5 max-w-3xl overflow-hidden rounded-[2rem] shadow-2xl shadow-terracotta/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.eventos.specialPhoto}
                alt={d.eventos.specialAlt}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="bg-terracotta px-8 py-10 text-center sm:px-16 sm:py-12">
                <p className="font-display text-3xl font-extrabold leading-tight text-cream sm:text-4xl">
                  {d.eventos.specialTitle}
                </p>
                <p className="mt-4 mx-auto max-w-xl text-base font-light leading-relaxed text-cream/90 sm:text-lg">
                  {d.eventos.specialText}
                </p>
                <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-widest2 text-olive-bright">
                  {d.eventos.specialWhen}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RESEÑAS — sin contador, solo la nota ============ */}
      <section id="resenas" className="relative bg-cream-deep py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <MonoLabel>{d.resenas.label}</MonoLabel>
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="mt-4 font-display text-5xl font-extrabold text-ink">4,7</p>
          <p className="mt-2 text-sm text-ink-faint">{d.resenas.ratingLabel} (24)</p>
          <p className="mt-8 max-w-lg mx-auto text-ink-soft font-light leading-relaxed">
            {d.resenas.para}
          </p>
        </div>
      </section>

      {/* ============ PREGUNTAS FRECUENTES — SEO + IA ============ */}
      <section id="faq" className="relative bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <MonoLabel>{d.faq.label}</MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              {d.faq.title}
            </h2>
          </div>
          <div className="mt-12 space-y-6">
            {d.faq.items.map((f) => (
              <div key={f.q} className="border-b border-terracotta/15 pb-6">
                <h3 className="font-display text-lg font-bold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm text-ink-soft font-light leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESERVA ============ */}
      <section id="reserva" className="relative bg-cream-deep py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <MonoLabel>{d.reserva.label}</MonoLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {d.reserva.titlePre}
            <span className="warm-glow">{d.reserva.titleWarm}</span>
          </h2>
          <p className="mt-5 mx-auto max-w-lg text-ink-soft font-light leading-relaxed">
            {d.reserva.intro}
          </p>

          <Reveal className="mt-12">
            <ReservationForm d={d.reserva} />
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACTO ============ */}
      <section id="contacto" className="relative bg-cream-deep py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <MonoLabel>{d.contacto.label}</MonoLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {d.contacto.titlePre}
            <span className="warm-glow">{d.contacto.titleWarm}</span>
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3 max-w-2xl mx-auto text-left">
            <div className="warm-card rounded-2xl border border-terracotta/15 bg-cream-card p-5">
              <p className="text-[0.65rem] uppercase tracking-widest2 text-terracotta">
                {d.contacto.whereLabel}
              </p>
              <p className="mt-2 text-sm text-ink">{business.address}</p>
            </div>
            <div className="warm-card rounded-2xl border border-terracotta/15 bg-cream-card p-5">
              <p className="text-[0.65rem] uppercase tracking-widest2 text-terracotta">
                {d.contacto.hoursLabel}
              </p>
              <p className="mt-2 whitespace-pre-line text-sm text-ink">{d.contacto.hoursValue}</p>
            </div>
            <div className="warm-card rounded-2xl border border-terracotta/15 bg-cream-card p-5">
              <p className="text-[0.65rem] uppercase tracking-widest2 text-terracotta">
                {d.contacto.contactLabel}
              </p>
              <p className="mt-2 text-sm text-ink">
                {business.phoneDisplay}
                <br />
                {d.contacto.contactValue}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-olive px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:scale-105"
            >
              {d.contacto.ctaWhatsapp}
            </a>
            <a
              href={TEL_HREF}
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/50"
            >
              {d.contacto.ctaCall}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/50"
            >
              {d.contacto.ctaMaps}
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/50"
            >
              {d.contacto.ctaMessenger}
            </a>
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
            <a href="https://mojoweb.es" className="text-olive-bright hover:text-cream">
              MojoWeb
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
