// import { ArrowRight } from "lucide-react";

// const popularSearches = [
//   "Concerts",
//   "Tech Events",
//   "Sports",
//   "Comedy",
//   "Festivals",
// ];

// export default function Hero() {
//   return (
//     <section className="font-display relative overflow-hidden #050216 px-perimeter pt-20 pb-32">
//       <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
//         {/* Left: text content */}
//         <div>
//           <p className=" text-sm font-normal text-[#06B6D4]">
//             Your next experience is waiting
//           </p>

//           <h1 className="mt-4 text-5xl md:text-6xl font-semibold text-ink-light">
//             Moments
//             <br />
//             <span className="bg-gradient-to-r from-[#8900FF] to-[#FF00DD] bg-clip-text text-transparent">
//               Worth Experiencing.
//             </span>
//           </h1>

//           <p className="mt-6 max-w-lg text-mist-200">
//             Discover unforgettable events, from live shows to exclusive
//             experiences. Book securely and be part of something amazing.
//           </p>

//           {/* Search bar */}
//           <div className="mt-8 flex items-center rounded-full border border-navy-700 bg-navy-900 pl-5 pr-2 py-2">
//             <input
//               type="text"
//               placeholder="Search events, artists, venues...."
//               className="flex-1 bg-transparent text-ink-light placeholder:text-mist-200 focus:outline-none"
//             />
//             <button
//               aria-label="Search"
//               className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#8900FF] to-[#FF00DD]"
//             >
//               <ArrowRight className="h-5 w-5 text-white" />
//             </button>
//           </div>

//           {/* Popular search pills */}
//           <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
//             <span className="text-mist-200">Popular Searches:</span>
//             {popularSearches.map((tag) => (
//               <button
//                 key={tag}
//                 className="rounded-full border border-navy-700 px-3 py-1 text-mist-200 hover:border-signal-400 hover:text-ink-light transition-colors"
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>

//           {/* CTA buttons */}
//           <div className="mt-8 flex gap-4">
//             <button className="rounded-full bg-gradient-to-r from-[#8900FF] to-[#FF00DD] px-6 py-3 font-medium text-white hover:opacity-90 transition-opacity">
//               Explore Events
//             </button>
//             <button className="rounded-full border border-[#FF00DD] px-6 py-3 font-medium text-[#FF00DD] hover:bg-[#FF00DD]/10 transition-colors">
//               Create Events
//             </button>
//           </div>
//         </div>

//         {/* Right: tilted hero image with overlay card */}
//         <div className="relative flex justify-center md:justify-end">
//           <img
//             src="/img/homeBg.png"
//             alt="Crowd at a live event"
//             className="w-full max-w-md rounded-2xl shadow-2xl"
//             style={{ transform: "rotate(6deg)" }}
//           />

//           <div
//             className="absolute bottom-6 left-1/2 w-64 -translate-x-1/2 rounded-xl bg-navy-900/90 backdrop-blur-sm p-4 text-ink-light shadow-lg"
//             style={{ transform: "translateX(-50%) rotate(6deg)" }}
//           >
//             <p className="font-semibold">Summer Beats Festival</p>
//             <p className="mt-1 text-sm text-mist-200">
//               📍 Central Park, New York
//             </p>
//             <p className="text-sm text-mist-200">📅 Aug 24 • 6:00 PM</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Search, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const SEARCHES = [
  "Popular Searches",
  "Concerts",
  "Tech Events",
  "Sports",
  "Comedy",
  "Festivals",
];

const Hero = () => {
  return (
    <section className="font-display relative min-h-screen overflow-hidden bg-[#050216] px-6 pb-16 pt-20 md:px-10 lg:px-16 lg:pt-24">
      <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-[1440px] flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* LEFT SIDE */}
        <div className="flex w-full max-w-[700px] flex-col gap-5 lg:w-[54%]">
          <p className="text-sm font-medium text-[#06B6D4] md:text-base">
            Your next experience is waiting
          </p>

          <h1 className="text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[64px] xl:text-[72px]">
            Moments
            <br />
            <span className="text-[#AE5BFD]">Worth Experiencing.</span>
          </h1>

          <p className="max-w-[680px] text-sm leading-6 text-[#858196] md:text-base">
            Discover unforgettable events, from live shows to exclusive
            experiences. Book securely and be part of something amazing.
          </p>

          {/* SEARCH */}
          <div className="mt-2 flex h-[70px] w-full items-center rounded-full border border-[#706B7D] bg-transparent p-1.5">
            <Search className="ml-5 h-6 w-6 shrink-0 text-[#858196]" />

            <input
              type="text"
              placeholder="Search events, artists, venues....."
              className="min-w-0 flex-1 bg-transparent px-4 text-base text-white outline-none placeholder:text-[#858196]"
            />

            <button
              type="button"
              className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#6630C2] text-white transition-transform hover:scale-105"
              aria-label="Search"
            >
              <ArrowRight className="h-7 w-7" />
            </button>
          </div>

          {/* SEARCH CHIPS */}
          <div className="flex flex-wrap gap-2">
            {SEARCHES.map((search) => (
              <button
                key={search}
                type="button"
                className="rounded-full border border-[#29243A] px-4 py-2 text-xs text-[#858196] transition-colors hover:border-[#AE5BFD] hover:text-white"
              >
                {search}
              </button>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-3 flex gap-4 sm:flex-row">
            <Button
              text="Explore Events"
              gradient
              width="254px"
              radius="8px"
              className="h-14"
            />

            <Button
              text="Create Events"
              outline
              textColor="#AE5BFD"
              width="274px"
              radius="8px"
              className="h-14"
            />
          </div>
        </div>

        {/* RIGHT SIDE / HERO IMAGE */}
        <div className="flex w-full items-center justify-center lg:w-[46%] lg:justify-end">
          <img
            src="/img/homeBg.png"
            alt="Featured event"
            className="w-full max-w-[680px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
