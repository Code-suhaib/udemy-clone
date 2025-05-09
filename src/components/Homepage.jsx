import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = ['Development', 'Business', 'IT & Software', 'Design', 'Marketing'];
const featuredCourses = [
  { title: 'React for Beginners', instructor: 'Jane Doe', rating: 4.5, price: '$49' },
  { title: 'Advanced CSS & Sass', instructor: 'John Smith', rating: 4.7, price: '$39' },
  { title: 'Node.js Bootcamp', instructor: 'Emily Johnson', rating: 4.6, price: '$59' },
];
const watchingNow = [
  'JavaScript Essentials',
  'Intro to Python',
  'UX Design Basics',
  'DevOps Fundamentals',
];

export default function HomepagePanelLayout() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center p-5 rounded position-relative">
        <h1 className="display-4 fw-bold mb-3">Learn Anything, Anytime</h1>
        <div className="mx-auto" style={{ maxWidth: '500px' }}>
          <input type="text" className="form-control" placeholder="Search for courses..." />
        </div>
        <img
          src="/hero.jpg"
          alt="Hero Background"
          className="position-absolute top-0 start-0 w-100 h-100 opacity-25 object-fit-cover rounded"
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Categories Panel */}
      <div className="mt-5">
        <h2 className="mb-4">Explore Categories</h2>
        <div className="d-flex overflow-auto gap-3 pb-2">
          {categories.map((category) => (
            <button key={category} className="btn btn-outline-secondary flex-shrink-0">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Courses */}
      <div className="mt-5">
        <h2 className="mb-4">Top Courses in Development</h2>
        <div className="row">
          {featuredCourses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text text-muted">By {course.instructor}</p>
                  <p className="card-text">Rating: {course.rating} ⭐</p>
                  <p className="card-text fw-bold">{course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Learners Are Watching Now */}
      <div className="mt-5">
        <h2 className="mb-4">What Learners Are Watching Now</h2>
        <div className="d-flex overflow-auto gap-3 pb-2">
          {watchingNow.map((title, index) => (
            <div key={index} className="card flex-shrink-0" style={{ minWidth: '200px' }}>
              <div className="card-body">
                <p className="card-text fw-medium">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}