import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import React from "react";
import Home from "../page/Home";
import Page from "../page/Page";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/store"
          exact
          element={
            <Page
              title="Store"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/mac"
          exact
          element={
            <Page
              title="Mac"
              initial={{ x: -window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/ipad"
          exact
          element={
            <Page
              title="iPad"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/iphone"
          exact
          element={
            <Page
              title="iPhone"
              initial={{ x: -window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/watch"
          exact
          element={
            <Page
              title="Watch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/airpods"
          exact
          element={
            <Page
              title="Airpods"
              initial={{ x: -window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/tv&home"
          exact
          element={
            <Page
              title="TV & Home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/onlyonapple"
          exact
          element={
            <Page
              title="Only On Apple"
              initial={{ x: -window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/accessories"
          exact
          element={
            <Page
              title="Accessories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            />
          }
        />
        <Route
          path="/support"
          exact
          element={
            <Page
              title="Support"
              initial={{ x: -window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
