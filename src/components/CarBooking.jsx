import React, { useState } from "react";

const CabBooking = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [cabType, setCabType] = useState("");

  const handleBooking = () => {
    console.log("Booking Details:", {
      pickupLocation,
      dropoffLocation,
      pickupTime,
      cabType,
    });
  };

  return (
    <div
      className="flex-grow flex items-center justify-center relative bg-cover bg-center min-h-[calc(100vh-100px)]"
      style={{
        backgroundImage:
          "url('https://w0.peakpx.com/wallpaper/653/798/HD-wallpaper-cabs-new-york-traffic-transport-yellow-abstract-graphy-bw-taxi-road-street.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-65 w-full max-w-5xl px-6">
        
        <div className="text-center md:text-left text-white p-3 rounded-lg shadow-lg w-max"
     style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
  <h1 className="text-5xl font-bold text-blue-600">Nomadiq</h1>
  <p className="text-xl whitespace-nowrap">Book your perfect car ride today</p>
</div>



        <div className="w-full max-w-md p-6 bg-white bg-opacity-90 shadow-lg backdrop-blur-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Cab Booking
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleBooking();
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700">Pickup Location:</label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dropoff Location:</label>
              <input
                type="text"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Pickup Time:</label>
              <input
                type="datetime-local"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Cab Type:</label>
              <select
                value={cabType}
                onChange={(e) => setCabType(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Cab Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
            >
              Book Cab
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CabBooking;
