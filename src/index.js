import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyle } from "./style/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
