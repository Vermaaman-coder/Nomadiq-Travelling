import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlightBooking from "./components/FlightBooking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HotelBooking from "./components/HotelBooking";
import Home from "./page/Home";
// import About from "./page/About";
import CarBooking from "./components/CarBooking";
import Help from "./components/Help";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightBooking />} />
        <Route path="/hotels" element={<HotelBooking />} />
        <Route path="/cab-hire" element={<CarBooking />} />
        {/* <Route path="/contact" element={<p>Contact Us</p>} /> */}
        {/* <Route path="/about" element={<p>About Us</p>} /> */}
        <Route path="/help" element={<Help />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
