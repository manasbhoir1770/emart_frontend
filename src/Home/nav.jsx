import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; 
const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">e-Mart</Navbar.Brand>
        <Form className="d-flex ms-auto">
          <FormControl type="search" placeholder="Search products..." className="me-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav className="ms-auto">
          <Nav.Link href="#"><i className="bi bi-person-circle"></i>Login </Nav.Link>
          <Nav.Link href="#">Cart 🛒</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
