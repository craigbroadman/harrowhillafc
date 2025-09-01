import React from 'react';

interface HeroProps {
    onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('first-team'); // Navigate to the first team section
    };

    return (
        <div className="relative bg-club-navy text-white" id="home">
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                <img src="/images/crest.png" alt="Harrow Hill AFC Crest" className="mx-auto h-32 w-32 md:h-48 md:w-48 mb-6"/>
                <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
                    Welcome to Harrow Hill AFC
                </h1>
                <p className="mt-6 max-w-3xl text-xl mx-auto">
                    The official home of the Hillmen. Follow our journey through the season with the latest fixtures, results, and news.
                </p>
                <div className="mt-10">
                    <a
                        href="#first-team"
                        onClick={handleCTAClick}
                        className="inline-block bg-club-gold text-club-maroon font-bold py-3 px-8 border border-transparent rounded-md shadow-md text-base hover:bg-club-gold/80 transition-transform transform hover:scale-105"
                    >
                        View First Team
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;