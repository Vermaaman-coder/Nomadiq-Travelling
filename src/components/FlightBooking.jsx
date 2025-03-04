import { useState } from "react";
import { motion } from "framer-motion";

const FlightBooking = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [passengers, setPassengers] = useState(1);

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <motion.div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://www.onthebeach.co.uk/blog/wp-content/uploads/2016/04/blog-plane.jpg')",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="bg-[#11172B] text-white p-10 rounded-2xl shadow-xl w-full max-w-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-xl font-semibold mb-6">
          ✈️ The Best Flight Deals Worldwide
        </h2>
        <div className="space-y-4">
          <div className="relative flex items-center">
            <div className="flex-1">
              <label className="block text-lg">From:</label>
              <input
                type="text"
                className="w-full p-2 text-lg rounded bg-gray-800 border border-gray-600"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <motion.button
              className="p-2 bg-gray-700 rounded-full mx-3 mt-6"
              onClick={swapLocations}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🔄
            </motion.button>
            <div className="flex-1">
              <label className="block text-lg">To:</label>
              <input
                type="text"
                className="w-full p-2 text-lg rounded bg-gray-800 border border-gray-600"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="block text-lg">Check-in:</label>
              <input
                type="date"
                className="w-full p-2 text-lg rounded bg-gray-800 border border-gray-600"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-lg">Check-out:</label>
              <input
                type="date"
                className="w-full p-2 text-lg rounded bg-gray-800 border border-gray-600"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm">Passengers:</label>
            <input
              type="number"
              min="1"
              className="w-full p-2 text-lg rounded bg-gray-800 border border-gray-600"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
          <motion.button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-lg mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
          <motion.button
            className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl text-lg mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Smart Booking
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlightBooking;
