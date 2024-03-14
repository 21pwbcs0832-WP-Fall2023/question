import React from 'react';

const Images = (props) => {
    return <img src={props.imgsrc} alt = "myPic" className="card_img" /> 
}

const Heading = (props) => {
    return  <h3 className="card_title">{props.title}</h3>
}

export default Images;
export {Heading};