import React from 'react';
import { Input, Row, Col, Space } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './Header.css';

const { Search } = Input;

export default function Header() {
  return (
    <div className="header-container">
      <Row align="middle" justify="space-between" className="header-row">
        <Col className="logo">Flipkart <span className="plus">Explore Plus &#x2728;</span></Col>

        <Col flex="auto" className="search-col">
          <Search placeholder="Search for Products, Brands and More" enterButton style={{ width: '100%' }} />
        </Col>

        <Col className="header-actions">
          <Space size="middle">
            <UserOutlined style={{ fontSize: 20 }} />
            <span>Login</span>
            <ShoppingCartOutlined style={{ fontSize: 20 }} />
            <span>Cart</span>
            <span>Become a Seller</span>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
