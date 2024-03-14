import React, {useState} from "react";

const Event = () => {
    const purple = '#8e44ad';
    const [bg , setbg] = useState(purple);
    const [name ,setname] = useState('Click Me');
  
    let bgChange = () => {
      // console.log('clicked');
      const newBg  = '#34495e' ;
      setbg(newBg);
      setname('ouch!! 😄')
    };
    const bgBack = () => {
      setbg(purple);
      setname('Ayyo! 💢')
    };
  
    return(
      <>
        <div style = {{backgroundColor: bg}}>
          <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name} </button>
        </div>
      </>
    );
};

export default Event;