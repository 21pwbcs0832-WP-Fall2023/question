import React, { useState } from 'react';

const Incremnet = () => {

    const [Increm , setIncre] = useState(0)
    let Increment = () => {
        setIncre(Increm + 1);
    };
    let Decrement = () => {
        if(Increm > 0){
        setIncre(Increm - 1);
    }else {
        alert('Sorry, Zero Limited Reached');
        setIncre(0);
    }
    };

    return (
        <div className='Main-div'>
            <div className='Center-div'>
            <h1>{Increm} </h1>
            <div className='btn-div'>
                <button onClick={Increment}> Increm </button>
                <button onClick={Decrement}> Decrem </button>
            </div>
            </div>
        </div>
    )
}

export default Incremnet;