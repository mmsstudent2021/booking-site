import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Chain from "./pages/Chain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div className="dark:bg-body-dark">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotel-chain" element={<Chain />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
