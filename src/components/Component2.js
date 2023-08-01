import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export const Component2 = (props) => {
  console.log(props.message, "1111111");
  console.log(props.callback);
  let data = "OK";
  return (
    <>
      <Card className="text-center" style={{ height: "15rem" }}>
        <Card.Header>Send Message </Card.Header>
        <Card.Body>
          <Card.Body>
            <Card.Title>Send Message By Component2</Card.Title>
            <Card.Text>Hey type your message here !!</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <h6>{props.message}</h6>
          </ListGroup>
          <br />
          <Button
            onClick={() => {
              props.callback(data);
            }}
          >
            OK
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
