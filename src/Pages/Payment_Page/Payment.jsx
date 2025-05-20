import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

const Payment = () => {
  const navigate=useNavigate();
  const [paymentData, setPaymentData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const data = useSelector((val) => val.hostelDekho.data[0]);
  const getPaymentData = useSelector((val) => val.hostelDekho.paymentDetails);
const handleSubmit = async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  if (!user || !token) {
    alert("User not authenticated");
    return;
  }

  try {
    // Send booking data to backend
    const res = await axios.post(
      "https://hoste-dekho-backend.vercel.app/user/booking",
      {
        name: data.name,
        price: data.price,
        fromDate: getPaymentData.fromDate,
        toDate: getPaymentData.toDate,
        city: data.city,
        email: user.email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.msg === "Booking added successfully!") {
      // Optionally, navigate to a success page
      navigate("/paymentdone");
    } else {
      alert("⚠️ " + res.data.msg);
    }
  } catch (error) {
    console.error("Booking Error:", error);
    
  }
};


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Payment Details
        </h2>

        {/* Booking Summary */}
        <div className="mb-6 border border-blue-200 rounded-lg p-4 bg-blue-50">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Booking Summary
          </h3>
          <p>
            <span className="font-medium">Hostel:</span> {data.name}
          </p>
          <p>
            <span className="font-medium">City:</span> {data.city}
          </p>
          <p>
            <span className="font-medium">Duration:</span>
            <span className=" text-red-600">
              {" "}
              {getPaymentData.fromDate} {"  "} to {getPaymentData.toDate}
            </span>
          </p>
          <p>
            <span className="font-medium">Amount:</span>
            <span className="text-green-500"> {data.price}₹</span>
          </p>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              name="nameOnCard"
              value={paymentData.nameOnCard}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9012 3456"
              required
              maxLength={19}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="password"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
                maxLength={4}
                required
              />
            </div>
          </div>

          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Pay ₹ {data.price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
