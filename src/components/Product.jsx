import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: "1", name: "iPhone 15", price: "$999" },
  { id: "2", name: "Samsung Galaxy S24", price: "$899" },
  { id: "3", name: "OnePlus 12", price: "$799" },
];

function Product() {
//   const { id } = useParams();
//   console.log("Product ID:", id);
//   const product = products.find((p) => p.id === id);



  if (!product) {
    return <div>❌ Product not found</div>;
  }
  return (
    <div>
      {/* <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p> */}
      <h1>i am </h1>
    </div>
  );
}

export default Product;
