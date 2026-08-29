import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  /** ISO date string — set on article/resource pages to emit article:published_time. */
  publishedAt?: string;
  /** Author name — set on article/resource pages to emit article:author. */
  author?: string;
}

/**
 * Minimal SEO helper — no extra dependency (react-helmet etc.) needed for
 * a project this size. Sets document.title, canonical URL, and upserts
 * meta tags on mount/route change. Every page component should render
 * this once with real per-page copy.
 *
 * Canonical URL and og:url are derived automatically from the current
 * route (via useLocation) rather than requiring every caller to pass a
 * path — one less thing to get wrong or forget. Article-specific tags
 * (publishedAt/author) are optional and only emitted when provided, so
 * they don't show up incorrectly on non-article pages.
 */
export default function Seo({ title, description, image = "/og-image.png", publishedAt, author }: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    document.title = title;
    upsertMeta("description", description);
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:image", image, "property");
    upsertMeta("og:url", canonicalUrl, "property");
    upsertLink("canonical", canonicalUrl);

    if (publishedAt) {
      upsertMeta("article:published_time", publishedAt, "property");
    }
    if (author) {
      upsertMeta("article:author", author, "property");
    }
  }, [title, description, image, publishedAt, author, location.pathname]);

  return null;
}

function upsertMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}
