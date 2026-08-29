/**
 * PLACEHOLDER CONTENT ONLY
 * ------------------------
 * Nothing in this file is real. No credentials, statistics, client names,
 * testimonials, or biography details have been invented — every entry
 * below is a structural placeholder to be replaced with real client
 * information before launch. Do not present this data as real anywhere
 * in the UI without a visual "placeholder" affordance during development.
 */

import type {
  ServiceSummary,
  Testimonial,
  ProcessStep,
  ExpertProfile,
  ResourceItem,
  BlogPostSummary,
  Service,
  ServiceCategory,
  TimelineEntry,
  ExpertiseArea,
  TrustPrinciple,
  TrustSignal,
  BlogPost,
  BlogCategory,
  Resource,
  ResourceCategory,
  SocialLink,
  ContactChannel,
  OfficeLocation,
  FaqItem,
} from "@/types/content";

export const PLACEHOLDER_SERVICES: ServiceSummary[] = [
  {
    slug: "risk-assessment",
    title: "[Service name — e.g. Security Risk Assessment]",
    shortDescription: "[Placeholder description of this service.]",
    icon: "ShieldCheck",
  },
  {
    slug: "incident-response",
    title: "[Service name — e.g. Incident Response]",
    shortDescription: "[Placeholder description of this service.]",
    icon: "AlertTriangle",
  },
  {
    slug: "privacy-consulting",
    title: "[Service name — e.g. Privacy Consulting]",
    shortDescription: "[Placeholder description of this service.]",
    icon: "Lock",
  },
];

export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    quote: "[Placeholder testimonial — replace with a real client quote.]",
    authorName: "[Client name]",
    authorRole: "[Role]",
    organization: "[Organization]",
  },
];

export const PLACEHOLDER_CREDENTIALS: string[] = [
  "[Certification placeholder — e.g. CISSP]",
  "[Certification placeholder — e.g. CISM]",
];

/**
 * Trust strip labels — descriptive words about the consultancy's approach,
 * not claims of certification or affiliation. Safe as-is, but should still
 * be reviewed against the client's real positioning before launch.
 */
export const TRUST_STRIP_ITEMS: string[] = [
  "Confidential by default",
  "Practical, jargon-free guidance",
  "Human expertise",
  "Security-focused",
];

/**
 * The four-step process shape comes directly from the project brief, so it
 * is not treated as an invented claim — but the descriptions are still
 * placeholders pending the client's actual working process.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Understand",
    description: "[Placeholder — how the initial conversation works: what you share, what we listen for.]",
  },
  {
    index: "02",
    title: "Assess",
    description: "[Placeholder — how risks and priority areas are identified.]",
  },
  {
    index: "03",
    title: "Recommend",
    description: "[Placeholder — how guidance is delivered: format, specificity, prioritization.]",
  },
  {
    index: "04",
    title: "Protect",
    description: "[Placeholder — how implementation support and follow-through works.]",
  },
];

export const PLACEHOLDER_EXPERT: ExpertProfile = {
  name: "Mr Christopher",
  role: " Founder & Principal Consultant",
  bio: "[Placeholder — a few sentences on background, philosophy, and how they approach client work. Replace with the real bio before launch.]",
  fullBio:
    "[Placeholder — the fuller author-page biography: background, path into cybersecurity, philosophy, and how they work with clients. Replace with the real long-form bio before launch.]",
  expertiseAreaSlugs: ["cybersecurity", "privacy", "risk-management"],
  education: [{ label: "[Degree/institution placeholder]" }],
  memberships: [{ label: "[Professional membership placeholder]" }],
  publications: [{ label: "[Publication title placeholder]" }],
  credentials: [
    { label: "[Certification placeholder]" },
    { label: "[Certification placeholder]" },
  ],
  socialLinks: [
    { label: "LinkedIn", url: "#" },
    { label: "Email", url: "#" },
  ],
};

export const PLACEHOLDER_RESOURCES: ResourceItem[] = [
  {
    slug: "getting-started-guide",
    title: "[Featured resource title — e.g. A Practical Guide to Personal Digital Security]",
    description: "[Placeholder description of the featured resource.]",
    type: "guide",
  },
  {
    slug: "security-checklist",
    title: "[Resource title — e.g. Security Basics Checklist]",
    description: "[Placeholder description.]",
    type: "checklist",
  },
  {
    slug: "privacy-guide",
    title: "[Resource title — e.g. Privacy Guide]",
    description: "[Placeholder description.]",
    type: "guide",
  },
];

export const PLACEHOLDER_BLOG_POSTS: BlogPostSummary[] = [
  {
    slug: "featured-article",
    title: "[Featured article title — placeholder]",
    excerpt: "[Placeholder excerpt — one or two sentences summarizing the article.]",
    category: "Security Awareness",
    publishedAt: "[Date placeholder]",
  },
  {
    slug: "second-article",
    title: "[Article title — placeholder]",
    excerpt: "[Placeholder excerpt.]",
    category: "Privacy",
    publishedAt: "[Date placeholder]",
  },
  {
    slug: "third-article",
    title: "[Article title — placeholder]",
    excerpt: "[Placeholder excerpt.]",
    category: "Guides",
    publishedAt: "[Date placeholder]",
  },
];

/**
 * Service categories — a flexible placeholder set per the brief. Do NOT
 * assume the client actually offers all of these; the architecture
 * (Services.tsx filters PLACEHOLDER_SERVICES_FULL by category.slug) makes
 * it easy to add/remove categories once real services are confirmed.
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { slug: "consulting", label: "Cybersecurity Consulting" },
  { slug: "assessment", label: "Security Assessment" },
  { slug: "privacy", label: "Privacy & Risk Management" },
];

/**
 * Full service records for the Services index + service-detail template.
 * Three services shown, matching the icon set already used in
 * PLACEHOLDER_SERVICES (homepage preview) — kept in sync manually since
 * they serve different shapes (summary vs. full detail).
 *
 * Every field is a structural placeholder. Do not treat the "process" or
 * "whoItsFor" arrays as real claims about this client's actual offering —
 * replace with confirmed information before launch.
 */
