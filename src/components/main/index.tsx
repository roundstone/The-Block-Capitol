import React from "react";
import BlockchainCourses from "./block-chain-courses";
import BuildingTheFuture from "./building-the-future";
import FAQ from "./faq";
import Footer from "./footer";
import HeroSection from "./hero";
import JoinNetwork from "./join-network";
import WhoWeAre from "./who-we-are";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WhoWeAre />
      <BlockchainCourses />
      <BuildingTheFuture />
      <JoinNetwork />
      <FAQ />
      <Footer />
    </main>
  );
}
