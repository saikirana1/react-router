import React from "react";
import Home from "./Home";

function About() {
  let x = 10;
  let c = Home();
  console.log(c);
  return (
    <div>
      <h1>about</h1>

      {c}
    </div>
  );
}

export default About;
