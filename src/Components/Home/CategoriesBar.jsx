import React from "react";
import { NavDropdown, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const CategoriesBar = () => {
  return (
    <Container fluid className="bg-light py-2">
      <Nav className="justify-content-center">
        {/* Electronics */}
        <NavDropdown 
          title={
            <Link to="/electronics" className="d-flex align-items-center">
              <Image src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" width="30" height="30" className="me-2" />
              Electronics
            </Link>
          } 
          id="electronics-dropdown"
        >
           <NavDropdown.Item as={Link} to="/electronics">Mobiles</NavDropdown.Item>
           <NavDropdown.Item as={Link} to="/electronics">Laptops</NavDropdown.Item>
        </NavDropdown>

        {/* Fashion */}
        <NavDropdown 
          title={<span><Image src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" width="30" height="30" className="me-2" /> Fashion</span>} 
          id="fashion-dropdown"
        >
          <NavDropdown.Item href="#">Men</NavDropdown.Item>
          <NavDropdown.Item href="#">Women</NavDropdown.Item>
        </NavDropdown>

        {/* Home Appliances */}
        <NavDropdown 
          title={<span><Image src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" width="30" height="30" className="me-2" /> Home Appliances</span>} 
          id="home-dropdown"
        >
          <NavDropdown.Item href="#">Kitchen</NavDropdown.Item>
          <NavDropdown.Item href="#">Furniture</NavDropdown.Item>
        </NavDropdown>

        {/* Books */}
        <NavDropdown 
          title={<span><Image src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" width="30" height="30" className="me-2" /> Books</span>} 
          id="books-dropdown"
        >
          <NavDropdown.Item href="#">Fiction</NavDropdown.Item>
          <NavDropdown.Item href="#">Education</NavDropdown.Item>
        </NavDropdown>

        {/* Beauty & Personal Care */}
        <NavDropdown 
          title={<span><Image src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" width="30" height="30" className="me-2" /> Beauty & Personal Care</span>} 
          id="beauty-dropdown"
        >
          <NavDropdown.Item href="#">Skincare</NavDropdown.Item>
          <NavDropdown.Item href="#">Makeup</NavDropdown.Item>
        </NavDropdown>

        {/* Sports & Outdoors */}
        <NavDropdown 
          title={<span><Image src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100" width="30" height="30" className="me-2" /> Sports & Outdoors</span>} 
          id="sports-dropdown"
        >
          <NavDropdown.Item href="#">Football</NavDropdown.Item>
          <NavDropdown.Item href="#">Camping</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  );
};

export default CategoriesBar;
