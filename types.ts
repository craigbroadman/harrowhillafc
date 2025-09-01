
export interface Fixture {
  date: string;
  time: string;
  opponent: string;
  venue: 'Home' | 'Away';
  competition: string;
}

export interface Result {
  date: string;
  opponent: string;
  venue: 'Home' | 'Away';
  score: string; // e.g., '2 - 1'
  result: 'W' | 'D' | 'L';
  competition: string;
}

export interface LeagueStanding {
  position: number;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface TeamData {
  fixtures: Fixture[];
  results: Result[];
  leagueTable: LeagueStanding[];
}

export interface Team {
  id: string;
  name: string;
  description: string;
  data: TeamData;
}

export interface CommitteeMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Sponsor {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}
