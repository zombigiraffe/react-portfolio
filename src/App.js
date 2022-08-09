import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { HireMe } from "./pages/HireMe";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link style={{textDecoration: "none"}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/pages/About">About</Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/pages/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/pages/HireMe">Hire Me!</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Portfolio" element={<Portfolio />} />
        <Route path="/pages/HireMe" element={<HireMe />} />
      </Routes>
    </>
  );
}

export default App;
