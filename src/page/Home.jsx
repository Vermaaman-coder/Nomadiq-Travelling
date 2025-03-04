import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUserFriends,
  FaFilter,
  FaPlane,
} from "react-icons/fa";

const faqs = [
  {
    question: "How does Nomadiq work?",
    answer:
      "Smart Booking automatically finds and books flights at the lowest price, so you don’t have to set your preferences, and let Nomadiq handle the rest!",
  },
  {
    question: "How can I find the cheapest flight using Nomadiq?",
    answer:
      "You can compare different airlines, use flexible dates, and book in advance to find the best deals.",
  },
  {
    question: "What is smart booking?",
    answer:
      "Smart Booking is an AI-powered system that helps you find the best flights based on your preferences automatically.",
  },
  {
    question: "Can I set price alerts for flights?",
    answer:
      "Yes! You can enable price alerts to get notified when fares drop, helping you book at the best price.",
  },
  {
    question: "Are there hidden fees in the ticket price?",
    answer:
      "No, we provide full pricing transparency, including taxes and fees, so you see the total cost upfront.",
  },
];

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [sortBy, setSortBy] = useState("Lowest");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col mt-10 mb-20 items-center justify-center min-h-screen space-y-6 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-300 to-blue-500 p-6 rounded-lg shadow-lg w-full max-w-6xl"
      >
        <h1 className="text-3xl font-bold text-black mb-4">Book a flight</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg flex items-center justify-center"
          >
            <img
              alt="Airplane flying over a world map"
              className="w-60 h-50 object-cover rounded-lg"
              src="/image/flight-container.png"
            />
          </motion.div>
          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-black">
                  From
                </label>
                <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                  <FaPlaneDeparture className="text-gray-500 mr-2" />
                  <input
                    className="bg-transparent flex-1 outline-none"
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter departure location"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-black">
                  To
                </label>
                <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                  <FaPlaneArrival className="text-gray-500 mr-2" />
                  <input
                    className="bg-transparent flex-1 outline-none"
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Enter destination"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-black">
                  Date
                </label>
                <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <input
                    className="bg-transparent flex-1 outline-none"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-black">
                  Passengers
                </label>
                <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                  <FaUserFriends className="text-gray-500 mr-2" />
                  <button
                    className="bg-transparent text-gray-500"
                    onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                  >
                    -
                  </button>
                  <span className="mx-2">{passengers}</span>
                  <button
                    className="bg-transparent text-gray-500"
                    onClick={() => setPassengers((p) => p + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-blue-700 text-white py-2 rounded-lg"
          >
            Book Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg"
          >
            Smart Booking
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white flex items-center justify-center w-full max-w-6xl p-6 rounded-lg shadow-lg"
      >
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">Result</h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Sort by</span>
              <select
                className="bg-transparent outline-none font-semibold"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Lowest">Lowest</option>
                <option value="Highest">Highest</option>
                <option value="Fastest">Fastest</option>
              </select>
              <FaFilter className="text-blue-500" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center">
              <div className="text-3xl font-bold">{from || "Departure"}</div>
            </div>
            <div className="flex items-center">
              <div className="border-t border-dashed border-gray-400 w-32"></div>
              <motion.div
                className="bg-blue-500 text-white rounded-full p-2 mx-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPlane />
              </motion.div>
              <div className="border-t border-dashed border-gray-400 w-32"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{to || "Destination"}</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-black p-6 rounded-lg shadow-lg w-full max-w-6xl text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('')",
        }}
      >
        <h2 className="text-2xl font-bold">Holiday TRAVEL PLAN</h2>
        <p className="text-lg">GET EXTRA 50% OFF</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonum
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white p-6 rounded-lg w-full max-w-6xl"
        style={{ maxHeight: "400px" }}
      >
        <h1 className="text-3xl font-bold flex justify-center text-center text-blue-700 tracking-wide">
          Booking flights with Nomadiq
        </h1>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 pb-2"
              whileHover={{ scale: 1.02 }}
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold py-2 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
