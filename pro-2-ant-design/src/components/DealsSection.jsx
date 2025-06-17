import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import './DealsSection.css';
import productsData from '../data/products.json';

const { Meta } = Card;

export default function DealsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="deals-container">
      <h2 className="section-title">Deals of the Day</h2>
      <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col xs={12} sm={8} md={6} lg={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} className="product-img" />}
            >
              <Meta title={product.name} description={product.price} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
