import { SITE_URL } from "@/lib/seo";

// Hand-written (instead of robots.ts) because MetadataRoute.Robots cannot
// emit the Content-Signal directive.
export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-agent: *",
    "Content-Signal: ai-train=no, search=yes, ai-input=yes",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
