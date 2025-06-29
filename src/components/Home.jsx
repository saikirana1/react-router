import React from "react";
import Index from "./Index";

function Home({ data }) {
  return (
    <div>
      <h1>Home </h1>
      <h1>welcome {data}</h1>
      <Index data={data} />
    </div>
  );
}

export default Home;
