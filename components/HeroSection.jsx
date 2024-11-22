// src/components/HeroSection.jsx
import React from 'react';
import appstore from '../assets/img/appstore.png';
import playstore from '../assets/img/playstore.png';
import phoneMockup from '../assets/img/phone1.png';
import bgImage from '../assets/img/bg1.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${bgImage})` }}>

      {/* Main container */}
      <div className="container mx-auto flex flex-col justify-center items-center text-center lg:flex-row lg:text-left lg:items-center lg:space-x-12">

        {/* Left Side: Phone Image */}
        <div className="flex-1 max-w-md mx-auto lg:max-w-lg">
          <img 
            src={phoneMockup}
            alt="PlantWise App" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Right Side: Text */}
        <div className="lg:w-1/2 space-y-4 mt-6 lg:mt-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl font-bold text-green-800">
            Ayo mulai merawat 
            <br/>tanaman hias!
          </h1>
          <p className="text-2xl text-green-800">
            PlantWise - Solusi cerdas
            <br/>untuk tanaman hias
          </p>
          <div>
            <Link to="/articles">
              <button className="mt-4 bg-green-800 text-white px-16 py-2 rounded shadow hover:bg-green-700 transition duration-300 ease-in-out">
                Mulai Sekarang
              </button>
            </Link>
          </div>
          
          {/* Download Buttons */}
          <div className="flex space-x-8 mt-4 justify-center lg:justify-start">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-105"
            >
              <img src={appstore} alt="Download on App Store" className="h-10" />
            </a>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-105"
            >
              <img src={playstore} alt="Get it on Play Store" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
