import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1 className="text-2xl text-center ">i am nav bra</h1>
      <Link to="/hi">Index</Link> |<Link to="/home">Home</Link> |
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