export const PLACEHOLDER_SERVICES_FULL: Service[] = [
  {
    slug: "risk-assessment",
    category: "assessment",
    title: "[Service name — e.g. Security Risk Assessment]",
    shortDescription: "[Placeholder short description of this service.]",
    fullDescription:
      "[Placeholder — a fuller explanation of what this service covers, written in plain language once the client's real offering is confirmed.]",
    icon: "ShieldCheck",
    problem:
      "[Placeholder — calm, non-alarmist explanation of the risk or gap this service addresses.]",
    howWeHelp:
      "[Placeholder — plain-language explanation of the approach and what the engagement actually involves.]",
    whoItsFor: ["Individuals", "Businesses", "Organizations"],
    process: [
      { index: "01", title: "Conversation", description: "[Placeholder — understand the situation.]" },
      { index: "02", title: "Assessment", description: "[Placeholder — understand the risks.]" },
      { index: "03", title: "Guidance", description: "[Placeholder — develop the appropriate recommendations.]" },
      { index: "04", title: "Action", description: "[Placeholder — help the client move forward.]" },
    ],
    faqs: [
      {
        question: "[Placeholder FAQ question — e.g. How long does an assessment take?]",
        answer: "[Placeholder answer.]",
      },
      {
        question: "[Placeholder FAQ question — e.g. What do I need to prepare?]",
        answer: "[Placeholder answer.]",
      },
    ],
    relatedResourceSlugs: ["getting-started-guide", "security-checklist"],
    relatedBlogSlugs: ["featured-article"],
  },
  {
    slug: "incident-response",
    category: "consulting",
    title: "[Service name — e.g. Incident Response]",
    shortDescription: "[Placeholder short description of this service.]",
    fullDescription:
      "[Placeholder — a fuller explanation of what this service covers, written in plain language once the client's real offering is confirmed.]",
    icon: "AlertTriangle",
    problem:
      "[Placeholder — calm, non-alarmist explanation of the risk or gap this service addresses.]",
    howWeHelp:
      "[Placeholder — plain-language explanation of the approach and what the engagement actually involves.]",
    whoItsFor: ["Businesses", "Organizations", "Executives"],
    process: [
      { index: "01", title: "Conversation", description: "[Placeholder — understand the situation.]" },
      { index: "02", title: "Assessment", description: "[Placeholder — understand the risks.]" },
      { index: "03", title: "Guidance", description: "[Placeholder — develop the appropriate recommendations.]" },
      { index: "04", title: "Action", description: "[Placeholder — help the client move forward.]" },
    ],
    faqs: [
      {
        question: "[Placeholder FAQ question — e.g. Do you offer emergency response?]",
        answer:
          "[Placeholder — only state emergency/24-7 availability here once the client has confirmed it; otherwise describe standard response timing.]",
      },
    ],
    relatedResourceSlugs: ["security-checklist"],
    relatedBlogSlugs: [],
  },
  {
    slug: "privacy-consulting",
    category: "privacy",
    title: "[Service name — e.g. Privacy Consulting]",
    shortDescription: "[Placeholder short description of this service.]",
    fullDescription:
      "[Placeholder — a fuller explanation of what this service covers, written in plain language once the client's real offering is confirmed.]",
    icon: "Lock",
    problem:
      "[Placeholder — calm, non-alarmist explanation of the risk or gap this service addresses.]",
    howWeHelp:
      "[Placeholder — plain-language explanation of the approach and what the engagement actually involves.]",
    whoItsFor: ["Individuals", "Professionals"],
    process: [
      { index: "01", title: "Conversation", description: "[Placeholder — understand the situation.]" },
      { index: "02", title: "Assessment", description: "[Placeholder — understand the risks.]" },
      { index: "03", title: "Guidance", description: "[Placeholder — develop the appropriate recommendations.]" },
      { index: "04", title: "Action", description: "[Placeholder — help the client move forward.]" },
    ],
    faqs: [
      {
        question: "[Placeholder FAQ question — e.g. Is this suitable for personal use, not just business?]",
        answer: "[Placeholder answer.]",
      },
    ],
    relatedResourceSlugs: ["privacy-guide"],
    relatedBlogSlugs: ["second-article"],
  },
];

