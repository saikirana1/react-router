import { Link } from "react-router-dom";

const products = [
  { id: "1", name: "iPhone 15", price: "$999" },
  { id: "2", name: "Samsung Galaxy S24", price: "$899" },
  { id: "3", name: "OnePlus 12", price: "$799" },
];

export default function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link
            to={`/product/${product.id}?name=${encodeURIComponent(
              product.name
            )}&price=${product.price}`}
          >
            {product.name} - {product.price}
          </Link>
        </div>
      ))}
    </div>
  );
}
