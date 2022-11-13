import React from "react";
import Content from "../components/Content";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
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
    </motion.div>
  );
};

export default Home;
