import React from "react";
// import Else from "./Slotelse";

// solt mahine 
const SoltM = (props) =>{
    // let x = '😄';
    // let y = '😄';
    // let z =  '😄';
  
    let x = props.x;
    let y = props.y;
    let z = props.z;
    if (x===y && y===z){
      return (
        <>
        <div className="slot">
          <h1 style={{fontSize:'x-large'}}>{x} {y} {z}</h1>
          <h1 style={{fontSize:'large'}}>This is matching</h1>
          {/* <hr/> */}
          </div>
        </>
      )
    }else{
      return(
        <>
        {/* <Else/> */}
           <div className="slot">
          <h1 style={{fontSize:'x-large'}} >{x} {y} {z}</h1>
          <h1 style={{fontSize:'large'}} >This is not matching</h1>
           {/* <hr/>  */}
          </div>
        </>
      )
    }
   }

   export default SoltM;
  
