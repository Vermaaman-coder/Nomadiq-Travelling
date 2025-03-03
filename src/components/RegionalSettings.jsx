import React, { useState } from "react";

const RegionalSettings = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState("English (United Kingdom)");
  const [country, setCountry] = useState("United Kingdom");
  const [currency, setCurrency] = useState("GBP - £");

  if (!isOpen) return null;

  const handleSave = () => {
    console.log("Saved Settings:", { language, country, currency });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Regional settings</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-600 hover:text-gray-900 transform transition duration-200 hover:scale-110"
          >
            &times;
          </button>
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Language</label>
          <select
            className="w-full p-2 border rounded mt-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English (United Kingdom)</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Country / Region</label>
          <p className="text-sm text-gray-600">
            Selecting the country you’re in will give you local deals and
            information.
          </p>
          <select
            className="w-full p-2 border rounded mt-1"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Currency</label>
          <select
            className="w-full p-2 border rounded mt-1"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>INR - ₹</option>
            <option>USD - $</option>
            <option>EUR - €</option>
          </select>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <button
            onClick={handleSave}
            className="bg-[#001F3F] text-white py-2 rounded hover:bg-[#17324D]"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionalSettings;
