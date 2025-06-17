// src/components/HeaderBar.jsx
import React from "react";
import { Input, Row, Col } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function HeaderBar() {
  return (
    <Row align="middle" justify="space-between" style={{ color: "white" }}>
      <Col span={4}><h1 style={{ color: "white" }}>Flipkart</h1></Col>
      <Col span={12}><Search placeholder="Search for products" enterButton /></Col>
      <Col span={4} style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
        <UserOutlined style={{ fontSize: "20px", color: "white" }} />
        <ShoppingCartOutlined style={{ fontSize: "20px", color: "white" }} />
      </Col>
    </Row>
  );
}
