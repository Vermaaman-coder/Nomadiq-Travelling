import React, { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";

const FlightBooking = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
  };

  const swapLocations = () => {
    setFormData({
      ...formData,
      from: formData.to,
      to: formData.from,
    });
  };

  return (
    <div
      className="flex h-screen w-full overflow-auto p-8 items-start"
      style={{
        backgroundImage:
          "url('https://www.onthebeach.co.uk/blog/wp-content/uploads/2016/04/blog-plane.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Form Container */}
      <div className="mt-20 mx-auto w-full max-w-xl p-8 bg-[#1B1F3B] bg-opacity-90 shadow-md backdrop-blur-md rounded-md">
        <h1 className="text-lg font-semibold text-white text-center flex items-center justify-center gap-2 mb-4">
          <FaPlaneDeparture className="text-blue-400 text-l" />
          The best flight offers from anywhere, to everywhere
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex space-x-4 items-center">
            <div className="flex-1">
              <label className="block text-gray-300 text-sm">From:</label>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border border-gray-500 rounded bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="button"
              onClick={swapLocations}
              className="text-white text-xl mt-4"
            >
              <AiOutlineSwap />
            </button>
            <div className="flex-1">
              <label className="block text-gray-300 text-sm">To:</label>
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border border-gray-500 rounded bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-300 text-sm">Check-in:</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border border-gray-500 rounded bg-gray-900 text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-300 text-sm">Check-out:</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-500 rounded bg-gray-900 text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex space-x-2 items-end">
            <div className="flex-1">
              <label className="block text-gray-300 text-sm">Passengers:</label>
              <input
                type="number"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                min="1"
                required
                className="w-full px-2 py-1 border border-gray-500 rounded bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm py-2 px-6 rounded hover:from-blue-600 hover:to-blue-800 transition cursor-pointer"
            >
              Book Now
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm py-2 px-6 rounded hover:from-blue-500 hover:to-blue-700 transition cursor-pointer"
            >
              Smart Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightBooking;
