
import React from 'react';
import type { LeagueStanding } from '../types';

interface LeagueTableProps {
  standings: LeagueStanding[];
}

const LeagueTable: React.FC<LeagueTableProps> = ({ standings }) => {
  const headers = ['Pos', 'Team', 'P', 'W', 'D', 'L', 'GD', 'Pts'];
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-club-dark">League Table</h3>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map(header => (
                <th key={header} scope="col" className={`px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${header === 'Team' ? 'w-1/2' : ''}`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {standings.map((row) => (
              <tr key={row.position} className={row.teamName === 'Harrow Hill AFC' ? 'bg-club-skyblue/20 font-bold' : ''}>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm">{row.position}</td>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm text-gray-900">{row.teamName}</td>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm">{row.played}</td>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm">{row.won}</td>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm">{row.drawn}</td>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm">{row.lost}</td>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm">{row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}</td>
                <td className="px-2 md:px-4 py-4 whitespace-nowrap text-sm font-bold">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;