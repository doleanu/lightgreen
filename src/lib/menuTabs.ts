import { DICTS, type Locale, type MenuTab } from "@/lib/dict";
import { formatPrice, pick, singleAmount, type PriceListData } from "@/lib/pricelist/model";
import { cfg, catId, pl } from "@/lib/pricelist/instance";

/**
 * The carta tabs as the public page renders them: tab labels and section titles come from dict.ts,
 * the items come from the price list (edited in /admin/precios). Hidden items, empty sections and
 * empty tabs are left out.
 */
export function renderTabs(data: PriceListData, locale: Locale): MenuTab[] {
  const byId = new Map(data.categories.map((c) => [c.id, c]));
  return DICTS[locale].menuPage.tabs
    .map((tab) => ({
      ...tab,
      sections: tab.sections
        .map((section, si) => ({
          ...section,
          items: (byId.get(catId(tab.key, si))?.items ?? [])
            .filter((it) => !it.hidden)
            .map((it) => ({
              name: pick(it.name, locale, cfg),
              desc: it.note ? pick(it.note, locale, cfg) : "",
              price: formatPrice(it.price, locale, cfg),
              amount: singleAmount(it.price),
            })),
        }))
        .filter((s) => s.items.length > 0),
    }))
    .filter((t) => t.sections.length > 0);
}

export async function getMenuTabs(locale: Locale): Promise<MenuTab[]> {
  return renderTabs((await pl.getData()).data, locale);
}
