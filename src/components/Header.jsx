import { useEffect, useRef, useState } from "react";
import { FaCar, FaHotel, FaPlane } from "react-icons/fa";
import {
  IoMdGlobe,
  IoMdHeart,
  IoMdHelpCircle,
  IoMdMenu,
  IoMdPerson,
} from "react-icons/io";
import { MdFlag } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RegionalSettingsModal from "./RegionalSettings";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bg-[#002B88] text-white px-15 py-7 flex items-center justify-between relative shadow-md">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <div
              className="w-25 h-10 bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: "url('./image.png')" }}
            ></div>
          </Link>
          <nav className="hidden md:flex space-x-3">
            {[
              { to: "/flights", icon: <FaPlane />, label: "Flights" },
              { to: "/hotels", icon: <FaHotel />, label: "Hotels" },
              { to: "/cab-hire", icon: <FaCar />, label: "Cab hire" },
            ].map((item, index) => (
              <Link key={index} to={item.to}>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#0044AA" }}
                  className="relative bg-[#0066FF] px-5 py-2 text-md rounded-full flex items-center space-x-2 text-white hover:bg-[#0055CC] transition cursor-pointer"
                >
                  {item.icon} <span>{item.label}</span>
                </motion.button>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex space-x-7 items-center">
          {[IoMdGlobe, IoMdHeart, IoMdPerson].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, color: "#66CCFF" }}
              className="text-xl cursor-pointer transition"
            >
              <Icon />
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.1, color: "#66CCFF" }}
            className="bg-transparent text-md font-semibold cursor-pointer transition"
          >
            Log in
          </motion.button>
          <motion.div
            ref={menuButtonRef}
            className="text-white text-2xl cursor-pointer transition-transform duration-300"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            whileHover={{ scale: 1.2, color: "#66CCFF" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMdMenu />
          </motion.div>
        </div>

        <div
          ref={menuRef}
          className={`absolute right-6 top-16 bg-white text-black rounded-lg shadow-lg w-60 py-3 z-50 border border-gray-200 transform transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <ul>
            {[
              { to: "/flights", icon: <FaPlane />, label: "Flights" },
              { to: "/hotels", icon: <FaHotel />, label: "Hotels" },
              { to: "/cab-hire", icon: <FaCar />, label: "Cab hire" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to={item.to} className="flex items-center space-x-3 w-full">
                  {item.icon} <span>{item.label}</span>
                </Link>
              </li>
            ))}
            <hr className="border-gray-300 my-2" />
            <li className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <MdFlag className="text-[#0066FF]" /> <span>Regional settings</span>
            </li>
            <li className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
              <IoMdHelpCircle className="text-[#0066FF]" />
              <Link to="/help" className="text-[#1B1F3B] hover:text-[#0066FF]">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <RegionalSettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
