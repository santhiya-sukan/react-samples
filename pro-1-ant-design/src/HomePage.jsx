import React from 'react';
import products from './products.json';
import ProductList from './ProductList';

export default function HomePage() {
  return (
    <div style={{ padding: 24 }}>
      <ProductList products={products} />
    </div>
  );
}
