import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPaymentDetails } from "../../features/showHostelSlice/showHostelSlice";

const BookHostel = () => {
  const dispatch=useDispatch();
  const data = useSelector((val) => val.hostelDekho.data[0]);
  const navigate = useNavigate();

  const hostel = {
    name: data.name,
    city: data.city,
    price:data.price,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    contact: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, city, contact, fromDate, toDate } = formData;
    if (!name || !email || !city || !contact || !fromDate || !toDate) {
      toast.error("Please fill in all the fields before proceeding.");
      return;
    }

    toast.success("All fields are valid! Redirecting to payment...");
    setTimeout(() => {
      navigate("/payment");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-8 mt-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700">Book Hostel</h2>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Hostel:</span>
            <span className="font-bold text-red-400"> {hostel.name} </span>
            <span className="font-semibold">| City:</span>
            <span className="font-bold text-red-400"> {hostel.city} </span>
            <span className="font-semibold">| Price:</span>
            <span className="font-bold text-green-500"> {hostel.price} ₹</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              type="text"
            />
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              type="email"
            />
            <InputField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your City"
              type="text"
            />
            <InputField
              label="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Phone Number"
              type="tel"
            />
            <InputField
              label="From Date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              type="date"
            />
            <InputField
              label="To Date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              type="date"
            />
          </div>

          <button
          onClick={()=>dispatch(addPaymentDetails(formData))}
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Booking
          </button>
        </form>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default BookHostel;
