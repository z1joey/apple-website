import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Page.css";

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

const Page = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await timeout(2000);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <motion.div
      className="page-container"
      initial={props.initial}
      animate={props.animate}
      exit={props.exit}
    >
      <h1>{props.title}</h1>
      {loading && <div>Loading the dummy data...</div>}
      {error && <div>{`Oops, something went wrong with - ${error}`}</div>}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <p>{title}</p>
            </li>
          ))}
      </ul>
    </motion.div>
  );
};

export default Page;
