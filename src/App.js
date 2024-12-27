import React from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import About from './About.js';
import Projects from './projects.js';
import Contact from './contacts.js';
import Footer from './Footer.js';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About /> {/* Add About section here */}
      <Projects /> {/* Add Projects section here */}
      <Contact /> {/* Add Contact section here */}
      <Footer />
    </div>
  );
}

export default App;
