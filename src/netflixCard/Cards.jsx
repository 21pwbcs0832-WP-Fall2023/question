import React from 'react';
import Images, {Heading} from './Images';
function Card(props){
  // console.log(props);
  return(
    <>
    <div className='cards'>
        <div className='card'>
        {/* I create image component  */}
            {/* <img src={props.imgsrc} alt = "myPic" className="card_img" />  */}
         <Images imgsrc = {props.imgsrc} />
         <div className="card_info">
          <span className="card_category">{props.sname}</span>
          {/* <h3 className="card_title">{props.title}</h3> */}
          <Heading title = {props.title}/>
          <a href = {props.link} target="_khan">
            <button>Shop Now</button>
          </a>
        </div> 
        </div>
    </div>
    </>
    );
  }

export default Card ;