/**
 * Consultation page process — distinct from PROCESS_STEPS (the homepage's
 * "how we work" summary) and from each service's own process; this one
 * describes the consultation conversation itself, per the brief's example
 * copy. Wording is still placeholder-adjacent and should be reviewed
 * against the client's real intake process.
 */
export const CONSULTATION_STEPS: ProcessStep[] = [
  { index: "01", title: "Tell us what you're dealing with", description: "[Placeholder — a short description of what to share at this stage.]" },
  { index: "02", title: "We understand your situation", description: "[Placeholder — how the consultancy listens and clarifies context.]" },
  { index: "03", title: "We discuss possible approaches", description: "[Placeholder — how options are presented, without pressure.]" },
  { index: "04", title: "You decide on the next step", description: "[Placeholder — reassurance that there's no obligation.]" },
];

/**
 * Urgent-help pathway — OFF by default. Only set to true and fill in real
 * copy once the client has explicitly confirmed they offer urgent/incident
 * response and, separately, confirmed whether it is available 24/7. Do not
 * flip this on as a default assumption.
 */
export const URGENT_HELP_ENABLED = false;
export const URGENT_HELP_COPY = {
  title: "Experiencing an active security incident?",
  body: "[Placeholder — guidance copy, only to be used once the client confirms this service and its actual availability.]",
};

/**
 * Expertise areas for the About/Author expertise section. Fully editable
 * placeholder categories per the brief — not a claim about the expert's
 * actual specializations until confirmed. Icons reuse the shared
 * SERVICE_ICONS map where possible (see src/lib/icons.ts); add entries
 * there if a new icon name is introduced here.
 */
export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    slug: "cybersecurity",
    label: "Cybersecurity",
    icon: "ShieldCheck",
    description: "[Placeholder — a short explanation of this expertise area.]",
    relatedServiceSlugs: ["risk-assessment", "incident-response"],
  },
  {
    slug: "privacy",
    label: "Privacy",
    icon: "Lock",
    description: "[Placeholder — a short explanation of this expertise area.]",
    relatedServiceSlugs: ["privacy-consulting"],
  },
  {
    slug: "risk-management",
    label: "Risk Management",
    icon: "AlertTriangle",
    description: "[Placeholder — a short explanation of this expertise area.]",
    relatedServiceSlugs: ["risk-assessment"],
  },
  {
    slug: "security-awareness",
    label: "Security Awareness",
    icon: "Eye",
    description: "[Placeholder — a short explanation of this expertise area.]",
  },
];

/**
 * Professional timeline — placeholder structure only. No real dates,
 * organizations, or achievements have been invented; replace every entry
 * with confirmed history before launch.
 */
export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: "[Year]",
    organization: "[Organization placeholder]",
    role: "[Role placeholder]",
    description: "[Placeholder — a sentence or two on what this role involved.]",
  },
  {
    year: "[Year]",
    organization: "[Organization placeholder]",
    role: "[Role placeholder]",
    description: "[Placeholder — a sentence or two on what this role involved.]",
    achievement: "[Optional achievement placeholder]",
  },
  {
    year: "[Year]",
    organization: "[Organization placeholder]",
    role: "[Role placeholder]",
    description: "[Placeholder — a sentence or two on what this role involved.]",
  },
];

/**
 * Trust philosophy principles — creative placeholder framing per the
 * brief. The client should replace these with their actual principles;
 * treat the wording as a starting direction, not a confirmed position.
 */
