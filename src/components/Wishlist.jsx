// WishlistPage.js
import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    setWishlist(stored ? JSON.parse(stored) : []);
  }, []);

  const removeCourse = (id) => {
    const updated = wishlist.filter((course) => course.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No courses in wishlist yet.</p>
      ) : (
        <div className="row">
          {wishlist.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={course.thumbnail} style={{ height: "180px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{course.instructor}</Card.Subtitle>
                  <Card.Text>
                    <strong>Price:</strong> {course.price} <br />
                    <strong>Rating:</strong> {course.rating}
                  </Card.Text>
                  <Button variant="primary" className="me-2" onClick={() => navigate(`/courses/${course.id}`)}>
                    Go to Course
                  </Button>
                  <Button variant="danger" onClick={() => removeCourse(course.id)}>
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default WishlistPage;
