import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Practice</div>
        <button className="text-white block lg:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul
          className={`hidden lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/">
            <li className="mr-3 text-white hover:text-gray-300">Home</li>
          </Link>
          <li className="mr-3 text-white hover:text-gray-300">Dashboard</li>
          <Link to="/login">
            <li className="mr-3 text-white hover:text-gray-300">Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
