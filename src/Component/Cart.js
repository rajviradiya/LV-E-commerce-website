import React, { useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Cart = () => {

    const [localData,setLocalData] = useState(JSON.parse(localStorage.getItem('cart') || []));

  console.log("local data is ", localData);

  const  handleDeletecartitem = (itemid)=> {
    const updatedata = localData.filter( item => item.id !== itemid)
    setLocalData(updatedata)
    localStorage.setItem("cart",JSON.stringify(updatedata))

}

//redux store


//useSelector for acess redux store



const Increament = () =>{
}

const Decreament = () => {
}



  return (
    <Container fluid className="cart">
      <Col className="cartheading">
        <h2>Shopping cart</h2>
        <hr />
      </Col>
      <Col>
        {Array.isArray(localData) && localData.length > 0 ? (
          localData.map((data) => (
            <Row key={data.id}>
              <Card className="cartcard" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  className="cartcardimg"
                  src={data.image}
                />
                <Card.Body className="cardbody">
                  <Card.Title className="carttitle">{data.title}</Card.Title>
                  <Card.Text className="cartdescription">
                    {data.description}
                  </Card.Text>
                </Card.Body>

                <div className="cartbutton">
                  <div>
                    <p>Price: ${data.price}</p>
                  </div>

                  <div className="addremove">
                    <button className="cartdelete" onClick={()=>Increament()} >+</button>
                    <div></div>
                    <button className="cartdelete" onClick={()=>Decreament()}>-</button>

                    <button className="cartdelete" onClick={()=>handleDeletecartitem()} >
                      <FaTrash size={"14px"}/>
                    </button>

                  </div>
                </div>
              </Card>
            </Row>
          ))
        ) : (
          <h1>not found data</h1>
        )}
      </Col>
    </Container>
  );
};

export default Cart;
