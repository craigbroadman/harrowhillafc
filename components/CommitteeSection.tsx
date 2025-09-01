import React from 'react';
import { COMMITTEE_MEMBERS } from '../constants';
import type { CommitteeMember } from '../types';
import Card from './common/Card';

const MemberCard: React.FC<{ member: CommitteeMember }> = ({ member }) => (
  <Card className="text-center transition-transform transform hover:-translate-y-1">
    <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h3 className="text-lg font-bold text-club-dark">{member.name}</h3>
      <p className="text-club-maroon">{member.role}</p>
    </div>
  </Card>
);

const CommitteeSection: React.FC = () => {
  return (
    <section id="committee" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Committee</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">The dedicated volunteers running our club.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COMMITTEE_MEMBERS.map(member => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;