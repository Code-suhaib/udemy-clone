import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";

const CoursesPage = () => {
  const [sortOption, setSortOption] = useState("Sort by");

  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      price: 19.99,
      rating: 4.8,
      thumbnail: "https://via.placeholder.com/300x180?text=React+for+Beginners",
      category: "Development",
    },
    {
      id: 2,
      title: "Master UI Design",
      instructor: "Jane Smith",
      price: 24.99,
      rating: 4.7,
      thumbnail: "https://via.placeholder.com/300x180?text=Master+UI+Design",
      category: "Design",
    },
    {
      id: 3,
      title: "The Complete Python Bootcamp",
      instructor: "Michael Johnson",
      price: 29.99,
      rating: 4.9,
      thumbnail: "https://via.placeholder.com/300x180?text=Python+Bootcamp",
      category: "Development",
    },
    {
    id: 4,
    title: "Photography Masterclass",
    instructor: "Sarah Lee",
    price: "$19.99",
    rating: 4.5,
    thumbnail: "https://via.placeholder.com/300x180?text=Photography+Masterclass",
    category: "Design",
  },
  {
    id: 5,
    title: "Marketing 101: Digital Strategies",
    instructor: "David Clark",
    price: "$22.99",
    rating: 4.6,
    thumbnail: "https://via.placeholder.com/300x180?text=Marketing+101",
    category: "Marketing",
  },
  {
    id: 6,
    title: "Build Modern Websites with HTML & CSS",
    instructor: "Emily White",
    price: "$17.99",
    rating: 4.8,
    thumbnail: "https://via.placeholder.com/300x180?text=Modern+Websites",
    category: "Development",
  },
  {
    id: 7,
    title: "Intro to Data Science with R",
    instructor: "James Brown",
    price: "$34.99",
    rating: 4.7,
    thumbnail: "https://via.placeholder.com/300x180?text=Data+Science+with+R",
    category: "Data Science",
  },
  {
    id: 8,
    title: "Business Strategies for Success",
    instructor: "Karen Green",
    price: "$21.99",
    rating: 4.4,
    thumbnail: "https://via.placeholder.com/300x180?text=Business+Strategies",
    category: "Business",
  },
  {
    id: 9,
    title: "Advanced JavaScript Techniques",
    instructor: "Chris Davis",
    price: "$27.99",
    rating: 4.8,
    thumbnail: "https://via.placeholder.com/300x180?text=Advanced+JavaScript",
    category: "Development",
  },
  {
    id: 10,
    title: "UX/UI Design for Mobile Apps",
    instructor: "Olivia Thomas",
    price: "$24.99",
    rating: 4.6,
    thumbnail: "https://via.placeholder.com/300x180?text=UX+UI+for+Mobile",
    category: "Design",
  },
    // Add more courses as needed
  ];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Function to sort courses based on the selected option
  const sortCourses = (courses, option) => {
    switch (option) {
      case "Price: Low to High":
        return courses.sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return courses.sort((a, b) => b.price - a.price);
      case "Popularity":
        return courses.sort((a, b) => b.rating - a.rating); // Assuming higher rating means more popularity
      default:
        return courses;
    }
  };

  const sortedCourses = sortCourses(courses, sortOption);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Courses</h2>
        <Form.Select
          style={{ width: "200px" }}
          value={sortOption}
          onChange={handleSortChange}
        >
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Popularity</option>
        </Form.Select>
      </div>
      
      {/* Render sorted courses */}
      <div className="row">
        {sortedCourses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={course.thumbnail} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{course.instructor}</Card.Subtitle>
                <Card.Text>
                  <strong>Price: </strong>{course.price} <br />
                  <strong>Rating: </strong>{course.rating} <br />
                  <strong>Category: </strong>{course.category}
                </Card.Text>
                <Button variant="primary">View Course</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CoursesPage;
