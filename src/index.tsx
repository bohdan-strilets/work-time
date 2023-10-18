import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

const rootDiv = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
