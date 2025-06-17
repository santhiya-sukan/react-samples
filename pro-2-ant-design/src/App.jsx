import React from "react";
import { Layout } from "antd";
import HeaderBar from "./components/HeaderBar";
import CategoryMenu from "./components/CategoryMenu";
import ProductList from "./components/ProductList";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <CategoryMenu /> {/* Make sure this is outside of Header */}
      <Content style={{ padding: "20px" }}>
        <ProductList />
      </Content>
    </Layout>
  );
}
