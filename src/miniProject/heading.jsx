import React from 'react';
// import '../index.css';


// task 02 
const cssStyle = { }

let curDate = new Date(2024, 2, 4, 1 );
curDate= curDate.getHours();
let greeting = '';
if(curDate >=1 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = 'brown';
}
else if(curDate >=12 && curDate < 19){
  greeting = 'Good Afternoon';
  cssStyle.color = ' green';
}
else {
  greeting = 'Good Night';
  cssStyle.color = 'red';
}

function Heading () {

    return (
       <> 
       <div className='div-class'>
       <h1>Hello sir ,<span style = {cssStyle}> {greeting}</span></h1>
           </div>
    </>
    );
}

export default Heading; 