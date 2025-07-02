import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ProblemSet() {
  const params = useParams();
  const [queryparams, setQueryparams] = useSearchParams();
  console.log("Query Params:", queryparams.get("page"));

  return <div>ProblemSet</div>;
}

export default ProblemSet;
