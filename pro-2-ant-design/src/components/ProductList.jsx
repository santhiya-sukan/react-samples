export default function ProductList({ products }) {
  if (!Array.isArray(products)) {
    return <div>No products available.</div>;
  }

  return (
    <Row gutter={[16, 16]} style={{ padding: "20px" }}>
      {products.map((product) => (
        <Col span={6} key={product.id}>
          <Card title={product.name} cover={<img alt={product.name} src={product.image} />}>
            <p>Price: ₹{product.price}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
