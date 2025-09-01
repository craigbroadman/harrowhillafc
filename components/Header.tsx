import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface NavLinkProps {
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

interface HeaderProps {
    onNavigate: (sectionId: string) => void;
    teamIds: {id: string; name: string}[];
}

const Header: React.FC<HeaderProps> = ({ onNavigate, teamIds }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [teamsDropdownOpen, setTeamsDropdownOpen] = useState(false);

    const handleNavClick = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate(sectionId);
        setMobileMenuOpen(false);
        setTeamsDropdownOpen(false);
    };

    const toggleTeamsDropdown = () => setTeamsDropdownOpen(!teamsDropdownOpen);

    const navLinks = [
        { id: 'teams', label: 'Teams', dropdown: true },
        { id: 'committee', label: 'Committee' },
        { id: 'safeguarding', label: 'Safeguarding' },
        { id: 'feed', label: 'Socials' },
        { id: 'sponsors', label: 'Sponsors' },
    ];
    
    return (
      <nav className="bg-club-maroon sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                 <a href="#home" onClick={handleNavClick('home')} className="flex items-center space-x-3">
                    <img className="h-12 w-12" src="/images/crest.png" alt="Harrow Hill AFC Crest"/>
                    <span className="text-white font-bold text-xl">Harrow Hill AFC</span>
                 </a>
              </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map(link => 
                    link.dropdown ? (
                       <div className="relative" key={link.id}>
                          <button onClick={toggleTeamsDropdown} className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                              <span>{link.label}</span>
                              <ChevronDownIcon className={`w-4 h-4 ml-1 transform transition-transform ${teamsDropdownOpen ? 'rotate-180' : ''}`}/>
                          </button>
                          {teamsDropdownOpen && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                                  {teamIds.map(team => (
                                      <a key={team.id} href={`#${team.id}`} onClick={handleNavClick(team.id)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{team.name}</a>
                                  ))}
                              </div>
                          )}
                       </div>
                    ) : (
                      <NavLink key={link.id} href={`#${link.id}`} onClick={handleNavClick(link.id)}>{link.label}</NavLink>
                    )
                  )}
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="bg-club-maroon inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => 
                link.dropdown ? (
                    <div key={link.id}>
                        <button onClick={toggleTeamsDropdown} className="text-gray-300 hover:bg-white/10 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">Teams</button>
                        {teamsDropdownOpen && (
                            <div className="pl-4">
                                {teamIds.map(team => (
                                    <a key={team.id} href={`#${team.id}`} onClick={handleNavClick(team.id)} className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{team.name}</a>
                                 ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <a key={link.id} href={`#${link.id}`} onClick={handleNavClick(link.id)} className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    );
};

export default Header;