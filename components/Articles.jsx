import React from 'react';

// Image for Articles
import articleImage1 from '../assets/img/art1.png';  // replace with actual image for articles
import articleImage2 from '../assets/img/art2.png';  // replace with actual image for articles
import articleImage3 from '../assets/img/art3.png';  // replace with actual image for articles

const Articles = () => {
  return (
    <section className="py-28 bg-[rgba(234,239,231,1)]">
  <div className="container mx-auto px-36">
    <h2 className="text-4xl font-bold text-green-800 mb-20 text-center ">
      Artikel Terkini
    </h2>

        {/* Articles List */}
        <div className="space-y-8">
          {/* Article 1 */}
          <div className="flex items-center bg-white  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={articleImage1} alt="Article" className="flex h-107 w-256 object-cover rounded-lg mr-6" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">23 Oktober 2024</span>
              <h3 className="text-xl font-semibold text-green-800 mt-2">
                5 Tanaman Hias Yang Cocok Bagi Pemula
              </h3>
              <p className="text-gray-700 mt-2">
                Panduan memilih dan merawat tanaman hias yang cocok untuk pemula. Mulai dari ZZ Plant hingga...
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={articleImage2} alt="Article" className="h-107 w-256 object-cover rounded-lg mr-6" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">23 Oktober 2024</span>
              <h3 className="text-xl font-semibold text-green-800 mt-2">
                5 Tanaman Hias Yang Cocok Bagi Pemula
              </h3>
              <p className="text-gray-700 mt-2">
                Panduan memilih dan merawat tanaman hias yang cocok untuk pemula. Mulai dari ZZ Plant hingga...
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="flex items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={articleImage3} alt="Article" className="h-107 w-256 object-cover rounded-lg mr-6" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">23 Oktober 2024</span>
              <h3 className="text-xl font-semibold text-green-800 mt-2">
                5 Tanaman Hias Yang Cocok Bagi Pemula
              </h3>
              <p className="text-gray-700 mt-2">
                Panduan memilih dan merawat tanaman hias yang cocok untuk pemula. Mulai dari ZZ Plant hingga...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
