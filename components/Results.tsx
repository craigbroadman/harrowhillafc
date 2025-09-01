
import React from 'react';
import type { Result } from '../types';
import Card from './common/Card';

interface ResultsProps {
  results: Result[];
}

const getResultBadge = (result: 'W' | 'D' | 'L') => {
  switch (result) {
    case 'W': return 'bg-green-500 text-white';
    case 'D': return 'bg-yellow-500 text-white';
    case 'L': return 'bg-red-500 text-white';
  }
};

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-club-dark">Recent Results</h3>
      <div className="space-y-4">
        {results.length > 0 ? results.map((result, index) => (
          <Card key={index} className="p-4 flex flex-col sm:flex-row justify-between items-center transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-4 w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${getResultBadge(result.result)}`}>
                {result.result}
              </span>
              <div>
                <p className="font-semibold text-club-dark">{result.opponent} ({result.venue === 'Home' ? 'H' : 'A'})</p>
                <p className="text-sm text-gray-500">{result.competition}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-lg font-bold w-full sm:w-auto justify-center">
              <span>{result.score}</span>
              <span className="text-sm text-gray-400 font-normal">{new Date(result.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
            </div>
          </Card>
        )) : <p>No recent results available.</p>}
      </div>
    </div>
  );
};

export default Results;
