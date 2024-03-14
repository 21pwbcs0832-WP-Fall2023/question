import React, { useState } from 'react'
import {Question} from './api';
import Myaccordian from './Myaccordian';
import './accordian.css';

const Accordian = () => {
    const [data , setdata] = useState(Question);
  return (
    <>
       <div className='Main-div'>
        <h1> React Interview  Questions </h1>
        {
            data.map((currElem) => {
                const {id} = currElem;
                 return <Myaccordian key= {id} {...currElem} />;
            })
        }
        
    </div>
    </>
  )
}

export default Accordian
