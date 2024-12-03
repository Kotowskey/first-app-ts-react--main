import React from 'react';

interface GroupProps {
  group: string;
}

const Group: React.FC<GroupProps> = ({ group }) => {
  return <p>Grupa: {group}</p>;
};

export default Group;
