import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto flex-grow bg-gradient-to-b from-[#1B1F3B] to-[#87CEEB] text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start">
        
        {/* Language & Currency Button */}
        <div className="mb-4">
          <button className="bg-[#0066FF] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0052CC]">
            United Kingdom &middot; English (UK) &middot; £ GBP
          </button>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          {/* Help Section */}
          <div>
            <p className="font-semibold">Help</p>
            <ul>
              <li className="cursor-pointer hover:underline">Privacy Settings</li>
              <li className="cursor-pointer hover:underline">Log in</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <p className="font-semibold">Legal</p>
            <ul>
              <li className="cursor-pointer hover:underline">Cookie policy</li>
              <li className="cursor-pointer hover:underline">Privacy policy</li>
              <li className="cursor-pointer hover:underline">Terms of service</li>
              <li className="cursor-pointer hover:underline">Company Details</li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <p className="font-semibold">Explore</p>
            <ul>
              <li className="cursor-pointer hover:underline">Company</li>
              <li className="cursor-pointer hover:underline">Partners</li>
              <li className="cursor-pointer hover:underline">Trips</li>
              <li className="cursor-pointer hover:underline">International Sites</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-6 text-sm">
        <p>Smart Booking flights from anywhere, to everywhere</p>
        <p>© Nomadiq Ltd 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
