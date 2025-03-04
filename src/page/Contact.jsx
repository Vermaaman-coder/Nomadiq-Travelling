import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaCommentDots, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1B1F3B] to-sky-500 text-white px-4 py-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mx-auto p-6 gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex-1 p-8 bg-gray-900 rounded-2xl shadow-lg flex flex-col items-center w-full"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
            At Nomadiq, we keep you updated on opportunities to stay competitive and make the most of tools.
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-3/4 p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full md:w-3/4 p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-2 px-6 rounded-md font-bold w-full md:w-1/2 text-center hover:bg-blue-700 transition duration-300"
          >
            SEND A MESSAGE
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex-1 p-8 bg-white text-black rounded-2xl shadow-lg w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Contact Info</h2>
          <div className="mb-4 flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-600 text-lg" />
            <div>
              <h3 className="font-semibold">Our Office</h3>
              <p className="text-sm md:text-base">Madhubani Sadar, Madhubani Bihar-847211</p>
            </div>
          </div>
          <div className="mb-4 flex items-start gap-3">
            <FaClock className="text-blue-600 text-lg" />
            <div>
              <h3 className="font-semibold">Open Office Hours</h3>
              <p className="text-sm md:text-base">M-F: 8am - 6pm</p>
              <p className="text-sm md:text-base">S-S: 10am - 4pm</p>
            </div>
          </div>
          <div className="mb-4 flex items-start gap-3">
            <FaCommentDots className="text-blue-600 text-lg" />
            <div>
              <h3 className="font-semibold">Get in Touch</h3>
              <p className="text-sm md:text-base">teamnomadiq@gmail.com</p>
              <p className="text-sm md:text-base">+91-7870759165</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/nomadiq-com-2474a7344" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a href="https://www.instagram.com/yoursnomadiq" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
