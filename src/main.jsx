import React from "react";
import ReactDOM from "react-dom/client";
import { MenuContextProvider } from "./context/MenuContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </React.StrictMode>,
);
