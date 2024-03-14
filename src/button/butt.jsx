// import React from 'react';
import React, { useState } from "react";



const Button = () => {

    const [count, setCount] = useState(0);
    let IncNum = () => {
        setCount(count + 1);
        // console.log('clicked'+ count++);
    };

    return (
        <div>
            <h1> {'('+count+')'} </h1>
            <button onClick={IncNum}>Click Me</button>
        </div>
    );
};

export default Button;
