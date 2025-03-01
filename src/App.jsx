import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Help from "./components/Help"; // Import the Help component

const App = () => {
  return (
    <BrowserRouter>
      {/* Header remains visible on all pages */}
      <Header />  

      {/* Main content routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<p>About Us</p>} />
        <Route path="/help" element={<Help />} /> {/* Help page route */}
      </Routes>

      {/* Footer remains visible on all pages */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
