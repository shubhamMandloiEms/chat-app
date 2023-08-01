import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Home = () => {
  const [message2, setMessage2] = useState("");
  const location = useLocation();

  const navigate = useNavigate();
  const handleClick = () => navigate("/", { state: message2 });

  const messageFunc = (event) => {
    setMessage2(event.target.value);
  };

  console.log("mesage2", message2);

  return (
    <>
      {/* navbar  */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Chat-App </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card className="text-center" style={{ height: "25rem" }}>
        <Card.Header>Send Message </Card.Header>
        <Card.Body>
          <Card.Body>
            <Card.Title>Send Message By Home</Card.Title>
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
        </Card.Body>

        <Card.Body>
          <Card.Title>Message History</Card.Title>
          <Alert style={{ width: "50%", margin: "auto" }} variant="success">
            {location?.state}
          </Alert>
        </Card.Body>
        <Card.Footer className="text-muted">
          Thanks for using our chat app
        </Card.Footer>
      </Card>
    </>
  );
};
