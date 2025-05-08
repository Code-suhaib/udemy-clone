// components/UdemyNavbar.js

import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const UdemyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3" style={{ height: "80px" }}>
    <Container fluid>
      <Navbar.Brand href="#" className="fs-4">Udemy-clone</Navbar.Brand>
      <Navbar.Toggle aria-controls="udemy-navbar" />
      <Navbar.Collapse id="udemy-navbar">
        <Nav className="me-auto">
          <Nav.Link href="#" className="fs-5">Explore</Nav.Link>
        </Nav>
  
        <Form className="d-flex mx-auto" style={{ width: "40%" }}>
          <FormControl
            type="search"
            placeholder="Search for anything"
            className="me-2 fs-5"
            aria-label="Search"
          />
        </Form>
  
        <Nav className="ms-auto">
          <Nav.Link href="#" className="fs-6">Udemy Business</Nav.Link>
          <Nav.Link href="#" className="fs-6">Teach on Udemy</Nav.Link>
          <Nav.Link href="#"><FaShoppingCart size={22} /></Nav.Link>
          <Button variant="outline-dark" className="me-2 fs-6">Log in</Button>
          <Button variant="dark" className="fs-6">Sign up</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )

}  

export default UdemyNavbar;
