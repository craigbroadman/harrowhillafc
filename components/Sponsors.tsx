import React from 'react';
import { SPONSORS } from '../constants';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Sponsors</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">A huge thank you to the businesses that support our club.</p>
        </div>
        <div className="mt-12">
            <div className="bg-white/90 rounded-xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {SPONSORS.map(sponsor => (
                    <a key={sponsor.name} href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex justify-center transition-transform transform hover:scale-110">
                        <img className="max-h-16 object-contain" src={sponsor.logoUrl} alt={sponsor.name} />
                    </a>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;