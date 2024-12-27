import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-gray-800 to-black text-white h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
        {/* Profile Picture */}
        <motion.img
          src="./Nilesh pic3.jpg"
          alt="Nilesh"
          className="w-64 h-64 rounded-full border-8 border-blue-700 shadow-lg mb-8 md:mb-0 md:w-96 md:h-96 flex-shrink-0"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <div className="flex-1 text-center md:text-left md:ml-12"> {/* Added margin to the left */}
          {/* Headline with Horizontal Scrolling */}
          <motion.div
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="text-yellow-400 inline-block"
              animate={{
                x: ["0%", "100%"],
                transition: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                },
              }}
            >
              Hi, I'm Nilesh
            </motion.span>
          </motion.div>
          {/* Short Intro */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A passionate web developer turning creative ideas into amazing digital experiences.
          </motion.p>
          {/* New sentences */}
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            With expertise in cutting-edge technologies, I deliver elegant and efficient solutions that enhance user interaction. Let's build something extraordinary together.
          </motion.p>
          <motion.a
            href="#projects"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg shadow-lg font-semibold hover:bg-yellow-600 transition duration-300 transform hover:scale-105 mt-8 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            View My Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
