
import React from 'react';
import type { Fixture } from '../types';
import Card from './common/Card';

interface FixturesProps {
  fixtures: Fixture[];
}

const Fixtures: React.FC<FixturesProps> = ({ fixtures }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-club-dark">Upcoming Fixtures</h3>
      <div className="space-y-4">
        {fixtures.length > 0 ? fixtures.map((fixture, index) => (
          <Card key={index} className="p-4 flex flex-col sm:flex-row justify-between items-center transition-shadow hover:shadow-lg">
            <div className="w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
              <p className="font-semibold text-club-maroon">{fixture.opponent}</p>
              <p className="text-sm text-gray-500">{fixture.competition}</p>
            </div>
            <div className="flex items-center space-x-4 text-sm w-full sm:w-auto justify-center">
              <span className={`px-2 py-1 rounded ${fixture.venue === 'Home' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                {fixture.venue}
              </span>
              <span>{new Date(fixture.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
              <span>{fixture.time}</span>
            </div>
          </Card>
        )) : <p>No upcoming fixtures.</p>}
      </div>
    </div>
  );
};

export default Fixtures;