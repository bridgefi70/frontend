// import React from "react";
// import Hero from "@/components/home/Hero";
// import Seo from "@/components/layout/Seo";

// export default function Home() {
//   return (
//     <>
//       <Seo description="This is the home page of BridgeFi" title="homepage" />
//       <Hero />
//     </>
//   );
// }

// const Home = () => {
//   return (
//     <div>
//       <p className="text-lime-500">Welcome to the Home page!</p>
//       <img src="/img/homeBg.png" alt="" />
//       <img src="/img/homeBg.png" alt="" />
//       <img src="/img/homeBg.png" alt="" />
//       <img src="/img/homeBg.png" alt="" />
//       Discover unforgettable events, from live shows to exclusive experiences.
//       Book securely and be part of something amazing.
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Hero from "@/components/home/Hero";
import PlatformFeatures from "@/components/home/PlatformFeatures";
import WhyThisSystem from "@/components/home/WhyThisSystem";
import CurrentEvents from "@/components/home/CurrentEvents";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import LaunchVision from "@/components/home/LaunchVision";
import CommunityVoices from "@/components/home/CommunityVoices";
import EcosystemCTA from "@/components/home/EcosystemCTA";
import FAQ from "@/components/home/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <PlatformFeatures />
      <WhyThisSystem />
      <CurrentEvents />
      <UpcomingEvents />
      <LaunchVision />
      <CommunityVoices />
      <EcosystemCTA />
      <FAQ />
    </>
  );
};

export default Home;
