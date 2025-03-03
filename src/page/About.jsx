import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPlane, FaShieldAlt } from "react-icons/fa";

const cards = [
  {
    title: "AI Safety Guardian",
    description:
      "Nomadiq's AI Safety Guardian ensures a secure travel experience by monitoring user data and trip details in real-time, offering alerts on safety concerns, destination-specific advisories, and emergency support, while maintaining strict privacy and data protection standards.",
    icon: <FaShieldAlt className="text-blue-600" />,
  },
  {
    title: "Smart Booking",
    description:
      "Nomadiq's Smart Booking system takes the stress out of planning. We monitor travel prices and automatically book flights, buses, or trains when prices drop - so even if you're sleeping or busy, you'll always get the best deal. Your next adventure is just a smart booking away.",
    icon: <FaPlane className="text-green-600" />,
  },
  {
    title: "Nearby",
    description:
      "Spontaneous trips just got easier. With our Nearby Travel feature, explore hidden gems close to your current location. Find last-minute deals, local tours, and unique experiences around you, all tailored to your budget and preferences. Perfect for when you want to explore without venturing too far.",
    icon: <FaMapMarkerAlt className="text-yellow-600" />,
  },
];

function About() {
  return (
    <div className="p-4 md:p-6 min-h-screen flex flex-col md:flex-row items-center relative bg-gradient-to-r from-[#1B1F3B] to-[#87CEEB]">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-3/5 flex justify-center items-center text-center md:text-left p-4"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Nomadiq?
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-md">
            Explore the world with confidence! Our AI-driven tools make
            traveling safer, more affordable, and more spontaneous than ever
            before.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-2/5 flex flex-col space-y-3 items-center md:items-start px-4"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="shadow-lg rounded-2xl p-4 w-full sm:w-3/4 transition-transform transform border border-gray-300 bg-white"
          >
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{card.icon}</div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {card.title}
              </h2>
            </div>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;