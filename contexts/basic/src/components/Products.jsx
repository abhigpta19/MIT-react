import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "MacBook", price: 2000 },
  { id: 3, name: "AirPods", price: 500 },
];

function Products() {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;