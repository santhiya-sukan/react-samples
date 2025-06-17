import React from 'react';
import { AppstoreOutlined, LaptopOutlined, SkinOutlined, MobileOutlined, HomeOutlined, GiftOutlined, FireOutlined } from '@ant-design/icons';
import './CategoryMenu.css';

const categories = [
  { name: 'Electronics', icon: <LaptopOutlined className="category-icon" /> },
  { name: 'Mobiles', icon: <MobileOutlined className="category-icon" /> },
  { name: 'Fashion', icon: <SkinOutlined className="category-icon" /> },
  { name: 'Home', icon: <HomeOutlined className="category-icon" /> },
  { name: 'Toys', icon: <GiftOutlined className="category-icon" /> },
  { name: 'Deals', icon: <FireOutlined className="category-icon" /> },
  { name: 'More', icon: <AppstoreOutlined className="category-icon" /> },
];

export default function CategoryMenu() {
  return (
    <div className="category-menu">
      {categories.map((cat, index) => (
        <div key={index} className="category-item">
          {cat.icon}
          <div>{cat.name}</div>
        </div>
      ))}
    </div>
  );
}
