// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import Button from "../ui/Button";

// const navLinks = [
//   { label: "Home", to: "/" },
//   { label: "Events", to: "/events" },
//   { label: "About", to: "/about" },
//   { label: "Blog", to: "/blog" },
// ];

// const desktopContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.15,
//     },
//   },
// };

// const desktopItem = {
//   hidden: {
//     opacity: 0,
//     y: -12,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const mobileContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.07,
//       delayChildren: 0.12,
//     },
//   },
// };

// const mobileItem = {
//   hidden: {
//     opacity: 0,
//     x: 25,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.4,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
//   exit: {
//     opacity: 0,
//     x: 20,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="relative z-50 flex items-center justify-between gap-3 px-5 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-30"
//     >
//       {/* =========================
//           LOGO
//       ========================== */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{
//           duration: 0.6,
//           delay: 0.1,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         <Link to="/" onClick={closeMenu}>
//           <motion.img
//             src="/img/logo.png"
//             alt="BridgeFi"
//             className=" w-24 lg:w-42"
//             whileHover={{
//               scale: 1.04,
//             }}
//             whileTap={{
//               scale: 0.96,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 20,
//             }}
//           />
//         </Link>
//       </motion.div>

//       {/* =========================
//           DESKTOP NAVIGATION
//       ========================== */}
//       <motion.div
//         variants={desktopContainer}
//         initial="hidden"
//         animate="visible"
//         className="hidden items-center gap-7 md:flex"
//       >
//         {navLinks.map((link) => {
//           const isActive = location.pathname === link.to;

//           return (
//             <motion.div key={link.to} variants={desktopItem}>
//               <Link
//                 to={link.to}
//                 className="group relative block py-2 text-sm font-medium text-white/90 transition-colors duration-300 hover:text-white"
//               >
//                 <span>{link.label}</span>

//                 {/* Animated underline */}
//                 <motion.span
//                   className="absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-white"
//                   initial={false}
//                   animate={{
//                     width: isActive ? "100%" : "0%",
//                   }}
//                   whileHover={{
//                     width: "100%",
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                 />
//               </Link>
//             </motion.div>
//           );
//         })}
//       </motion.div>

//       {/* =========================
//           DESKTOP CTA BUTTONS
//       ========================== */}
//       <motion.div
//         variants={desktopContainer}
//         initial="hidden"
//         animate="visible"
//         className="hidden items-center gap-3 md:flex"
//       >
//         <motion.div
//           variants={desktopItem}
//           whileHover={{
//             y: -2,
//             scale: 1.02,
//           }}
//           whileTap={{
//             scale: 0.97,
//           }}
//         >
//           <Link to="/create-events">
//             <Button
//               text="Create Events"
//               width="145px"
//               height="44px"
//               radius="999px"
//               gradient
//             />
//           </Link>
//         </motion.div>

//         <motion.div
//           variants={desktopItem}
//           whileHover={{
//             y: -2,
//             scale: 1.02,
//           }}
//           whileTap={{
//             scale: 0.97,
//           }}
//         >
//           <Link to="/events">
//             <Button
//               text="Explore Events"
//               width="145px"
//               height="44px"
//               radius="999px"
//               outline
//             />
//           </Link>
//         </motion.div>
//       </motion.div>

