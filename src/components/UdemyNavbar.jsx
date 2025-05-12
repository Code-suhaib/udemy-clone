import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const UdemyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3" style={{ height: "80px" }}>
      <Container fluid>
        <Navbar.Brand className="fs-4" href="/">
          Udemy Clone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="udemy-navbar" />
        <Navbar.Collapse id="udemy-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/explore" className="fs-5">
              Explore
            </Nav.Link>
            <Nav.Link href="/courses" className="fs-5">
              Courses
            </Nav.Link>
          </Nav>

          <Form className="d-flex mx-auto w-50" role="search">
            <FormControl
              type="search"
              placeholder="Search for anything"
              className="me-2 fs-6"
              aria-label="Search courses"
            />
          </Form>

          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/business" className="fs-6">
              Udemy Business
            </Nav.Link>
            <Nav.Link href="/teach" className="fs-6">
              Teach on Udemy
            </Nav.Link>
            <Nav.Link href="/wishlist" className="fs-6 d-flex align-items-center">
              <FaHeart className="me-1" />
              Wishlist
            </Nav.Link>
            <Nav.Link href="/cart" className="fs-6">
              <FaShoppingCart size={22} />
            </Nav.Link>
            <Button variant="outline-dark" className="me-2 fs-6">
              Log in
            </Button>
            <Button variant="dark" className="fs-6">
              Sign up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UdemyNavbar;
