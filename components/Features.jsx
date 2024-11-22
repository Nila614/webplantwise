// src/components/DownloadSection.jsx
import React from 'react'; // For navigation
import bgImage from '../assets/img/bg2.png';
import scanIcon from '../assets/img/scan.png';
import communityIcon from '../assets/img/community.png';
import planIcon from '../assets/img/myplan.png'; // Path to the plan icon
import dictionaryIcon from '../assets/img/kamus.png';


const DownloadSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-2"
    style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-20 mt-48">
          Fitur Utama PlantWise
        </h2>
        </div>

     {/* Grid Layout for Features */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 mx-36 mt-28 mb-56">
          {/* Feature 1 */}
          <div className="bg-[rgba(221,231,215,1)] p-20 rounded-2xl shadow-lg flex flex-col items-center">
            <img src={scanIcon} alt="Scan Penyakit" className="h-24 mb-0 -mt-32" />
            <h3 className="text-xl font-semibold text-green-700 mt-8 mb-4">Scan Penyakit</h3>
            <p className="text-center text-black">
              Scan, Cegah, Rawat. Tanaman Sehat 
              <br/>dalam Genggamanmu!
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-[rgba(221,231,215,1)] p-20 rounded-2xl shadow-lg flex flex-col items-center">
            <img src={communityIcon} alt="Komunitas" className="h-24 mb-0 -mt-32" />
            <h3 className="text-xl font-semibold text-green-700 mt-8 mb-4">Komunitas</h3>
            <p className="text-center text-black">
              Berbagi, Belajar, dan Tumbuh Bersama!
            </p>
          </div>
           {/* Feature 3 */}
           <div className="bg-[rgba(221,231,215,1)] p-20 rounded-2xl shadow-lg flex flex-col items-center">
            <img src={planIcon} alt="My Plan" className="h-24 mb-0 -mt-32" />
            <h3 className="text-xl font-semibold text-green-700 mt-12 mb-8">My Plan</h3>
            <p className="text-center text-black">
              Rencanakan Perawatan Tanamanmu!
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[rgba(221,231,215,1)] p-20 rounded-2xl shadow-lg flex flex-col items-center">
            <img src={dictionaryIcon} alt="Kamus Tanaman Hias" className="h-24 mb-0 -mt-32" />
            <h3 className="text-xl font-semibold text-green-700 mt-12 mb-8">Kamus Tanaman Hias</h3>
            <p className="text-center text-black">
              Panduan Lengkap untuk Perawatan Tanamanmu!
            </p>
          </div>
          </div>
    </section>
  );
};

export default DownloadSection;
