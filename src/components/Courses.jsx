// CoursesPage.js
import React, { useState, useEffect } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Icons for wishlist
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const [sortOption, setSortOption] = useState("Sort by");
  const [wishlist, setWishlist] = useState(() => {
    // Load wishlist from localStorage
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  const courses = [ {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      price: 19.99,
      rating: 4.8,
      thumbnail: "./react.png",
      category: "Development",
    },
    {
      id: 2,
      title: "Master UI Design",
      instructor: "Jane Smith",
      price: 24.99,
      rating: 4.7,
      thumbnail: "./ui.png",
      category: "Design",
    },
    {
      id: 3,
      title: "The Complete Python Bootcamp",
      instructor: "Michael Johnson",
      price: 29.99,
      rating: 4.9,
      thumbnail: "./python.png",
      category: "Development",
    },
    {
      id: 4,
      title: "Photography Masterclass",
      instructor: "Sarah Lee",
      price: "$19.99",
      rating: 4.5,
      thumbnail: "./photo.jpg",
      category: "Design",
    },
    {
      id: 5,
      title: "Marketing 101: Digital Strategies",
      instructor: "David Clark",
      price: "$22.99",
      rating: 4.6,
      thumbnail: "marketing.webp",
      category: "Marketing",
    },
    {
      id: 6,
      title: "Build Modern Websites with HTML & CSS",
      instructor: "Emily White",
      price: "$17.99",
      rating: 4.8,
      thumbnail: "html.webp",
      category: "Development",
    },
    {
      id: 7,
      title: "Intro to Data Science with R",
      instructor: "James Brown",
      price: "$34.99",
      rating: 4.7,
      thumbnail: "data.jpg",
      category: "Data Science",
    },
    {
      id: 8,
      title: "Business Strategies for Success",
      instructor: "Karen Green",
      price: "$21.99",
      rating: 4.4,
      thumbnail: "bussiness.png",
      category: "Business",
    },
    {
      id: 9,
      title: "Advanced JavaScript Techniques",
      instructor: "Chris Davis",
      price: "$27.99",
      rating: 4.8,
      thumbnail: "./JavaScript.png",
      category: "Development",
    },
    {
      id: 10,
      title: "UX/UI Design for Mobile Apps",
      instructor: "Olivia Thomas",
      price: "$24.99",
      rating: 4.6,
      thumbnail: "./ui ux.webp",
      category: "Design",
    },
];

  const handleSortChange = (event) => setSortOption(event.target.value);

  const sortCourses = (courses, option) => {
    switch (option) {
      case "Price: Low to High":
        return courses.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case "Price: High to Low":
        return courses.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      case "Popularity":
        return courses.sort((a, b) => b.rating - a.rating);
      default:
        return courses;
    }
  };

  const sortedCourses = sortCourses([...courses], sortOption);

  const toggleWishlist = (course) => {
    const exists = wishlist.find((item) => item.id === course.id);
    let updated;
    if (exists) {
      updated = wishlist.filter((item) => item.id !== course.id);
    } else {
      updated = [...wishlist, course];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const isWishlisted = (id) => wishlist.some((course) => course.id === id);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Courses</h2>
        <Form.Select style={{ width: "200px" }} value={sortOption} onChange={handleSortChange}>
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Popularity</option>
        </Form.Select>
      </div>

      <div className="row">
        {sortedCourses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <Card>
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src={course.thumbnail}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    cursor: "pointer",
                    color: isWishlisted(course.id) ? "red" : "#ccc",
                    fontSize: "1.5rem",
                  }}
                  onClick={() => toggleWishlist(course)}
                >
                  {isWishlisted(course.id) ? <FaHeart /> : <FaRegHeart />}
                </div>
              </div>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{course.instructor}</Card.Subtitle>
                <Card.Text>
                  <strong>Price:</strong> {course.price} <br />
                  <strong>Rating:</strong> {course.rating} <br />
                  <strong>Category:</strong> {course.category}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/courses/${course.id}`)}>
                  View Course
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CoursesPage;
