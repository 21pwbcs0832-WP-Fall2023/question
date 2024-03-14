import React from 'react';
import Card from './Cards';
import data from './data';


const Ecommerce = ()=>{
    return(
        <Card 
          key={data[1].id}
          imgsrc={data[1].imgsrc}
          title={data[1].title}
          sname={data[1].sname}
           link={data[1].link}
         />
     );
};

export default Ecommerce;

