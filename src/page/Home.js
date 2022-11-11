import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection
        img="/images/iPad.jpg"
        title="iPad"
        subtitle="Lovable. Drawable. Magical"
      />
      <HeroSection
        img="/images/iPhone.jpg"
        title="iPhone 14"
        subtitle="Bigger and Bigger"
      />
    </div>
  );
};

export default Home;
