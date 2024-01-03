import React, { useContext } from "react";
import Chain from "./pages/Chain";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div>
        <Chain />
      </div>
    </div>
  );
};

export default App;
