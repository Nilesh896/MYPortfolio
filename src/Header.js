import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="bg-gradient-to-r from-blue-900 via-gray-700 to-black text-white shadow-lg sticky top-0 z-50 py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-3">
          <img src="./logo.jpg" alt="Logo" className="h-10 w-10 rounded-full border-2 border-yellow-500" />
          <h1 className="text-3xl font-extrabold text-yellow-400 hover:text-white transition duration-300 transform hover:scale-105">
            Nilesh's Portfolio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto">
          <ul className="flex space-x-8">
            <li>
              <a href="#hero" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 px-6">
          <ul className="space-y-4">
            <li>
              <a href="#hero" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition duration-200 transform hover:scale-110">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
