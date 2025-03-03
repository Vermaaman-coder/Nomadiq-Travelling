import React, { useState } from "react";
import { motion } from "framer-motion";

const CabBooking = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [cabType, setCabType] = useState("");

  const handleBooking = () => {
    console.log("Booking Details:", {
      pickupLocation,
      dropoffLocation,
      pickupTime,
      cabType,
    });
  };

  return (
    <div
      className="flex-grow flex items-center justify-center relative bg-cover bg-center min-h-[calc(100vh-100px)]"
      style={{
        backgroundImage:
          "url('https://w0.peakpx.com/wallpaper/653/798/HD-wallpaper-cabs-new-york-traffic-transport-yellow-abstract-graphy-bw-taxi-road-street.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-5xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Section with Hover Animation */}
        <motion.div
          className="text-center md:text-left text-white p-3 rounded-lg shadow-lg w-max"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl font-bold text-blue-600">Nomadiq</h1>
          <p className="text-xl whitespace-nowrap">
            Book your perfect car ride today
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          className="w-full max-w-md p-6 bg-white bg-opacity-90 shadow-lg backdrop-blur-md rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Cab Booking
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleBooking();
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700">Pickup Location:</label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dropoff Location:</label>
              <input
                type="text"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Pickup Time:</label>
              <input
                type="datetime-local"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Cab Type:</label>
              <select
                value={cabType}
                onChange={(e) => setCabType(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Cab Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
              </select>
            </div>
            {/* Button with Framer Motion Animation */}
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Book Cab
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CabBooking;
