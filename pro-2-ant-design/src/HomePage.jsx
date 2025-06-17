import products from "../data/products.json";
import ProductList from "./components/ProductList";

export default function HomePage() {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
