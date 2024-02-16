import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contactme from "./pages/Contactme";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactme" element={<Contactme />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
