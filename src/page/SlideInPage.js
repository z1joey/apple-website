import React from "react";
import { motion } from "framer-motion";

import "./Page.css";

const SlideInPage = (props) => {
  return (
    <motion.div
      className="page-container"
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <h1>{props.title}</h1>
    </motion.div>
  );
};

export default SlideInPage;
