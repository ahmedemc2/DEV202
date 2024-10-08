import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
