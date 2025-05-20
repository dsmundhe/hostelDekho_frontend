import React from 'react';
import { Link } from 'react-router-dom'; // Use 'react-router-dom' for web apps

const PaymentSuccessful = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 text-center max-w-md w-full">
        <img
          src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif"
          alt="Payment successful"
          className="w-42  mx-auto mb-6"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>
        <Link to="/bookings">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
          Go to Booking!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
