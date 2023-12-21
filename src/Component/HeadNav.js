import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./HeadNav.css";
import NavCarousels from "./NavCarousels";
import Cards from "./Cards";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeadNav = () => {
  const [serch, setSerch] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    ApiGet();
  }, []);

  const ApiGet = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setData(response.data);
    } catch (err) {
      console.log("error found", err);
    }
  };

  // Filter data we pass card through props
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(serch.toLowerCase())
  );


  //get local storage data
  const localData = JSON.parse(localStorage.getItem("cart"))


  return (
    <div>
      <Navbar expand="lg" className=" bg-body-tertiary nav">
        <Container fluid>
          <Navbar.Brand className="nav1" href="#home">
            <img
              className="navlogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_eBuFeSnXOeQZzwi7D63zvtI6xIoRu8VQCg&usqp=CAU"
              alt="Image Not Available"
            />
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />



          <Navbar.Collapse id="basic-navbar-nav" className="nav2">
            <Form className="navsearch">


              <Row className="navse2 ">
                <Col className="searchmain">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search"
                    aria-label="Search"
                    value={serch}
                    onChange={(e) => {
                      setSerch(e.target.value);
                    }}
                  />

                  <ul className="navsearchlist">
                    {Array.isArray(filteredData) && filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <>
                          <li key={item.id}>
                            <img width="25px" src={item.image} />
                          </li>
                          <li
                            onClick={() => {
                              setSerch(item.title);
                            }}
                          >
                            {item.title}
                          </li>
                        </>
                      ))
                    ) : (
                      <p>daat is not valid</p>
                    )}
                  </ul>
                </Col>

                <Col>
                  <Button variant="outline-success">Search</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>


          <Navbar.Collapse id="basic-navbar-nav" className=" nav3">
              <Col className="carticon">
                <Link to={"/cart"}><FaShoppingCart size={"30px"}/></Link>
              </Col>
              <Col className=" pt-2">
              { localData ? <h6>{localData.length}</h6>  :  <h6>0</h6>}
              </Col>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      <NavCarousels />

      <Cards datas={filteredData} />
    </div>
  );
};

export default HeadNav;
