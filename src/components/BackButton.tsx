import React from "react";
import { Link } from "react-router-dom";

export const BackButton = (): JSX.Element => (
  <div className="back-link-wrapper">
    <Link className="back-link" to="/">
      Back To Table
    </Link>
  </div>
);

export default BackButton;
