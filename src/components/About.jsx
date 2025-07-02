import React, { use } from "react";
import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>about</h1>
    </div>
  );
}

export default About;
