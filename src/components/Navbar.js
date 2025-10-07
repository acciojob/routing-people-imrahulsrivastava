import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const headingText = pathname === "/" ? "User List" : "User Details";

  return (
    <div>
      <h1>{headingText}</h1>
    </div>
  );
}

export default Navbar;
