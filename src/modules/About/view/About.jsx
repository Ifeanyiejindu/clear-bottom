import React from "react";
import AboutHero from "../components/Hero";
import PhotoSection from "../components/PhotoSection";
import AboutInfo from "../components/AboutInfo";
import CTASection from "../components/CTASection";

const About = () => {
  return (
    <div>
      <AboutHero />

      <AboutInfo />
      <CTASection />
    </div>
  );
};

export default About;
