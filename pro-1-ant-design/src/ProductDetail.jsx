import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products.json';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
    </div>
  );
}
