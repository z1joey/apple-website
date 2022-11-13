import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import React from "react";
import Home from "../page/Home";
import SlideInPage from "../page/SlideInPage";
import FadeInPage from "../page/FadeInPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/store"
          exact
          element={<FadeInPage title="Store" />}
        ></Route>
        <Route path="/mac" exact element={<FadeInPage title="Mac" />}></Route>
        <Route path="/ipad" exact element={<FadeInPage title="iPad" />}></Route>
        <Route
          path="/iphone"
          exact
          element={<SlideInPage title="iPhone" />}
        ></Route>
        <Route
          path="/watch"
          exact
          element={<FadeInPage title="Watch" />}
        ></Route>
        <Route
          path="/airpods"
          exact
          element={<SlideInPage title="AirPods" />}
        ></Route>
        <Route
          path="/tv&home"
          exact
          element={<FadeInPage title="TV & Home" />}
        ></Route>
        <Route
          path="/onlyonapple"
          exact
          element={<SlideInPage title="Only On Apple" />}
        />
        <Route
          path="/accessories"
          exact
          element={<FadeInPage title="Accessories" />}
        />
        <Route
          path="/support"
          exact
          element={<SlideInPage title="Support" />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
