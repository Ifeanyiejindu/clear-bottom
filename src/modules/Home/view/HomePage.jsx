import React from "react";
import Hero from "../components/Hero";
import About1 from "../components/About1";
import About2 from "../components/About2";
import Packages from "../components/Packages";
import Gallery from "../components/Gallery";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About1 />
      <About2 />
      <Packages />
      <Gallery />
      <HowWeWork />
      <Testimonials />
    </div>
  );
};

export default HomePage;
