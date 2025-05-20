import React from "react";
import {Link} from "react-router"
const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto mt-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-blue-600">Hostel</span>
            <span className="text-red-500">Dek</span>
            <span className="text-yellow-500">h</span>
            <span className="text-green-600">o</span> – Your Stay, Your Way!
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Explore trusted hostels for students and travelers. Verified
            listings, quick booking, and real reviews — all in one place.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 px-4 sm:px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Empower every student and traveler to easily find the best hostel
              with safety, comfort, and convenience.
            </p>
          </div>
          <div className="bg-green-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              To become the most trusted hostel discovery platform across India
              and beyond, delivering value and innovation at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Verified Listings",
              "Smart Booking",
              "User Feedback",
              "Responsive Design",
              "Modern Interface",
              "Secure Platform",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {title} – Learn how we make finding your perfect stay easy and
                  reliable.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dipak Mundhe",
                image:
                  "https://res.cloudinary.com/dmchat-app/image/upload/v1747757834/io52x3sh6fccfqq6nsq5.jpg",
              },
              {
                name: "Aashvi Tekade",
                image:
                  "https://res.cloudinary.com/dmchat-app/image/upload/v1747760138/vqzkmdvyopbczlh7x2vh.png",
              },
              {
                name: "Amogh Nagarkar",
                image:
                  "https://res.cloudinary.com/dmchat-app/image/upload/v1747760216/n615rsbsfpar3n0aktdb.png",
              },
              {
                name: "Maithili Ghodmare",
                image:
                  "https://res.cloudinary.com/dmchat-app/image/upload/v1747760180/ecjp4twviiv5w1ymrpjy.png",
              },
              {
                name: "Yogesh Nande",
                image:
                  "https://res.cloudinary.com/dmchat-app/image/upload/v1747760251/t7ahnbwufs8iqvybkzhf.png",
              },
              {
                name: "Sahil Atram",
                image:
                  "https://res.cloudinary.com/dmchat-app/image/upload/v1747760721/b7gncjw8pcmfoq9vbtug.png",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-medium text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">Team Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Ready to find your next stay?
          </h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Whether you're relocating or just exploring, HostelDekho makes
            booking easier and smarter.
          </p>
         <Link  to='/hostels'> <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
            Get Started
          </button></Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
