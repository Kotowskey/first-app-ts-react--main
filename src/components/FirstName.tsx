import React from 'react';

interface FirstNameProps {
  firstName: string;
}

const FirstName: React.FC<FirstNameProps> = ({ firstName }) => {
  return <p>Imię: {firstName}</p>;
};

export default FirstName;
