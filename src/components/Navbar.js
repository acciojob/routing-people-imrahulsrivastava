import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
    </div>
  );
}

export default Navbar;