//       {/* =========================
//           MOBILE MENU BUTTON
//       ========================== */}
//       <motion.button
//         type="button"
//         aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
//         aria-expanded={menuOpen}
//         onClick={() => setMenuOpen((prev) => !prev)}
//         className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md md:hidden"
//         whileHover={{
//           scale: 1.05,
//           backgroundColor: "rgba(255,255,255,0.16)",
//         }}
//         whileTap={{
//           scale: 0.9,
//         }}
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {menuOpen ? (
//             <motion.div
//               key="close"
//               initial={{
//                 opacity: 0,
//                 rotate: -90,
//                 scale: 0.5,
//               }}
//               animate={{
//                 opacity: 1,
//                 rotate: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 rotate: 90,
//                 scale: 0.5,
//               }}
//               transition={{
//                 duration: 0.25,
//                 ease: "easeOut",
//               }}
//             >
//               <X size={21} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="menu"
//               initial={{
//                 opacity: 0,
//                 rotate: 90,
//                 scale: 0.5,
//               }}
//               animate={{
//                 opacity: 1,
//                 rotate: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 rotate: -90,
//                 scale: 0.5,
//               }}
//               transition={{
//                 duration: 0.25,
//                 ease: "easeOut",
//               }}
//             >
//               <Menu size={21} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>

//       {/* =========================
//           MOBILE MENU
//       ========================== */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               height: 0,
//               y: -10,
//             }}
//             animate={{
//               opacity: 1,
//               height: "auto",
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               height: 0,
//               y: -10,
//             }}
//             transition={{
//               duration: 0.35,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="absolute left-4 right-4 top-full overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-4 shadow-2xl backdrop-blur-xl md:hidden"
//           >
//             <motion.div
//               variants={mobileContainer}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="flex flex-col"
//             >
//               {/* Navigation links */}
//               <div className="flex flex-col">
//                 {navLinks.map((link) => {
//                   const isActive = location.pathname === link.to;

//                   return (
//                     <motion.div key={link.to} variants={mobileItem}>
//                       <Link
//                         to={link.to}
//                         onClick={closeMenu}
//                         className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
//                           isActive
//                             ? "bg-white/10 text-white"
//                             : "text-white/80 hover:bg-white/10 hover:text-white"
//                         }`}
//                       >
//                         <span>{link.label}</span>

//                         <motion.span
//                           animate={{
//                             x: isActive ? 0 : -5,
//                             opacity: isActive ? 1 : 0.4,
//                           }}
//                           transition={{
//                             duration: 0.2,
//                           }}
//                         >
//                           →
//                         </motion.span>
//                       </Link>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* Divider */}
//               <motion.div
//                 variants={mobileItem}
//                 className="my-3 h-px bg-white/10"
//               />

//               {/* Mobile CTAs */}
//               {/* Mobile CTAs */}
//               <motion.div variants={mobileItem} className="flex flex-col gap-3">
//                 <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
//                   <Link
//                     to="/create-events"
//                     onClick={closeMenu}
//                     className="block w-full"
//                   >
//                     <Button
//                       text="Create Events"
//                       width="100%"
//                       height="48px"
//                       radius="999px"
//                       gradient
//                       className="w-full"
//                     />
//                   </Link>
//                 </motion.div>

//                 <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
//                   <Link
//                     to="/events"
//                     onClick={closeMenu}
//                     className="block w-full"
//                   >
//                     <Button
//                       text="Explore Events"
//                       width="100%"
//                       height="48px"
//                       radius="999px"
//                       outline
//                       className="w-full"
//                     />
//                   </Link>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "@/components/ui/SocialLinks";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const SOCIAL_LINKS = [
  {
    platform: "linkedin",
    url: "#",
  },
  {
    platform: "twitter",
    url: "#",
  },
  {
    platform: "instagram",
    url: "#",
  },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`font-display sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#050014]/95 backdrop-blur-md" : "bg-[#050014]"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link to="/" aria-label="BridgeFi home">
          <img
            src="/img/logo.png"
            alt="BridgeFi"
            className="w-[105px] object-contain"
          />
        </Link>

        {/* Desktop Navigation - MIDDLE */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[#AE5BFD]"
                    : "text-white hover:text-[#AE5BFD]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Buttons - RIGHT */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/create-events"
            className="flex h-10 items-center justify-center rounded-full border border-[#AE5BFD] px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#AE5BFD]/10"
          >
            Create Events
          </Link>

          <Link
            to="/events"
            className="flex h-10 items-center justify-center rounded-full bg-[#6630C2] px-5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
          >
            Explore Events
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {/* Top dash */}
          <motion.span
            className="absolute h-[2px] w-6 bg-white"
            animate={
              mobileOpen
                ? {
                    rotate: 45,
                    y: 0,
                  }
                : {
                    rotate: 0,
                    y: -7,
                  }
            }
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* Middle dash */}
          <motion.span
            className="absolute h-[2px] w-6 bg-white"
            animate={
              mobileOpen
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.2,
            }}
          />

          {/* Bottom dash */}
          <motion.span
            className="absolute h-[2px] w-6 bg-white"
            animate={
              mobileOpen
                ? {
                    rotate: -45,
                    y: 0,
                  }
                : {
                    rotate: 0,
                    y: 7,
                  }
            }
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden bg-[#050014] md:hidden"
          >
            <nav className="flex flex-col px-6 pb-6 pt-2">
              {NAV_LINKS.map((link, index) => {
                const isActive =
                  link.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-[#AE5BFD]"
                          : "text-white hover:text-[#AE5BFD]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile socials */}
              <div className="mt-5 flex flex-col items-start gap-2">
                <span className="text-xs font-semibold text-white">
                  FOLLOW US
                </span>

                <SocialLinks links={SOCIAL_LINKS} className="gap-3" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
