import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="about" className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 text-center" ref={ref}>
        {/* About Me Heading with fade-in */}
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Introduction with slide-up animation */}
        <motion.p
          className="text-xl md:text-2xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm <span className="text-yellow-400">Nilesh</span>, a passionate developer with a love for crafting elegant and user-friendly websites.
          My expertise lies in front-end technologies like React, and I have a growing interest in backend development. I constantly explore new tools
          and frameworks to expand my knowledge and build impactful solutions.
        </motion.p>

        {/* Skills Section with fade-in and scale-up effect */}
        <motion.h3
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          My Skills
        </motion.h3>

        {/* Skills Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            className="flex items-center bg-red-500 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src="./react logo.png" alt="React" className="w-8 h-8 mr-3" />
            React
          </motion.div>
          <motion.div
            className="flex items-center bg-violet-700 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <img src="./javascript logo.png" alt="JavaScript" className="w-8 h-8 mr-3" />
            JavaScript
          </motion.div>
          <motion.div
            className="flex items-center bg-blue-400 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img src="./css logo.png" alt="CSS" className="w-8 h-8 mr-3" />
            CSS
          </motion.div>
          <motion.div
            className="flex items-center bg-teal-400 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <img src="./tailwandcss logo.png" alt="Tailwind CSS" className="w-8 h-8 mr-3" />
            Tailwind CSS
          </motion.div>
          <motion.div
            className="flex items-center bg-pink-400 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <img src="./figma logo.jpeg" alt="Figma" className="w-8 h-8 mr-3" />
            Figma
          </motion.div>
          <motion.div
            className="flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <img src="./node js logo.png" alt="Node.js" className="w-8 h-8 mr-3" />
            Node.js
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
