import React from "react";
import "./AppLayout.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    // TODO: Turn this into a component rather than class
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
