import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-12">
      <div className="contaier mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Social Icons */}
        <div>
          <img src="./images/logo.png" alt="Logo" className="mx-auto md:mx-0 mb-4" />
          <div className="flex justify-center md:justify-start gap-4">
            <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          </div>
        </div>
        
        {/* Footer Links */}
        <div>
          <h2 className="font-bold text-lg mb-3">Interiorwaale</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Join Us</a></li>
            <li><a href="#" className="hover:underline">Partner With Us</a></li>
            <li><a href="#" className="hover:underline">Residential Space</a></li>
            <li><a href="#" className="hover:underline">Commercial Space</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Customer Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
            <li><a href="#" className="hover:underline">Cost Estimator</a></li>
            <li><a href="#" className="hover:underline">Add Company</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Other Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Join Us</a></li>
            <li><a href="#" className="hover:underline">Partner With Us</a></li>
            <li><a href="#" className="hover:underline">Residential Space</a></li>
            <li><a href="#" className="hover:underline">Commercial Space</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
