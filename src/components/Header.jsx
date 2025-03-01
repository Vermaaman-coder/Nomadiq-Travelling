import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";
import {
  IoMdGlobe,
  IoMdHeart,
  IoMdPerson,
  IoMdMenu,
  IoMdHelpCircle,
} from "react-icons/io";
import { MdFlag } from "react-icons/md";
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
      <header className="bg-gradient-to-r from-[#1B1F3B] to-[#3B82F6] text-white px-8 py-5 flex items-center justify-between relative shadow-md">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold cursor-pointer">Skyscanner</h1>
          <nav className="hidden md:flex space-x-3">
            <button className="relative bg-[#0066FF] px-5 py-2 text-md rounded-full flex items-center space-x-2 text-white hover:bg-[#0055CC] transition">
              <FaPlane className="text-white text-lg" /> <span>Flights</span>
            </button>
            <button className="relative border border-gray-400 px-5 py-2 text-md rounded-full flex items-center space-x-2 text-white hover:bg-[#1C2B45] transition">
              <FaHotel className="text-white text-lg" /> <span>Hotels</span>
            </button>
            <button className="relative border border-gray-400 px-5 py-2 text-md rounded-full flex items-center space-x-2 text-white hover:bg-[#1C2B45] transition">
              <FaCar className="text-white text-lg" /> <span>Car hire</span>
            </button>
          </nav>
        </div>

        <div className="flex space-x-5 items-center">
          <IoMdGlobe className="text-gray-200 text-xl cursor-pointer hover:text-gray-400 transition" />
          <IoMdHeart className="text-gray-200 text-xl cursor-pointer hover:text-gray-400 transition" />
          <IoMdPerson className="text-gray-200 text-xl cursor-pointer hover:text-gray-400 transition" />
          <button className="bg-transparent text-md font-semibold cursor-pointer hover:text-gray-400 transition">
            Log in
          </button>
          <IoMdMenu
            ref={menuButtonRef}
            className={`text-white text-2xl cursor-pointer hover:text-gray-300 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
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
            <li className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
              <FaPlane className="text-[#0066FF]" /> <span>Flights</span>
            </li>
            <li className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
              <FaHotel className="text-[#0066FF]" /> <span>Hotels</span>
            </li>
            <li className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
              <FaCar className="text-[#0066FF]" /> <span>Car hire</span>
            </li>
            <hr className="border-gray-300 my-2" />
            <li
              className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <MdFlag className="text-[#0066FF]" />{" "}
              <span>Regional settings</span>
            </li>
            <li className="flex items-center space-x-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
              <IoMdGlobe className="text-[#0066FF]" />{" "}
              <span>Explore everywhere</span>
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

      {/* ✅ Regional Settings Modal (Controlled by State) */}
      <RegionalSettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
