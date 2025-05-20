import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-10 mt-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-4">
          Contact <span className="text-blue-600">HostelDekho</span>
        </h2>
        <p className="text-gray-600 text-center mb-8 text-base sm:text-lg">
          Have questions, feedback, or partnership inquiries? We’re happy to connect with you.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
