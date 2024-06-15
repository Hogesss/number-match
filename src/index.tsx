import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
document.title = "Matching Number Game";

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
