import React, { useState, useEffect, useCallback } from 'react';
import type { Team, TeamData } from '../types';
import { getTeamData } from '../services/faFullTimeService';
import Fixtures from './Fixtures';
import Results from './Results';
import LeagueTable from './LeagueTable';

interface TeamSectionProps {
  team: Omit<Team, 'data'>;
}

type ActiveTab = 'fixtures' | 'results' | 'table';

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('fixtures');
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeamData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // This simulates a call to the FA Full-Time feed
      const data = await getTeamData(team.id);
      setTeamData(data);
    } catch (err) {
      setError('Failed to load team data. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [team.id]);
  
  useEffect(() => {
    fetchTeamData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team.id]);

  const renderTabContent = () => {
    if (loading) {
      return <div className="text-center p-8 text-gray-700">Loading data...</div>;
    }
    if (error) {
      return <div className="text-center p-8 text-red-500">{error}</div>;
    }
    if (!teamData) {
      return <div className="text-center p-8 text-gray-700">No data available for this team.</div>;
    }

    switch (activeTab) {
      case 'fixtures':
        return <Fixtures fixtures={teamData.fixtures} />;
      case 'results':
        return <Results results={teamData.results} />;
      case 'table':
        return <LeagueTable standings={teamData.leagueTable} />;
      default:
        return null;
    }
  };
  
  const TabButton: React.FC<{tab: ActiveTab, label: string}> = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors ${
        activeTab === tab 
          ? 'bg-white text-club-maroon border-b-2 border-club-maroon' 
          : 'text-gray-300 hover:bg-gray-700/50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id={team.id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{team.name}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">{team.description}</p>
        </div>
        <div className="mt-12">
          <div className="border-b border-gray-700">
            <nav className="-mb-px flex space-x-2 sm:space-x-4" aria-label="Tabs">
              <TabButton tab="fixtures" label="Fixtures" />
              <TabButton tab="results" label="Results" />
              <TabButton tab="table" label="League Table" />
            </nav>
          </div>
          <div className="mt-8 bg-white p-4 sm:p-6 rounded-b-lg rounded-r-lg shadow-md">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;