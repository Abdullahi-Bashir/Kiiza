import React from 'react';
import HeroImage from '../assets/Kiiza.png';

const Hero = () => {
  return (
    <div id="home" className="bg-black text-white text-center py-16 pt-28">
        <img 
          src={HeroImage} 
          alt="Profile of Abdullahi Bashir" 
          className="mx-auto mb-8 w-48 h-46 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Abdullahi Bashir
            </span>, Full-Stack Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300">
            I specialize in building modern and responsive web Developer.
        </p>
        <div className="mt-8 space-x-4">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">
                Contact With Me
            </button>
            <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white px-4 py-2 rounded-full">
                Resume
            </button>
        </div>
    </div>
  );
};

export default Hero;
