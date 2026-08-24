import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Every real route in the site, in both locales — kept in sync by hand since
// the site has a small, fixed page count (see src/app and src/app/[locale]).
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/carta", priority: 0.9, changeFrequency: "weekly" },
  { path: "/aviso-legal", priority: 0.2, changeFrequency: "monthly" },
  { path: "/privacidad", priority: 0.2, changeFrequency: "monthly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "monthly" },
];
const LOCALE_PREFIXES = ["", "/en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return LOCALE_PREFIXES.flatMap((prefix) =>
    ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${prefix}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }))
  );
}
