import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/4 mb-6 lg:pr-10 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p>
              Your website description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF></FaFacebookF>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter></FaTwitter>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-gray-700 w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 mb-2"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
