import React from "react";
import Content from "../components/Content";

const Home = () => {
  return (
    <div>
      <Content
        img="/images/iPad.jpg"
        title="iPad"
        subtitle="Lovable. Drawable. Magical"
      />
      <Content
        img="/images/iPhone.jpg"
        title="iPhone 14"
        subtitle="Bigger and Bigger"
      />
    </div>
  );
};

export default Home;
