/**
 * Shared content types. These define the SHAPE of future real content —
 * they intentionally do not ship with invented data. Placeholder arrays
 * live in src/data/placeholders.ts and are clearly marked as such.
 */

export interface ServiceSummary {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string; // lucide-react icon name
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  organization?: string;
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  thumbnail?: string;
}

export interface BlogCategory {
  slug: string;
  label: string;
}

export interface ContentSection {
  heading: string;
  body: string; // plain paragraph text; render as-is, no HTML injection
}

/**
 * Full blog article shape — used by the Blog index and article template.
 * `BlogPostSummary` remains the lighter shape for homepage/related-content
 * previews.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string; // BlogCategory.slug
  tags: string[];
  authorName: string; // matches ExpertProfile.name for linking to /about/expert
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  coverImageUrl?: string;
  sections: ContentSection[]; // article body, broken into headed sections for the table of contents
  relatedResourceSlugs: string[];
  relatedBlogSlugs: string[];
}

export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  type: "guide" | "checklist" | "report" | "pdf";
}

export interface ResourceCategory {
  slug: string;
  label: string;
}

/**
 * Full resource shape — used by the Resources index and resource-detail
 * template. `ResourceItem` remains the lighter shape for homepage/
 * related-content previews.
 *
 * `fileUrl` is intentionally optional and undefined in all placeholder
 * data — the detail page and download button must render an honest
 * "not yet available" state rather than pretend a file exists.
 */
export interface Resource {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  type: "guide" | "checklist" | "report" | "pdf" | "article" | "video" | "external";
  category: string; // ResourceCategory.slug
  authorName: string;
  publishedAt: string;
  readingTimeMinutes?: number;
  coverImageUrl?: string;
  fileUrl?: string; // undefined = not yet supplied by the client
  externalUrl?: string; // for type "external"
  relatedResourceSlugs: string[];
  relatedBlogSlugs: string[];
}

export interface Credential {
  label: string;
  issuer?: string;
  year?: string;
}

export interface TimelineEntry {
  year: string;
  organization: string;
  role: string;
  description: string;
  achievement?: string;
  imageUrl?: string;
}

export interface ExpertiseArea {
  slug: string;
  label: string;
  icon: string; // lucide-react icon name
  description: string;
  relatedServiceSlugs?: string[];
  relatedBlogSlugs?: string[];
}

export interface TrustPrinciple {
  icon: string;
  title: string;
  description: string;
}

export interface TrustSignal {
  type: "certification" | "publication" | "speaking" | "membership" | "media" | "partner";
  label: string;
  detail?: string;
}

export interface ExpertProfile {
  name: string;
  role: string;
  /** Short bio — used in compact contexts (homepage preview). */
  bio: string;
  /** Longer-form bio — used on the full author profile page. Optional so existing shorter usages remain valid. */
  fullBio?: string;
  photoUrl?: string;
  expertiseAreaSlugs?: string[];
  education?: Credential[];
  memberships?: Credential[];
  publications?: Credential[];
  credentials: Credential[];
  socialLinks: { label: string; url: string }[];
}

export interface ProcessStep {
  index: string; // "01", "02" etc — display only
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: "linkedin" | "twitter" | "youtube" | "instagram" | "facebook" | "github";
  url: string;
}

export interface ContactChannel {
  type: "email" | "phone" | "location";
  label: string;
  value: string;
  href?: string; // mailto:/tel: link; omitted for location
}

export interface OfficeLocation {
  address: string;
  hours?: string;
  latitude?: number;
  longitude?: number;
}

export interface ServiceCategory {
  slug: string;
  label: string;
}

/**
 * Full service-detail shape — used by the Services index and the
 * service-detail page template. `ServiceSummary` (above) remains the
 * lighter shape used for homepage previews; this is the data-driven
 * structure for /services and /services/:slug.
 */
export interface Service {
  slug: string;
  category: string; // ServiceCategory.slug
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // lucide-react icon name
  problem: string;
  howWeHelp: string;
  whoItsFor: string[];
  process: ProcessStep[];
  faqs: FaqItem[];
  relatedResourceSlugs: string[];
  relatedBlogSlugs: string[];
}
