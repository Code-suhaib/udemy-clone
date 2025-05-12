// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import UdemyNavbar from "./components/UdemyNavbar";
import HeroSection from "./components/HeroSection";
import HomepagePanelLayout from "./components/Homepage";
import Footer from "./components/Footer";
import WishlistPage from "./components/Wishlist"; // Wishlist Page

function App() {
  return (
    <>
      <UdemyNavbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<HomepagePanelLayout />} /> {/* Homepage with CoursesPage included */}
        <Route path="/wishlist" element={<WishlistPage />} /> {/* Separate Wishlist Page */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
