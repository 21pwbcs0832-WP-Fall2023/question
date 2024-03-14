import React from 'react';
import Card from './Cards';
import data from './data'



const Laptop = ()=>{
    return(
        <Card 
          key={data[3].id}
          imgsrc={data[3].imgsrc}
          title={data[3].title}
          sname={data[3].sname}
           link={data[3].link}
         />
     );
};

export default Laptop;