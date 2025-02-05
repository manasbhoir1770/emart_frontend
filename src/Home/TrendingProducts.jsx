import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const products = [
  { id: 1, name: "Smartphone", price: "$499", image: "/images/product1.jpg" },
  { id: 2, name: "Laptop", price: "$899", image: "/images/product2.jpg" },
  { id: 3, name: "Headphones", price: "$99", image: "/images/product3.jpg" },
  { id: 4, name: "Watch", price: "$149", image: "/images/product4.jpg" },
  { id: 5, name: "Shoes", price: "$79", image: "/images/product5.jpg" },
  { id: 6, name: "Backpack", price: "$39", image: "/images/product6.jpg" },
  { id: 7, name: "Tablet", price: "$349", image: "/images/product7.jpg" },
  { id: 8, name: "TV", price: "$699", image: "/images/product8.jpg" },
  { id: 9, name: "Gaming Console", price: "$399", image: "/images/product9.jpg" },
  { id: 10, name: "Earbuds", price: "$59", image: "/images/product10.jpg" },
  { id: 11, name: "Smart Speaker", price: "$129", image: "/images/product11.jpg" },
  { id: 12, name: "Wireless Mouse", price: "$29", image: "/images/product12.jpg" },
];

const TrendingProducts = () => {
  const addToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">Trending Products</h3>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{product.price}</span>
                  <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingProducts;
