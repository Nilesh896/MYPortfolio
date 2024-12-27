import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const projectList = [
    {
      title: 'Project 1',
      description: 'A description of the project, highlighting the skills used and the outcome.',
      link: 'https://www.example.com', // Replace with your project link
    },
    {
      title: 'Project 2',
      description: 'Another description with details about the technologies used.',
      link: 'https://www.example.com', // Replace with your project link
    },
    {
      title: 'Project 3',
      description: 'This project is a full-stack application that demonstrates my backend skills.',
      link: 'https://www.example.com', // Replace with your project link
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white" ref={ref}>
      <div className="container mx-auto text-center px-6">
        {/* Projects Heading */}
        <motion.h2
          className="text-5xl font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-blue-1000 p-6 rounded-lg shadow-xl transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-yellow-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
