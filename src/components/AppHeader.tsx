import React from "react";
import logo from "../logo.svg";

const AppHeader = (): JSX.Element => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <span>Shipment App</span>
  </header>
);

export default AppHeader;
