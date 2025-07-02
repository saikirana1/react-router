import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const products = [
  { id: "1", name: "iPhone 15", price: "$999" },
  { id: "2", name: "Samsung Galaxy S24", price: "$899" },
  { id: "3", name: "OnePlus 12", price: "$799" },
];

function Product() {
  const params = useParams(); // from path like /product/:id
  const [searchParams] = useSearchParams(); // from query string

  console.log("Search Params:", searchParams.get("prise"));
  return (
    <div>
      Details:
      <br />
      Product ID: {params.id}
      <br />
      Name: {searchParams.get("name") || "No name provided"}
      <br />
      Price: {searchParams.get("price") || "No price provided"}
    </div>
  );
}

export default Product;
