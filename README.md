# Light Green Bar & Grill: website

**Live:** https://www.lightgreen.es

Website for Light Green, an Argentinian grill (parrilla) in Golf del Sur, Tenerife.

## What it does

- **Bilingual:** Spanish (default) and English, with hreflang alternates and `x-default`.
- **Digital menu** (`/carta`) opened from the QR codes on the tables.
- **Four booking channels:** WhatsApp, Messenger, phone and the web form.
- **Chat widget:** fully client-side and rule-based (regex intent matching plus a scripted booking flow), no LLM backend.
- **Structured data:** Restaurant, Menu, FAQ and Event JSON-LD. The weekly Friday event computes its next date automatically, and expired special events are hidden.
- Legal pages (aviso legal, privacidad, cookies) in both languages.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Vercel

## Run locally

```bash
npm install
npm run dev
```

Deployed on Vercel with `vercel deploy --prod`.

---

Built and maintained by Bogdan & Petruța at [WebHosteleros](https://www.webhosteleros.es). The code is shared as a portfolio sample. The brand, photos and texts belong to Light Green.
