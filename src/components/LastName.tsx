import React from 'react';

interface LastNameProps {
  lastName: string;
}

const LastName: React.FC<LastNameProps> = ({ lastName }) => {
  return <p>Nazwisko: {lastName}</p>;
};

export default LastName;
