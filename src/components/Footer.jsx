import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002B88] text-white py-8 px-4 md:px-6">
      <div className="max-w-8xl mx-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold">Nomadiq</h2>
          <p className="mt-2 text-sm">
            Smart Booking automatically finds and books flights at the lowest price, so you don’t have to set your preferences, and let Nomadiq handle the rest!
          </p>
        </div>

        {/* Center Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">USEFUL LINKS</h3>
            <ul className="mt-2 space-y-1">
              <li className="hover:underline cursor-pointer">
                <a href="/about">About us</a>
              </li>
              {/* Coming Soon */}
              {/* <li className="hover:underline cursor-pointer">
                <a href="/careers">Careers</a>
              </li> */}
              <li className="hover:underline cursor-pointer">
                <a href="/contact">Contact us</a>
              </li>
            </ul>
            </div>
  
          {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold">CONTACT INFO</h3>
          <p className="mt-2 text-sm">
            <span className="font-bold">Address:</span> Madhubani Sadar, Madhubani, Bihar-847211, INDIA
          </p>
          <p className="text-sm">+91-7870759165</p>
        </div>
      </div>

      <hr className="border-gray-500 my-6" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-center">
        <div className="flex space-x-4 justify-center md:justify-start w-full md:w-auto">
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end w-full md:w-auto">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/nomadiq-com-2474a7344" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a href="https://www.instagram.com/yoursnomadiq" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl cursor-pointer hover:scale-110 transition duration-200" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
