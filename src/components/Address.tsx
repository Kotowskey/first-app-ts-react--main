import React from 'react';

interface AddressProps {
  address: string;
}

const Address: React.FC<AddressProps> = ({ address }) => {
  return <p>Adres: {address}</p>;
};

export default Address;
