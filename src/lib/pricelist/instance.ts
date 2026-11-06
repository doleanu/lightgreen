/* Light Green · admin-kit instance: config, categories, seed from dict.ts, storage, auth. */
import { createPriceList } from "./service";
import { blobStorage } from "./storage.blob";
import { getCookie } from "./handler";
import { ADMIN_COOKIE, isValidSession } from "./auth";
import { seedPrice, type LText, type PriceListConfig, type PriceListData } from "./model";
import type { EditorConfig } from "@/components/admin/PriceListEditor";
import { DICTS } from "@/lib/dict";

export const cfg: PriceListConfig = {
  siteId: "lightgreen",
  defaultLang: "es",
  langs: ["es", "en"],
  langStyle: {
    es: { decimalSep: ",", symbol: "suffix" },
    en: { decimalSep: ".", symbol: "prefix" },
  },
  decimals: "fixed2",
  range: "unit-each",
  fromWord: { es: "desde", en: "from" },
  labels: { Copa: { en: "Glass" }, Botella: { en: "Bottle" } },
};

// The menu is tabs → sections → items in dict.ts. Tabs/sections (titles, order) stay in code and are
// the fixed categories; the owner edits the items.
const ES_TABS = DICTS.es.menuPage.tabs;
const EN_TABS = DICTS.en.menuPage.tabs;

export const catId = (tabKey: string, sectionIndex: number) => `${tabKey}-${sectionIndex}`;

export const CATEGORIES = ES_TABS.flatMap((tab) =>
  tab.sections.map((s, si) => ({ id: catId(tab.key, si), title: s.title || tab.label, group: tab.key }))
);

function seed(): PriceListData {
  return {
    version: 0,
    updatedAt: "",
    categories: ES_TABS.flatMap((tab, ti) =>
      tab.sections.map((section, si) => ({
        id: catId(tab.key, si),
        items: section.items.map((it, ii) => {
          const en = EN_TABS[ti]?.sections[si]?.items[ii];
          const name: LText = { es: it.name };
          if (en?.name) name.en = en.name;
          const item: PriceListData["categories"][number]["items"][number] = {
            id: `${catId(tab.key, si)}-${ii}`,
            name,
            price: seedPrice({ es: it.price, ...(en ? { en: en.price } : {}) }, cfg),
          };
          if (it.desc) item.note = { es: it.desc, ...(en?.desc ? { en: en.desc } : {}) };
          return item;
        }),
      }))
    ),
  };
}

export const pl = createPriceList({
  cfg,
  categoryIds: CATEGORIES.map((c) => c.id),
  storage: blobStorage(),
  seed,
  production: process.env.VERCEL_ENV === "production",
});

export const editorConfig: EditorConfig = {
  cfg,
  noun: { one: "plato", many: "platos" },
  langs: [{ code: "en", label: "English" }],
  groups: ES_TABS.map((t) => ({ id: t.key, label: t.label })),
  categories: CATEGORIES,
  features: { note: true, highlight: false },
  endpoint: "/api/admin/pricelist",
  priceHint: "8,90 · 3 – 3,50 · Copa 4 · Botella 11,50 · Consultar",
  accent: "#b4532a",
  viewHref: "/carta",
};

export const isAuthed = (req: Request) => isValidSession(getCookie(req, ADMIN_COOKIE));
export const REVALIDATE_PATHS = ["/carta", "/en/carta", "/admin/precios"];
