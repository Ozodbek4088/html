import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="link1" to={"/tests"}>
        Tests
      </Link>
      <Link className="link5" to={"/testAdmin"}>
        Tests Admin
      </Link>
    </nav>
  );
}

export default Navbar;
