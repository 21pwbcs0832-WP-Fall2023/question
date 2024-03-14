import React, { useState } from 'react';

const Time = () => {
    let newTime = new Date().toLocaleTimeString();
  const [Ctime , setCtime] = useState(newTime);
  const UpdateTime = () => {
     newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  return(
    <>
     <h1> {Ctime} </h1>
     <button onClick={UpdateTime}> Get Time </button>
    </>
  );
}

export default Time;