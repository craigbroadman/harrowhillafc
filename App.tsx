
import React, { useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import CommitteeSection from './components/CommitteeSection';
import SafeguardingSection from './components/SafeguardingSection';
import FacebookFeed from './components/FacebookFeed';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

const App: React.FC = () => {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  const teams = useMemo(() => [
    { id: 'first-team', name: 'First Team', description: 'Our senior team competing in the County League Premier Division.' },
    { id: 'reserves', name: 'Reserves', description: 'Our reserve squad, a vital part of our club\'s depth.' },
    { id: 'a-team', name: 'A Team', description: 'Competing in the North Gloucestershire League Division One.' },
    { id: 'b-team', name: 'B Team', description: 'Showcasing talent in the North Gloucestershire League Division Two.' },
    { id: 'youth-team', name: 'Youth Team', description: 'Developing the next generation of Hillmen.' },
  ], []);

  const handleNavigate = (sectionId: string) => {
    // A little hacky, but find the element by ID for navigation
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans">
      <Header onNavigate={handleNavigate} teamIds={teams.map(t => ({id: t.id, name: t.name}))} />
      <main>
        <Hero onNavigate={handleNavigate} />

        {teams.map(team => (
            <TeamSection key={team.id} team={team} />
        ))}
        
        <div id="committee">
          <CommitteeSection />
        </div>
        
        <div id="safeguarding">
           <SafeguardingSection />
        </div>
        
        <div id="feed">
           <FacebookFeed />
        </div>
        
        <div id="sponsors">
           <Sponsors />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default App;
