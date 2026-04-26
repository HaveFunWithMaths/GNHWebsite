import React from 'react';
import annadhanamImg from '../assets/images/SpiritualPrograms/Annadhanam.jpeg';
import aratiImg from '../assets/images/SpiritualPrograms/Arati.jpeg';
import japaImg from '../assets/images/SpiritualPrograms/japa.jpg';
import lecturesImg from '../assets/images/SpiritualPrograms/Lectures.jpg';
import mahaPrasadamImg from '../assets/images/SpiritualPrograms/MahaPrasadam.jpeg';
import kirtansImg from '../assets/images/SpiritualPrograms/Kirtans.jpeg';

const programs = [
  { title: 'Annadhanam', image: annadhanamImg },
  { title: 'Arati', image: aratiImg },
  { title: 'Japa', image: japaImg },
  { title: 'Lectures', image: lecturesImg },
  { title: 'MahaPrasadam', image: mahaPrasadamImg },
  { title: 'Kirtans', image: kirtansImg },
];

export default function SpiritualProgram() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-4 inline-block relative">
            Spiritual Programs
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-saffron-400 rounded-full"></div>
          </h1>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Experience divine connection through our daily and weekly spiritual activities.
          </p>
        </div>

        <div className="masonry-grid">
          {programs.map((program, index) => (
            <div key={index} className="masonry-item group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide drop-shadow-md">
                  {program.title}
                </h3>
                <div className="w-12 h-1 bg-saffron-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
