import React from "react";
import { motion } from "framer-motion";

import "./Page.css";

const FadeInPage = (props) => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>{props.title}</h1>
    </motion.div>
  );
};

export default FadeInPage;
