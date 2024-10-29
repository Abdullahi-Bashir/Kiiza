import React from 'react';

const Navbar = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full top-0 z-50">
        <div className="container py-2 flex justify-center md:justify-between items-center">
            <div className="text-2xl font-bold hidden md:inline">Kiiza</div>
            <div className="space-x-6">
                <a 
                    href="#home" 
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                    className="hover:text-gray-400 cursor-pointer"
                >
                    Home
                </a>
                <a 
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                    }}
                    className="hover:text-gray-400 cursor-pointer"
                >
                    About
                </a>
                <a 
                    href="#services"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                    }}
                    className="hover:text-gray-400 cursor-pointer"
                >
                    Services
                </a>
                <a 
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('projects');
                    }}
                    className="hover:text-gray-400 cursor-pointer"
                >
                    Projects
                </a>
                <a 
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className="hover:text-gray-400 cursor-pointer"
                >
                    Contact
                </a>
            </div>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                Connect Me
            </button>
        </div>
    </nav>
  );
};

export default Navbar;
