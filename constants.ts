
import type { CommitteeMember, Sponsor } from './types';

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  { name: 'John Doe', role: 'Chairman', imageUrl: 'https://picsum.photos/seed/chairman/200' },
  { name: 'Jane Smith', role: 'Secretary', imageUrl: 'https://picsum.photos/seed/secretary/200' },
  { name: 'Peter Jones', role: 'Treasurer', imageUrl: 'https://picsum.photos/seed/treasurer/200' },
  { name: 'Mary Williams', role: 'First Team Manager', imageUrl: 'https://picsum.photos/seed/manager1/200' },
  { name: 'David Brown', role: 'Reserves Manager', imageUrl: 'https://picsum.photos/seed/manager2/200' },
  { name: 'Susan Taylor', role: 'Youth Team Coordinator', imageUrl: 'https://picsum.photos/seed/youth/200' },
];

export const SAFEGUARDING_OFFICER: CommitteeMember = {
  name: 'Eleanor Vance',
  role: 'Club Safeguarding Officer',
  imageUrl: 'https://picsum.photos/seed/safeguarding/200',
};

export const SPONSORS: Sponsor[] = [
    { name: 'Local Business A', logoUrl: 'https://picsum.photos/seed/sponsorA/200/100', websiteUrl: '#' },
    { name: 'Local Business B', logoUrl: 'https://picsum.photos/seed/sponsorB/200/100', websiteUrl: '#' },
    { name: 'Local Business C', logoUrl: 'https://picsum.photos/seed/sponsorC/200/100', websiteUrl: '#' },
    { name: 'Local Business D', logoUrl: 'https://picsum.photos/seed/sponsorD/200/100', websiteUrl: '#' },
    { name: 'Local Business E', logoUrl: 'https://picsum.photos/seed/sponsorE/200/100', websiteUrl: '#' },
    { name: 'Local Business F', logoUrl: 'https://picsum.photos/seed/sponsorF/200/100', websiteUrl: '#' },
];