export const TRUST_PRINCIPLES: TrustPrinciple[] = [
  {
    icon: "Eye",
    title: "Clarity",
    description: "Security shouldn't feel impossible to understand.",
  },
  {
    icon: "ShieldCheck",
    title: "Practicality",
    description: "Advice should lead to meaningful action.",
  },
  {
    icon: "Lock",
    title: "Privacy",
    description: "Personal and organizational information deserves care.",
  },
  {
    icon: "AlertTriangle",
    title: "Continuous Learning",
    description: "Security evolves, so knowledge must evolve.",
  },
];

/**
 * Trust signals — architecture only. This array is intentionally EMPTY.
 * Only add entries here once the client has confirmed a real
 * certification, publication, speaking engagement, membership, media
 * appearance, or partner relationship. Never populate with invented
 * credibility markers — the TrustSignals component renders nothing (not a
 * placeholder grid) when this list is empty, which is the correct default
 * state until real information exists.
 */
export const TRUST_SIGNALS: TrustSignal[] = [];

/**
 * Blog categories — placeholder set per the brief, fully editable.
 */
export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "cybersecurity", label: "Cybersecurity" },
  { slug: "privacy", label: "Privacy" },
  { slug: "digital-safety", label: "Digital Safety" },
  { slug: "security-awareness", label: "Security Awareness" },
  { slug: "guides", label: "Guides" },
];

/**
 * Full blog articles. `sections` bodies are short placeholder paragraphs —
 * long enough to demonstrate the reading experience (progress bar, table
 * of contents) without pretending to be real published research. No
 * article content, statistics, or claims here are real.
 */
export const PLACEHOLDER_BLOG_POSTS_FULL: BlogPost[] = [
  {
    slug: "featured-article",
    title: "[Featured article title — placeholder]",
    excerpt: "[Placeholder excerpt — one or two sentences summarizing the article.]",
    category: "security-awareness",
    tags: ["[tag placeholder]", "[tag placeholder]"],
    authorName: PLACEHOLDER_EXPERT.name,
    publishedAt: "[Date placeholder]",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "[Placeholder section heading — e.g. Why this matters]",
        body: "[Placeholder paragraph text. Replace with the real article body once the client provides content. Kept short here — this is a structural placeholder, not real published writing.]",
      },
      {
        heading: "[Placeholder section heading — e.g. What to do about it]",
        body: "[Placeholder paragraph text for the second section of the article.]",
      },
      {
        heading: "[Placeholder section heading — e.g. Key takeaways]",
        body: "[Placeholder paragraph text for the closing section of the article.]",
      },
    ],
    relatedResourceSlugs: ["getting-started-guide"],
    relatedBlogSlugs: ["second-article", "third-article"],
  },
  {
    slug: "second-article",
    title: "[Article title — placeholder]",
    excerpt: "[Placeholder excerpt.]",
    category: "privacy",
    tags: ["[tag placeholder]"],
    authorName: PLACEHOLDER_EXPERT.name,
    publishedAt: "[Date placeholder]",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "[Placeholder section heading]",
        body: "[Placeholder paragraph text.]",
      },
      {
        heading: "[Placeholder section heading]",
        body: "[Placeholder paragraph text.]",
      },
    ],
    relatedResourceSlugs: ["privacy-guide"],
    relatedBlogSlugs: ["featured-article"],
  },
  {
    slug: "third-article",
    title: "[Article title — placeholder]",
    excerpt: "[Placeholder excerpt.]",
    category: "guides",
    tags: ["[tag placeholder]"],
    authorName: PLACEHOLDER_EXPERT.name,
    publishedAt: "[Date placeholder]",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "[Placeholder section heading]",
        body: "[Placeholder paragraph text.]",
      },
      {
        heading: "[Placeholder section heading]",
        body: "[Placeholder paragraph text.]",
      },
    ],
    relatedResourceSlugs: ["security-checklist"],
    relatedBlogSlugs: ["featured-article", "second-article"],
  },
];

/**
 * Resource categories — placeholder set per the brief, fully editable.
 */
export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  { slug: "guides", label: "Cybersecurity Guides" },
  { slug: "privacy", label: "Privacy" },
  { slug: "checklists", label: "Checklists" },
  { slug: "reports", label: "Reports" },
  { slug: "educational", label: "Educational Materials" },
];

/**
 * Full resource records. `fileUrl` is deliberately left undefined for
 * every entry — no downloadable file has been supplied by the client yet.
 * The resource-detail page and DownloadButton must render an honest
 * "not yet available" state rather than simulate a real download.
 */
