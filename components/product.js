'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, FileText, Settings } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ASIAN MATRIX',
    image: '/images/Asian-Nostalgic.webp',
    catalogLink: '#',
    specificationLink: '#',
  },
  
  {
    id: 2,
    name: 'ASIAN ARENA',
    image: '/images/ee.jpg',
    catalogLink: '#',
    specificationLink: '#',
  },
   {
    id: 3,
    name: 'ASIAN',
    image: '/images/ww.jpeg',
    catalogLink: '#',
    specificationLink: '#',
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return React.createElement(
    'section',
    { className: 'bg-gray-100 py-16 px-4 sm:px-6 lg:px-8' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto' },
      React.createElement(
        'h2',
        { className: 'text-4xl text-black md:text-5xl font-bold mb-12' },
        'Our ',
        React.createElement('span', { className: 'text-orange-500' }, 'Products')
      ),
      React.createElement(
        'div',
        { className: 'relative' },
        React.createElement(
          'button',
          {
            onClick: prevSlide,
            className: 'absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-400 hover:bg-orange-500 text-white rounded-full p-3 shadow-lg transition-colors duration-300 -ml-4 md:-ml-6',
            'aria-label': 'Previous product'
          },
          React.createElement(ChevronLeft, { className: 'w-6 h-6' })
        ),
        React.createElement(
          'button',
          {
            onClick: nextSlide,
            className: 'absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-400 hover:bg-orange-500 text-white rounded-full p-3 shadow-lg transition-colors duration-300 -mr-4 md:-mr-6',
            'aria-label': 'Next product'
          },
          React.createElement(ChevronRight, { className: 'w-6 h-6' })
        ),
        React.createElement(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
          products.map((product) =>
            React.createElement(
              'div',
              {
                key: product.id,
                className: 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
              },
              React.createElement(
                'div',
                { className: 'relative h-80 w-full overflow-hidden' },
                React.createElement(Image, {
                  src: product.image,
                  alt: product.name,
                  fill: true,
                  className: 'object-cover hover:scale-105 transition-transform duration-500'
                })
              ),
              React.createElement(
                'div',
                { className: 'p-6 text-center' },
                React.createElement(
                  'h3',
                  { className: 'text-2xl font-bold text-orange-500 mb-4' },
                  product.name
                ),
                React.createElement(
                  'div',
                  { className: 'grid grid-cols-2 gap-0' },
                  React.createElement(
                    'a',
                    {
                      href: product.catalogLink,
                      className: 'flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 transition-colors duration-300 border-r border-orange-600'
                    },
                    React.createElement(FileText, { className: 'w-4 h-4' }),
                    React.createElement('span', { className: 'text-sm' }, 'Product Catalogue')
                  ),
                  React.createElement(
                    'a',
                    {
                      href: product.specificationLink,
                      className: 'flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 transition-colors duration-300'
                    },
                    React.createElement(Settings, { className: 'w-4 h-4' }),
                    React.createElement('span', { className: 'text-sm' }, 'Product Specification')
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'text-center mt-12' },
        React.createElement(
          'button',
          { className: 'inline-block px-8 py-3 bg-white text-gray-800 font-semibold text-sm tracking-wider border-b-2 border-gray-800 hover:bg-gray-50 transition-colors duration-300' },
          'ALL PRODUCTS'
        )
      )
    )
  );
}