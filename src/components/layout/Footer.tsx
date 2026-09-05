// import { Link } from "react-router-dom";
// import { ShieldCheck } from "lucide-react";
// import SocialLinks from "../ui/SocialLinks";
// import { SOCIAL_LINKS } from "../../data/placeholders";

// const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
//   {
//     title: "Company",
//     links: [
//       { label: "About", href: "/about" },
//       { label: "Expert profile", href: "/about/expert" },
//       { label: "Contact", href: "/contact" },
//     ],
//   },
//   {
//     title: "Services",
//     links: [
//       { label: "All services", href: "/services" },
//       { label: "Consultation", href: "/consultation" },
//     ],
//   },
//   {
//     title: "Learn",
//     links: [
//       { label: "Blog", href: "/blog" },
//       { label: "Resources", href: "/resources" },
//     ],
//   },
//   {
//     title: "Legal",
//     links: [
//       { label: "Privacy policy", href: "/privacy" },
//       { label: "Terms", href: "/legal/terms" },
//     ],
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="border-t border-navy-700/60 bg-navy-950">
//       <div className="mx-auto max-w-7xl px-perimeter py-16">
//         <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
//           <div className="col-span-2 md:col-span-2">
//             <Link to="/" className="flex items-center gap-2">
//               <ShieldCheck className="h-5 w-5 text-signal-400" strokeWidth={1.75} />
//               <span className="font-display text-base font-semibold text-ink-light">
//                 [Consultancy Name]
//               </span>
//             </Link>
//             <p className="mt-4 max-w-xs text-sm text-mist-300">
//               [Placeholder — one-line positioning statement, to be finalized
//               with the client.]
//             </p>
//             <SocialLinks links={SOCIAL_LINKS} className="mt-5" />
//           </div>

//           {FOOTER_COLUMNS.map((col) => (
//             <div key={col.title}>
//               <h3 className="eyebrow mb-4">{col.title}</h3>
//               <ul className="space-y-3">
//                 {col.links.map((link) => (
//                   <li key={link.href}>
//                     <Link
//                       to={link.href}
//                       className="text-sm text-mist-300 transition-colors hover:text-ink-light"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-navy-700/60 pt-8 text-xs text-mist-400 md:flex-row md:items-center">
//           <p>© {new Date().getFullYear()} [Consultancy Name]. All rights reserved.</p>
//           <p>
//             Placeholder — certifications, registration numbers, cookie
//             notice, etc. as provided.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import SocialLinks from "../ui/SocialLinks";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  Platform: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Help Center", href: "/help" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050014] px-6 pb-8 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img src="/img/logo.png" alt="BridgeFi" className="w-10" />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#858196]">
              Discover unforgettable events, connect with communities, and
              create experiences worth remembering.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {["Instagram", "Twitter", "LinkedIn", "Facebook"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-medium text-[#858196] transition-colors duration-300 hover:border-[#AE5BFD] hover:text-white"
                  >
                    {social[0]}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-white">Platform</h3>

            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.Platform.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#858196] transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>

            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.Support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#858196] transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#858196] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BridgeFi. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>

            <ArrowUpRight className="h-4 w-4 text-[#AE5BFD]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