export const PLACEHOLDER_RESOURCES_FULL: Resource[] = [
  {
    slug: "getting-started-guide",
    title: "[Featured resource title — e.g. A Practical Guide to Personal Digital Security]",
    description: "[Placeholder description of the featured resource.]",
    fullDescription:
      "[Placeholder — a fuller description of what this guide covers and who it's for, to be replaced with real content.]",
    type: "guide",
    category: "guides",
    authorName: PLACEHOLDER_EXPERT.name,
    publishedAt: "[Date placeholder]",
    readingTimeMinutes: 8,
    relatedResourceSlugs: ["security-checklist", "privacy-guide"],
    relatedBlogSlugs: ["featured-article"],
  },
  {
    slug: "security-checklist",
    title: "[Resource title — e.g. Security Basics Checklist]",
    description: "[Placeholder description.]",
    fullDescription: "[Placeholder — a fuller description of this checklist's contents.]",
    type: "checklist",
    category: "checklists",
    authorName: PLACEHOLDER_EXPERT.name,
    publishedAt: "[Date placeholder]",
    readingTimeMinutes: 3,
    relatedResourceSlugs: ["getting-started-guide"],
    relatedBlogSlugs: ["third-article"],
  },
  {
    slug: "privacy-guide",
    title: "[Resource title — e.g. Privacy Guide]",
    description: "[Placeholder description.]",
    fullDescription: "[Placeholder — a fuller description of this guide's contents.]",
    type: "guide",
    category: "privacy",
    authorName: PLACEHOLDER_EXPERT.name,
    publishedAt: "[Date placeholder]",
    readingTimeMinutes: 6,
    relatedResourceSlugs: ["getting-started-guide"],
    relatedBlogSlugs: ["second-article"],
  },
];

/**
 * Contact channels — EMPTY by default. Per the brief, "do not use generic
 * placeholder contact information in production" and "only display
 * contact methods that the client actually provides." Add real entries
 * here (type "email" | "phone" | "location") once the client confirms
 * which channels they want displayed publicly. The Contact page renders
 * only the channels present in this array — an empty array is the
 * correct, honest default, not a bug to "fix" with fake data.
 */
export const CONTACT_CHANNELS: ContactChannel[] = [];

/**
 * Social links — EMPTY by default, same reasoning as CONTACT_CHANNELS.
 * Add only platforms the client actually maintains and wants linked.
 */export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://linkedin.com",
  },
  {
    platform: "twitter",
    url: "https://x.com",
  },
  {
    platform: "youtube",
    url: "https://youtube.com",
  },
  {
    platform: "instagram",
    url: "https://instagram.com",
  },
  {
    platform: "facebook",
    url: "https://facebook.com",
  },
  {
    platform: "github",
    url: "https://github.com",
  },
];
/**
 * Office location — undefined by default. Per the brief: "do not expose a
 * location unless the client wants it publicly displayed." Set this to a
 * real OfficeLocation object only once the client has explicitly
 * confirmed they want their address shown.
 */
export const OFFICE_LOCATION: OfficeLocation | undefined = undefined;

/**
 * Contact/consultation FAQ — placeholder questions per the brief,
 * reusing the existing AccordionFaq component and FaqItem type.
 */
export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How do I book a consultation?",
    answer:
      "[Placeholder — explain the booking flow: the consultation page form, what happens after submitting, and expected response approach once confirmed by the client.]",
  },
  {
    question: "What should I prepare before contacting you?",
    answer:
      "[Placeholder — guidance on what's helpful to have ready, described in general, non-sensitive terms.]",
  },
  {
    question: "Can individuals receive cybersecurity guidance?",
    answer: "[Placeholder — confirm scope of who the consultancy works with.]",
  },
  {
    question: "Can businesses request consulting?",
    answer: "[Placeholder — confirm scope of who the consultancy works with.]",
  },
  {
    question: "What information should I avoid sending through the contact form?",
    answer:
      "Please don't send passwords, private keys, authentication codes, or other sensitive credentials through this form or by email. Describe your situation in general terms — anything sensitive can be handled through a secure channel if needed.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "[Placeholder — brief summary pointing to the Consultation page's four-step process for full detail.]",
  },
];

/**
 * Contact reasons for the form's "reason for contacting" field — distinct
 * from the Consultation form's "area of concern" options, since Contact
 * covers a broader range of inquiries (partnerships, press, general
 * questions) beyond security consulting itself.
 */
export const CONTACT_REASONS: string[] = [
  "Cybersecurity question",
  "Consulting inquiry",
  "Services question",
  "Partnership inquiry",
  "General inquiry",
  "Something else",
];
