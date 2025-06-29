import React from "react";
import About from "./About";

function Index({ data }) {
  return (
    <div>
      <h1>Index</h1>
      <About data={data} />
    </div>
  );
}

export default Index;
