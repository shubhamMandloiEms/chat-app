import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Component2 } from "./Component2";

export const Component1 = () => {
  const [message, setMessage] = useState("");
  const [returnMessage, setReturnMessage] = useState("");
  const messageFunc = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    setMessage(message);
  };
  const callback = (msg) => {
    console.log(msg);
    setReturnMessage(msg);
  };
  console.log(returnMessage, "returnMessage");
  return (
    <>
      <Card className="text-center" style={{ height: "20rem" }}>
        <Card.Header>Send Message </Card.Header>
        <Card.Body>
          <Card.Body>
            <Card.Title>Send Message By Component1</Card.Title>
            <Card.Text>Hey type your message here !!</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <input
              onChange={messageFunc}
              placeholder="message"
              style={{ width: "50%", margin: "auto" }}
            ></input>
          </ListGroup>
          <br />
          <Button onClick={handleClick}>Send Message</Button>

          {/* <Button>Send Message</Button> */}
        </Card.Body>
        <Card.Body>
          <Card.Title>Return Message </Card.Title>

          {returnMessage}
        </Card.Body>
      </Card>
      <Component2 message={message} callback={callback} />
    </>
  );
};
