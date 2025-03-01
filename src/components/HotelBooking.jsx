import { useState } from "react";

export default function HotelSearchPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="relative h-screen w-full p-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://wallpapercave.com/wp/wp1846068.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center h-full text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mt-25">
          Find the right hotel today
        </h2>

        <div className="mt-6 bg-white p-3 rounded-lg flex flex-col md:flex-row items-center shadow-lg w-full max-w-4xl gap-2 md:gap-4">
          <input
            type="text"
            placeholder="Enter destination or hotel name"
            size="30"
            className="p-2 border border-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-t-none text-black"
          />

          <input
            type={checkIn ? "date" : "text"}
            placeholder="Check-in"
            className="p-2 border border-gray-300 w-full md:flex-1 text-black"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = checkIn ? "date" : "text")}
          />
          <input
            type={checkOut ? "date" : "text"}
            placeholder="Check-out"
            className="p-2 border border-gray-300 w-full md:flex-1 text-black"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = checkOut ? "date" : "text")}
          />
          <input
            type="number"
            placeholder="1 Adults"
            className="p-2 border border-gray-300 w-full md:flex-1 text-black"
          />
          <button className="bg-orange-500 text-white px-5 py-2 rounded-b-lg md:rounded-r-lg md:rounded-b-none w-full md:w-auto cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
