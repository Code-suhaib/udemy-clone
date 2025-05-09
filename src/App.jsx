import React from "react";
import UdemyNavbar from "./components/UdemyNavbar";
import HeroSection from "./components/HeroSection";
import HomepagePanelLayout from "./components/Homepage";
import Footer from "./components/Footer";
import CoursesPage from "./components/Courses";

function App() {
  return (
    <>
      <UdemyNavbar />
      <HeroSection />
      <HomepagePanelLayout />
      <CoursesPage /> {/* This will render the course listing page */}
      <Footer />
    </>
  );
}

export default App;
