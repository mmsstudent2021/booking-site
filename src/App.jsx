import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div className="dark:bg-body-dark">
        <Home />
      </div>
    </div>
  );
};

export default App;
