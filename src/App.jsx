import React, { useContext } from "react";
import Header from "./components/home/Header";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <Header />
    </div>
  );
};

export default App;
