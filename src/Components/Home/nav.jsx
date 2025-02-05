import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap-icons/font/bootstrap-icons.css"; 

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">e-Mart</Navbar.Brand>
        <Form className="d-flex ms-auto" style={{ width: '50%' }}>
          <FormControl type="search" placeholder="Search products..." className="me-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/login">
            <i className="bi bi-person-circle"></i> User
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart 🛒
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;