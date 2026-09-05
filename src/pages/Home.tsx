
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
import Seo from "@/components/layout/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="BridgeFi | Event Hosting & Management Platform"
        description="BridgeFi is an event hosting and management platform that helps organizers create events, manage registrations and attendees, communicate with participants, and run events in one place."
      />

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
