import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Chain from "./pages/Chain";
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import OurTeam from "./pages/OurTeam";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div className="dark:bg-body-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-chain" element={<Chain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-team" element={<OurTeam />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
