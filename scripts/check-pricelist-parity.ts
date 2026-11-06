/**
 * The carta rendered from the price-list model (seed) must be IDENTICAL to dict.ts (names, descriptions,
 * price strings) for every language. Run: npx tsx scripts/check-pricelist-parity.ts
 */
import { DICTS, LOCALES } from "@/lib/dict";
import { renderTabs } from "@/lib/menuTabs";
import { validatePriceList } from "@/lib/pricelist/model";
import { CATEGORIES, cfg, pl } from "@/lib/pricelist/instance";

(async () => {
  const { data, source } = await pl.getData();
  console.log("source:", source, "| categories:", CATEGORIES.length);
  const v = validatePriceList(JSON.parse(JSON.stringify(data)), CATEGORIES.map((c) => c.id), cfg);
  if (!v.ok) { console.log("SEED INVALID:", v.error); process.exit(1); }
  let bad = 0, items = 0, numeric = 0, text = 0;
  for (const c of data.categories) for (const it of c.items) { items++; it.price.kind === "amount" ? numeric++ : text++; }
  console.log(`items: ${items} | editable numeric prices: ${numeric} | kept as text (exact strings): ${text}`);
  for (const l of LOCALES) {
    const want = DICTS[l].menuPage.tabs.map((t) => ({ key: t.key, label: t.label, sections: t.sections.map((s) => ({ title: s.title, items: s.items.map(({ name, desc, price }) => ({ name, desc, price })) })) }));
    const got = renderTabs(data, l).map((t) => ({ key: t.key, label: t.label, sections: t.sections.map((s) => ({ title: s.title, items: s.items.map(({ name, desc, price }) => ({ name, desc, price })) })) }));
    const same = JSON.stringify(want) === JSON.stringify(got);
    if (!same) { bad++; for (let i = 0; i < want.length; i++) for (let j = 0; j < want[i].sections.length; j++) for (let k = 0; k < want[i].sections[j].items.length; k++) { const a = JSON.stringify(want[i].sections[j].items[k]), b = JSON.stringify(got[i]?.sections[j]?.items[k]); if (a !== b) { console.log(l, "diff", i, j, k, "\n want", a, "\n got ", b); i = 99; j = 99; break; } } }
    console.log(l, same ? "IDENTICAL" : "DIFFERENT", `(${want.reduce((n, t) => n + t.sections.reduce((m, s) => m + s.items.length, 0), 0)} items)`);
  }
  if (text) for (const c of data.categories) for (const it of c.items) if (it.price.kind === "text") console.log("  text price:", it.name.es, "→", JSON.stringify(it.price.text));
  process.exit(bad ? 1 : 0);
})();
