import React from "react";
import FeaturedTestimonials from "@/components/Home/FeaturedTestimonials";
import TransformingLives from "@/components/Home/TransformingLives";
import MissionSection from "@/components/Home/Mission";
import ImpactStats from "@/components/Home/ImpactStats";
import HeroSection from "@/components/Home/Hero";
import CommunityImpactSection from "@/components/Home/CommunityImpact";

const Home: React.FC = () => {
  return (
    // <TracingBeam>
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Hero Section */}
      {/*  */}
      <HeroSection />
      {/* Mission and Vision Section */}
      <MissionSection />

      {/* Impact Section */}
      <ImpactStats />
      <TransformingLives />
      <CommunityImpactSection />

      <FeaturedTestimonials />
    </div>
    // </TracingBeam>
  );
};

export default Home;
