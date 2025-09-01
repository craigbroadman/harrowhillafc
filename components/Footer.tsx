
import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-club-maroon text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Harrow Hill AFC. All rights reserved.</p>
            <p className="text-sm text-gray-400">The home of the Hillmen.</p>
          </div>
          <div className="flex justify-center space-x-6 w-full md:w-auto">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-club-gold transition-colors">
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" />
            </a>
            {/* Add other social links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;