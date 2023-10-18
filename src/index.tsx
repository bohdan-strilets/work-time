import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootDiv = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
