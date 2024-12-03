import React from 'react';

type MyProps={
    surname: string
}

function App1({surname}:MyProps) {
    
  return (
    <>
      
      <h1>Surname: {surname} </h1>
    </>
  );
}

export default App1;
