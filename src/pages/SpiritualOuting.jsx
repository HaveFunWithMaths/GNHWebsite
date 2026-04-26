import React from 'react';
import sriRangamImg from '../assets/images/CulturalOuting/Srirangam.jpeg';
import kanchiPuramImg from '../assets/images/CulturalOuting/KanchiPuram.jpeg';
import lecturesImg from '../assets/images/CulturalOuting/Lectures.jpg';
import yatraGroupImg from '../assets/images/CulturalOuting/Yatra Group Photo.jpeg';
import kidsImg from '../assets/images/CulturalOuting/Kids.jpeg';

const outings = [
  { title: 'SriRangam', image: sriRangamImg },
  { title: 'KanchiPuram', image: kanchiPuramImg },
  { title: 'Lectures', image: lecturesImg },
  { title: 'Yatra Group Photo', image: yatraGroupImg },
  { title: 'Kids Zone', image: kidsImg },
];

export default function SpiritualOuting() {
  return (
    <div className="min-h-screen bg-saffron-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-4 inline-block relative">
            Spiritual Outing
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-saffron-400 rounded-full"></div>
          </h1>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Journey with us to sacred places, experiencing spiritual elevation together as a community.
          </p>
        </div>

        <div className="masonry-grid">
          {outings.map((outing, index) => (
            <div key={index} className="masonry-item group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-white/50">
              <img
                src={outing.image}
                alt={outing.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide drop-shadow-md">
                  {outing.title}
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
