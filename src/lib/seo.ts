// Shared SEO/social constants. Kept out of src/app/layout.tsx because Next.js
// only allows a fixed set of named exports from an App Router layout file —
// anything else breaks the generated route types (surfaces as a build error
// once any special file, e.g. robots.ts/sitemap.ts, imports from it).

export const SITE_URL = "https://www.lightgreen.es";

// Used for link-preview thumbnails (WhatsApp, Messenger, Twitter/X, etc.) —
// the logo, so shared links are recognisable at a glance regardless of which
// photo is on screen.
export const OG_IMAGE = `${SITE_URL}/logo/light-green-logo.jpg`;
export const OG_IMAGE_WIDTH = 563;
export const OG_IMAGE_HEIGHT = 303;

// Used for schema.org structured data (Google rich results expect a real
// photo of the venue/food, not a logo).
export const SCHEMA_IMAGE = `${SITE_URL}/photos/entrada-real.jpg`;
