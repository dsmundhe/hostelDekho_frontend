import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import LoaderTwo from "../Loader/LoaderTwo"

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (!user || !token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post(
          "https://hostel-dekho-backend.vercel.app/user/getbooking",
          { email: user.email },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.booking) {
          setBookings(response.data.booking);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 py-10 px-4 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-green-800 mb-10 drop-shadow-md mt-10">
        🧳 My Bookings
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 text-center">{<LoaderTwo/>}</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">{<LoaderTwo/>}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {booking.name}
              </h3>
              <p className="flex items-center text-gray-700 mb-1">
                <FaMapMarkerAlt className="mr-2 text-green-600" />
                {booking.city}
              </p>
              <p className="flex items-center text-gray-700 mb-1">
                <FaCalendarAlt className="mr-2 text-blue-600" />
                From: {booking.fromDate}
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <FaCalendarAlt className="mr-2 text-blue-600" />
                To: {booking.toDate}
              </p>
              <p className="flex items-center text-lg font-bold text-gray-900">
                <FaRupeeSign className="mr-1 text-yellow-600" />
                {booking.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
