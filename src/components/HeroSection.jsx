import React from "react";
import { Container, Button, Form, FormControl } from "react-bootstrap";
import "./HeroSection.css"; // Custom CSS for hero section

const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container className="text-center text-md-start">
        <div className="hero-content p-4 p-md-5">
          <h1 className="hero-title fw-bold mb-3">
            Learn anything, anytime, anywhere.
          </h1>
          <p className="hero-subtitle mb-4">
            Choose from thousands of courses to start learning today.
          </p>

          <Form className="d-flex hero-search mb-4">
            <FormControl
              type="search"
              placeholder="What do you want to learn?"
              className="me-2 p-3 flex-grow-1"
            />
            <Button variant="dark" className="px-4 py-3">
              Search
            </Button>
          </Form>

          <p className="hero-promo text-muted">
            Limited-time offer! Get courses starting at $9.99.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
