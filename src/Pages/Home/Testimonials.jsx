// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Riya Sharma",
    review: "HostelDekho helped me find the best hostel in Pune. Smooth and reliable!",
  },
  {
    name: "Amit Verma",
    review: "Clean UI, great support, and verified hostels. 10/10 would recommend.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="italic text-gray-700">“{t.review}”</p>
            <p className="mt-4 font-semibold text-blue-600">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
