import React from 'react';
import { Input, Space } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Flipkart</div>
      <Input.Search placeholder="Search for Products, Brands and More" style={{ width: 400 }} />
      <Space>
        <UserOutlined /> Login
        <ShoppingCartOutlined /> Cart
      </Space>
    </div>
  );
}
