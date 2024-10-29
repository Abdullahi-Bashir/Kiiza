import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import MyProject from './components/MyProject';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialIcons from './components/SocialIcons';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <SocialIcons />
      
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Service />
        </section>

        <section id="projects">
          <MyProject />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
