import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import "../node_modules/preline/dist/preline.js"

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
