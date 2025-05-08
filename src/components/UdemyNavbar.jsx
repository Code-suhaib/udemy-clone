// components/UdemyNavbar.js

import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const UdemyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">Udemy</Navbar.Brand>
        <Navbar.Toggle aria-controls="udemy-navbar" />
        <Navbar.Collapse id="udemy-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#">Categories</Nav.Link>
          </Nav>

          <Form className="d-flex mx-auto" style={{ width: "40%" }}>
            <FormControl
              type="search"
              placeholder="Search for anything"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <Nav className="ms-auto">
            <Nav.Link href="#">Udemy Business</Nav.Link>
            <Nav.Link href="#">Teach on Udemy</Nav.Link>
            <Nav.Link href="#"><FaShoppingCart size={20} /></Nav.Link>
            <Button variant="outline-dark" className="me-2">Log in</Button>
            <Button variant="dark">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UdemyNavbar;
