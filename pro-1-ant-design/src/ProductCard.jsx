import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={<img alt={product.name} src={product.image} />}
    >
      <Card.Meta title={product.name} description={`₹${product.price}`} />
      <Button onClick={() => navigate(`/product/${product.id}`)} block style={{ marginTop: 10 }}>
        View Details
      </Button>
    </Card>
  );
}
