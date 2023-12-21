import React from "react";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const NavCarousels = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.louisvuitton.com/images/is/image/WOMEN_EDITORIALISATION_OCTOBRE_028-57_LVCOM_1920x1080_DI3.jpg?wid=2400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.louisvuitton.com/images/is/image/Men_Preco_SS24_WW_HP_Push_DI3.jpg?wid=2400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>

        <img
            className="d-block w-100"
            src="https://in.louisvuitton.com/images/is/image/BC_COMMERCIAL_HOLIDAY2023_IMG016_LVCOM_2048x1152_DI3.jpg?wid=2400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default NavCarousels;
