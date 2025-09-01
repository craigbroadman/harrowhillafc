import React from 'react';
import { SAFEGUARDING_OFFICER } from '../constants';
import Card from './common/Card';

const SafeguardingSection: React.FC = () => {
  return (
    <section id="safeguarding" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <div className="lg:col-span-1">
             <Card className="text-center">
                {/* FIX: Corrected typo in constant name from SAFEGUARDING_OFFICer to SAFEGUARDING_OFFICER. */}
                <img src={SAFEGUARDING_OFFICER.imageUrl} alt={SAFEGUARDING_OFFICER.name} className="w-full h-64 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-club-dark">{SAFEGUARDING_OFFICER.name}</h3>
                  <p className="text-club-maroon font-semibold">{SAFEGUARDING_OFFICER.role}</p>
                  <p className="mt-2 text-gray-600">Contact: safeguarding@harrowhillafc.example.com</p>
                </div>
            </Card>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Club Safeguarding</h2>
            <p className="mt-4 text-lg text-gray-300">
              Harrow Hill AFC is committed to providing a safe and enjoyable environment for all our players, especially children and young people. We adhere to The FA's Safeguarding Policies and Procedures.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              If you have any concerns about the welfare of a child or the behaviour of an adult towards a child or young person under 18 years of age, please do not hesitate to contact our Club Safeguarding Officer in confidence.
            </p>
            <div className="mt-6">
                <a href="#" className="inline-block bg-club-maroon text-white font-bold py-3 px-6 rounded-md hover:bg-club-maroon/90 transition-colors">
                    View Safeguarding Policy
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeguardingSection;