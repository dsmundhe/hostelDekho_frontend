import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 px-6 mt-10 border-t shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">HostelDekho</h2>
          <p className="text-sm">
            Your trusted companion to find the best hostels with ease and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/hostels" className="hover:text-blue-500">Hostels</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-blue-600 text-xl">
            <a href="#" className="hover:scale-110 transition"><FaFacebookF /></a>
            <a href="#" className="hover:scale-110 transition"><FaTwitter /></a>
            <a href="#" className="hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" className="hover:scale-110 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HostelDekho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
