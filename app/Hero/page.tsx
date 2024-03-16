// import { Nav } from "@/components/Shared/NavDynamic";
import React from "react";
import { HeroHeader } from "../Sections/HeroHeader/HeroHeader";
import { GlobeDemo } from "../Sections/GlobeSection/GlobeSection";

const Hero = () => {
  return (
    <div className="Hero">
      {/* <Nav /> */}
      <HeroHeader />
      <GlobeDemo />
    </div>
  );
};

export default Hero;
