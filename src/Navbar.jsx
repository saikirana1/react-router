import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1 className="text-4xl text-center ">i am nav bra</h1>
      <div>
        <Link to="/hi">Index</Link> |<Link to="/home">Home</Link> |
        <Link to="/about">About</Link> |{" "}
        <Link to="/productlist">ProductList</Link> |
        <Link to="/hello">ProblemSet</Link> |{" "}
        <Link to={{ pathname: "/problemset/shell", search: "page=1" }}>
          problemset
        </Link>{" "}
        |
      </div>
    </div>
  );
}

export default Navbar;
