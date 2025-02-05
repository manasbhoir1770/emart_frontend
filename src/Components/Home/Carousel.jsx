import React from "react";
import { Carousel } from "react-bootstrap";

const SpecialDealsCarousel = () => {
  return (
    <Carousel interval={2000} pause="hover"> 
      <Carousel.Item>
        <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/43e26378e18b32a2.jpg?q=20" alt="Deal 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/c928b14a5cddaf18.jpg?q=20" alt="Deal 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/5fbe79d96b10223e.jpg?q=20" alt="Deal 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default SpecialDealsCarousel;
