import React from 'react';

export default function About() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">
          About Us
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 max-w-6xl">
          Asian Concreto has become one of the most preferred names in the Nepal construction industry because of the clear-cut strengths that set it apart from other unorganized players in the market. From using the finest raw materials to manufacturing every product with exceptional German technology, the result is that all our blocks are of top-notch quality - be it in terms of build, design, or size! Asian Concreto is the right place if you search for the best landscaping products in Nepal such as pavers, blocks, bricks, and tiles.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Products */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              25+
            </h3>
            <p className="text-gray-800 font-semibold text-lg">Products</p>
          </div>

          {/* Projects Completed */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              10000+
            </h3>
            <p className="text-gray-800 font-semibold text-lg">Projects Completed</p>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              11+
            </h3>
            <p className="text-gray-800 font-semibold text-lg">Certifications</p>
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold text-sm tracking-wider border-b-2 border-gray-800 hover:bg-gray-50 transition-colors duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}