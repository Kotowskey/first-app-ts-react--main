import React from 'react';

interface ScholarshipProps {
  scholarship: boolean;
}

const Scholarship: React.FC<ScholarshipProps> = ({ scholarship }) => {
  return <p>Stypendium: {scholarship ? 'Tak' : 'Nie'}</p>;
};

export default Scholarship;
