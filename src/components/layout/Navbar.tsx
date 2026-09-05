// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Button from "@/components/ui/Button";

// const NAV_LINKS = [
//   { label: "Home", href: "#" },
//   { label: "Events", href: "/events" },
//   { label: "About", href: "/about" },
//   { label: "Blog", href: "/blog" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const reduceMotion = useReducedMotion();
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`font-display sticky top-0 z-50 transition-colors duration-500 ease-precise ${
//         scrolled
//           ? "bg-navy-900/85 backdrop-blur-md border-b border-navy-700/60"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-perimeter py-5">
//         <Link
//           to="/"
//           className="flex items-center gap-2 group"
//           aria-label="Home"
//         >
//           {/* <ShieldCheck className="h-5 w-5 text-signal-400 transition-transform duration-300 ease-precise group-hover:scale-110" strokeWidth={1.75} /> */}
//           <img src="/img/logo.png" alt="" className="w-auto h-12" />
//         </Link>

//         <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
//           {NAV_LINKS.map((link) => {
//             const isActive =
//               link.href === "/"
//                 ? location.pathname === "/"
//                 : location.pathname.startsWith(link.href);
//             return (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 aria-current={isActive ? "page" : undefined}
//                 className={`relative py-1 text-sm transition-all duration-300 ease-precise ${
//                   isActive
//                     ? "text-ink-light"
//                     : "text-mist-200 hover:text-bloom-400 hover:-translate-y-0.5"
//                 }`}
//               >
//                 {link.label}
//                 {isActive && (
//                   <motion.span
//                     layoutId="nav-active-indicator"
//                     className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-signal-400 to-bloom-400"
//                     transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                   />
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="hidden md:block">
//           <Button to="/consultation" size="sm">
//             Book a consultation
//           </Button>
//         </div>

//         <button
//           className="flex h-10 w-10 items-center justify-center text-ink-light md:hidden"
//           onClick={() => setMobileOpen((v) => !v)}
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//         >
//           {mobileOpen ? (
//             <X className="h-6 w-6" />
//           ) : (
//             <Menu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.nav
//             initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
//             animate={
//               reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }
//             }
//             exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
//             transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
//             className="md:hidden overflow-hidden border-t border-navy-700/60 bg-navy-900"
//             aria-label="Mobile"
//           >
//             <div className="flex flex-col gap-1 px-perimeter py-4">
//               {NAV_LINKS.map((link) => {
//                 const isActive =
//                   link.href === "/"
//                     ? location.pathname === "/"
//                     : location.pathname.startsWith(link.href);
//                 return (
//                   <Link
//                     key={link.href}
//                     to={link.href}
//                     aria-current={isActive ? "page" : undefined}
//                     className={`py-3 text-sm ${isActive ? "text-ink-light" : "text-mist-200 hover:text-bloom-500 hover:-translate-y-0.5"}`}
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}
//               <div className="pt-2">
//                 <Button
//                   to="/consultation"
//                   size="sm"
//                   className="w-full justify-center"
//                 >
//                   Book a consultation
//                 </Button>
//               </div>
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-30 py-8.25 flex justify-between items-center gap-3">
      <Link to="/">
        <img src="/img/logo.png" alt="BridgeFi" className="" />
      </Link>
      <div className="hidden md:flex  text-white gap-4">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="hidden md:flex text-[#ffffff] gap-4">
        <Link to="/create-events">
          <Button text="Create Events" />
        </Link>

        <Link to="/events">
          <Button text="Explore Events" />
        </Link>
      </div>
      {/* Hamburger Icon */}
      <div className="flex md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden text-[#FFFFFF]"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-white hover:text-bloom-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-white hover:text-bloom-500"
                onClick={() => setMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-bloom-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-bloom-500"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>{" "}
    </nav>
  );
};

export default Navbar;
