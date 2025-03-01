import React from "react";

const Help = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/we-can-help-blackboard-background_58466-3397.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full bg-white py-4 flex justify-between items-center px-8 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Skyscanner</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Flights</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Hotels</button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">Car Hire</button>
        </div>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold text-white">How can we help?</h2>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-80 px-4 py-3 border border-gray-400 rounded-l-lg focus:outline-none"
          />
          <button className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Help;
