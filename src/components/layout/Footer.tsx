import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";
import { SOCIAL_LINKS } from "../../data/placeholders";

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Expert profile", href: "/about/expert" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All services", href: "/services" },
      { label: "Consultation", href: "/consultation" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/60 bg-navy-950">
      <div className="mx-auto max-w-7xl px-perimeter py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-signal-400" strokeWidth={1.75} />
              <span className="font-display text-base font-semibold text-ink-light">
                [Consultancy Name]
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-mist-300">
              [Placeholder — one-line positioning statement, to be finalized
              with the client.]
            </p>
            <SocialLinks links={SOCIAL_LINKS} className="mt-5" />
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-mist-300 transition-colors hover:text-ink-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-navy-700/60 pt-8 text-xs text-mist-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} [Consultancy Name]. All rights reserved.</p>
          <p>
            Placeholder — certifications, registration numbers, cookie
            notice, etc. as provided.
          </p>
        </div>
      </div>
    </footer>
  );
}
