import React, { useContext } from "react";
import Home from "./pages/Home";
import Chain from "./pages/Chain";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div>
        <Home />
        <Chain />
      </div>
    </div>
  );
};


export default App;