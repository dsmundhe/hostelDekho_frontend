import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login&Signup/Login"
import Signup from "./Pages/Login&Signup/Signup"
import AboutPage from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/Contact"
import HostelManagementPage from "./Pages/Hostels/HostelManagementPage ";
import ProfilePage from "./Pages/ProfilePage.jsx/ProfilePage";
import ShowDetails from "./Pages/ShowHostel/ShowDetails";
import BookHostel from "./Pages/BookHostel/BookHostel";
import Payment from "./Pages/Payment_Page/Payment";
import PaymentSuccessful from "./Pages/Payment_successful/PaymentSuccessful";
import MyBookings from "./Pages/My_Bookings/MyBookings";
const App = () => {
  return (
    <div className="h-bg-dark-400">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/hostels" element={<HostelManagementPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/showhostel" element={<ShowDetails />}></Route>
          <Route path="/bookhostel" element={<BookHostel />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/paymentdone" element={<PaymentSuccessful />}></Route>
          <Route path="/bookings" element={<MyBookings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
