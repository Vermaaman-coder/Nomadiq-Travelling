import { useState } from "react";
import { motion } from "framer-motion";

export default function HotelSearchPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="relative h-screen w-full p-4">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://wallpapercave.com/wp/wp1846068.jpg)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center h-full text-white px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mt-25 mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Find the right hotel today
        </motion.h2>

        <motion.div
          className="mt-10 bg-white p-3 md:p-5 rounded-lg flex flex-col md:flex-row items-center shadow-lg w-full max-w-md sm:max-w-lg md:max-w-4xl gap-2 md:gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.input
            type="text"
            placeholder="Enter destination or hotel name"
            size="30"
            className="p-2 border border-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-t-none text-black"
            whileFocus={{ scale: 1.05 }}
          />

          <motion.input
            type={checkIn ? "date" : "text"}
            placeholder="Check-in"
            className="p-2 border border-gray-300 w-full md:flex-1 text-black"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = checkIn ? "date" : "text")}
            whileFocus={{ scale: 1.05 }}
          />

          <motion.input
            type={checkOut ? "date" : "text"}
            placeholder="Check-out"
            className="p-2 border border-gray-300 w-full md:flex-1 text-black"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = checkOut ? "date" : "text")}
            whileFocus={{ scale: 1.05 }}
          />

          <motion.input
            type="number"
            placeholder="1 Adults"
            className="p-2 border border-gray-300 w-full md:flex-1 text-black"
            whileFocus={{ scale: 1.05 }}
          />

          <motion.button
            className="bg-orange-500 text-white px-5 py-2 rounded-b-lg md:rounded-r-lg md:rounded-b-none w-full md:w-auto cursor-pointer hover:bg-orange-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
