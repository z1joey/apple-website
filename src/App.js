import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Page from "./page/Page";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/store" exact element={<Page title="Store" />}></Route>
          <Route path="/mac" exact element={<Page title="Mac" />}></Route>
          <Route path="/ipad" exact element={<Page title="iPad" />}></Route>
          <Route path="/iphone" exact element={<Page title="iPhone" />}></Route>
          <Route path="/watch" exact element={<Page title="Watch" />}></Route>
          <Route
            path="/airpods"
            exact
            element={<Page title="AirPods" />}
          ></Route>
          <Route
            path="/tv&home"
            exact
            element={<Page title="TV & Home" />}
          ></Route>
          <Route
            path="/onlyonapple"
            exact
            element={<Page title="Only On Apple" />}
          ></Route>
          <Route
            path="/accessories"
            exact
            element={<Page title="Accessories" />}
          ></Route>
          <Route
            path="/support"
            exact
            element={<Page title="Support" />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
