import React from 'react';

interface DateOfBirthProps {
  dateOfBirth: string;
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({ dateOfBirth }) => {
  return <p>Data Urodzenia: {dateOfBirth}</p>;
};

export default DateOfBirth;
