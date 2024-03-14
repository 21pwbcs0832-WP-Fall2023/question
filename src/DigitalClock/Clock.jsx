import React, {useState} from 'react';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [Ctime, setCtime] = useState(time);
  
    const Updated = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
    };
  
    setInterval(Updated, 1);
    return(
      <>
        <h1> {Ctime} </h1>
        <button > Diital Clock </button>
      </>
    );
}

export default Clock;