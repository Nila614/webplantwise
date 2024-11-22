// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';  // Adjusted path for the logo

const Navbar = () => {
  return (
    <header 
    className="fixed top-5 left-0 w-full z-20 bg-cover bg-center bg-no-repeat py-6 px-4"
    style={{ backgroundImage: `url('/assets/img/bg1.png')` }}  // Removed bg-cover to ensure a white background
    >
      <div className=" mx-12 flex justify-between items-center text-green-800">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="PlantWise Logo" className="h-12" />
            <h1 className="text-3xl font-bold cursor-pointer">PlantWise</h1>
          </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link to="/plan" className="hover:text-green-500">My Plan</Link>
          <Link to="/community" className="hover:text-green-500">Komunitas</Link>
          <Link to="/scan" className="hover:text-green-500">Scan Penyakit</Link>
          <Link to="/articles" className="hover:text-green-500">Artikel</Link>
          <Link to="/plant-dictionary" className="hover:text-green-500">Kamus Tanaman</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
