
import type { TeamData, LeagueStanding, Fixture, Result } from '../types';

// Helper function to generate mock data
const createMockLeagueTable = (teamId: string): LeagueStanding[] => {
    const teams = ['Harrow Hill AFC', 'Rival Rovers', 'Local United', 'City Wanderers', 'Town FC', 'Village Albion', 'County City', 'Borough FC'];
    const ourTeamIndex = teams.indexOf('Harrow Hill AFC');

    return teams.map((name, index) => {
        const played = 10;
        const won = Math.floor(Math.random() * (played + 1));
        const drawn = Math.floor(Math.random() * (played - won + 1));
        const lost = played - won - drawn;
        const goalsFor = Math.floor(Math.random() * 30);
        const goalsAgainst = Math.floor(Math.random() * 30);
        
        let points = (won * 3) + drawn;
        // give our team a boost based on teamId
        if (index === ourTeamIndex) {
          if(teamId.includes('first')) points += 5;
          if(teamId.includes('reserves')) points += 2;
        }

        return {
            position: index + 1,
            teamName: name,
            played,
            won,
            drawn,
            lost,
            goalsFor,
            goalsAgainst,
            goalDifference: goalsFor - goalsAgainst,
            points
        };
    }).sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference).map((team, index) => ({ ...team, position: index + 1 }));
};

const createMockFixtures = (): Fixture[] => {
    const opponents = ['Rival Rovers', 'Local United', 'City Wanderers', 'Town FC'];
    return opponents.map((opponent, i) => ({
        date: `2024-09-${(i + 1) * 7}`,
        time: '15:00',
        opponent,
        venue: i % 2 === 0 ? 'Home' : 'Away',
        competition: 'County League Premier Division'
    }));
};

const createMockResults = (): Result[] => {
    const opponents = ['Village Albion', 'County City', 'Borough FC'];
    const results: Result[] = [
      { date: '2024-08-24', opponent: opponents[0], venue: 'Home', score: '3 - 1', result: 'W', competition: 'County League Premier Division' },
      { date: '2024-08-17', opponent: opponents[1], venue: 'Away', score: '1 - 1', result: 'D', competition: 'County League Premier Division' },
      { date: '2024-08-10', opponent: opponents[2], venue: 'Home', score: '0 - 2', result: 'L', competition: 'County League Premier Division' },
    ];
    return results;
};

// Main service function
export const getTeamData = async (teamId: string): Promise<TeamData> => {
    // In a real application, you would make an API call here.
    // e.g., const response = await fetch(`https://api.fa-fulltime.com/teams/${teamId}`);
    // For now, we simulate a network delay and return mock data.
    
    console.log(`Fetching data for ${teamId}... (simulated)`);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
        fixtures: createMockFixtures(),
        results: createMockResults(),
        leagueTable: createMockLeagueTable(teamId),
    };
};
