import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <div className="container mx-auto text-center">
        <p className="text-lg">Feel free to get in touch with me!</p>
        <div className="flex justify-center space-x-8 mt-4">
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin size={30} />
            </a>
            <span className="mt-2">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaGithub size={30} />
            </a>
            <span className="mt-2">GitHub</span>
          </div>
        </div>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Nilesh. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
