// Features.jsx
import React from "react";
import { FaWifi, FaLock, FaBuilding, FaRupeeSign } from "react-icons/fa";

const features = [
  { icon: <FaWifi />, title: "Free Wi-Fi", desc: "High-speed internet in every hostel." },
  { icon: <FaLock />, title: "Secure Stay", desc: "Verified listings and safe environment." },
  { icon: <FaBuilding />, title: "Premium Hostels", desc: "Top-rated hostels across cities." },
  { icon: <FaRupeeSign />, title: "Affordable Prices", desc: "Comfort and quality on a budget." },
];

const Features = () => {
  return (
    <div className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Why HostelDekho?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-blue-500 text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
