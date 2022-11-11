import React from "react";
import "./Page.css";

const Page = (props) => {
  return (
    <div className="page-container">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Page;
