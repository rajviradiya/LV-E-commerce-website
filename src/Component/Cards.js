import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = (props) => {
  let data = props.datas;


const handleAddToCart = (item) => {
  let arr = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart items from localStorage

  if (!arr.some(cartItem => cartItem.id === item.id)) {
    arr.push(item); // Add the item to the cart if it doesn't exist
    localStorage.setItem("cart", JSON.stringify(arr)); // Update localStorage with the updated cart
    console.log("Item added to cart:", item);

  } else {
    console.log("Item already exists in cart:", item);
    // Optionally, you can display a message or perform another action if the item is already in the cart
  }
};


  return (
    <Container fluid className="pt-5">
      <Row>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <Col xl={3} className=" pb-4 ">
              <Card className="card" key={item.id}>
                <Card.Img
                  variant="top"
                  className="cardimage"
                  src={item.image}
                />

                <Card.Body>
                  <Card.Title className="cardrate">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyk4FpIm61QvXYX86YnTFPCT-U1XIkOnMzGw&usqp=CAU" />
                    {item.rating.rate}
                  </Card.Title>

                  <Card.Title className=" cardtitle">{item.title}</Card.Title>
                  <Card.Text className="cardDescription">
                    {item.description}
                  </Card.Text>
                  <Card.Text className=" d-flex justify-content-between">
                    <div>${item.price}</div>
                    <div className=" text-secondary">
                      {item.rating.count} PCS
                    </div>
                  </Card.Text>

                  <Button
                    className=" cardbutton"
                    variant="primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Bag
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>no data available</p>
        )}
      </Row>
    </Container>
  );
};

export default Cards;
