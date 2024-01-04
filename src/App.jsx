import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Chain from "./pages/Chain";

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div className="dark:bg-body-dark">
        <Contact />
      </div>
    </div>
  );
};

export default App;
