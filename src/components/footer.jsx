import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Logo / Brand */}
        <h2 className="text-white text-xl font-bold mb-4">Elimax<span className="text-purple-500">•</span>ai</h2>
        
        {/* Horizontal Menu */}
        <ul className="flex gap-8 mb-6 text-sm">
          <li><a href="#" className="hover:text-white">Product</a></li>
          <li><a href="#" className="hover:text-white">Services</a></li>
          <li><a href="#" className="hover:text-white">Company</a></li>
          <li><a href="#" className="hover:text-white">More</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaYoutube className="w-4 h-4" /></a>
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaFacebook className="w-4 h-4" /></a>
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaInstagram className="w-4 h-4" /></a>
                    <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaLinkedin className="w-4 h-4" /></a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">Copyright © 2025.</p>
      </div>
    </footer>
  );
}
