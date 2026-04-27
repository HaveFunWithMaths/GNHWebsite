import React from 'react';
import deitiesImg from '../assets/images/Home/Deities.jpg';
import swatiMtjImg from '../assets/images/Home/SwatiMtj.jpg';
import amalMDasImg from '../assets/images/Home/Mr. Amal M Das.png';
import sreenivasPrImg from '../assets/images/Home/SreenivasPr.jpg';
import groupPhotoImg from '../assets/images/Home/GroupPhoto.jpeg';
import { Users, Utensils, BookOpen, HeartHandshake } from 'lucide-react';

const stats = [
  { label: 'People Touched', value: '2,000+', icon: Users, color: 'text-saffron-500' },
  { label: 'Prasadam Distributed', value: '3,000+ Plates', icon: Utensils, color: 'text-maroon-500' },
  { label: 'Spriritual Books Distributed', value: '1,000+ Books', icon: BookOpen, color: 'text-saffron-600' },
  { label: 'Ramayana Sessions Conducted', value: '70+', icon: HeartHandshake, color: 'text-maroon-600' },
];

const members = [
  { name: 'Swarupa Radhika Devi Dasi', image: swatiMtjImg },
  { name: 'Amal M Das', image: amalMDasImg },
  { name: 'Sreenivas Gupta', image: sreenivasPrImg },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src={deitiesImg}
            alt="Radha Vrindavan Bihari"
            className="w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 md:pb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 drop-shadow-lg text-center md:text-left">
            Radha Vrindavan Bihari
          </h1>
          <p className="text-xl md:text-2xl text-saffron-100 max-w-2xl text-center md:text-left drop-shadow-md">
            Welcome to a sanctuary of peace, devotion & spiritual growth.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-saffron-50 relative -mt-8 rounded-t-[2rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-saffron-100/50"
                >
                  <div className={`mx-auto w-16 h-16 rounded-full bg-saffron-50 flex items-center justify-center mb-6 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 font-serif">{stat.value}</h3>
                  <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-16 relative inline-block">
            Our Guides
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-saffron-400 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {members.map((member, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-white group-hover:border-saffron-300 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-maroon-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-maroon-900 mb-16 relative inline-block">
            Meet Our Team
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-saffron-400 rounded-full"></div>
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl relative inline-block w-full max-w-5xl mx-auto border-8 border-white group">
            <img
              src={groupPhotoImg}
              alt="Our Community Team"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
