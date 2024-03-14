import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Accordian from './component/Accordian';

// import Increment from './IncreDecre/Increment';
// import List from './ToDoLists/DList';
// import List from './ToDoLists/List';
// import Loginform from './loginform/LoginForm';
// import Event from './EventB/Event';
// import Clock from './DigitalClock/Clock';
// import Time from './TimeSlot/Time';
// import Button from './button/butt';
// import SoltM from "./SlotMachine/Slot";
// import  Laptop from "./netflixCard/Laptop";
// import Ecommerce from "./netflixCard/Ecommerce";
// import Card from './netflixCard/Cards';
// import data from './netflixCard/data';
// import Add , {Sub , Mul ,Divi} from './simpleCalculator/Calculator';
// import Heading from './miniProject/heading';
// import Heading from './Heading';
// import Para from './Para'; 
// import Orderlist from './Orderlist';



const  App = () => {
  return(
    <>
      <Accordian/>
    </>
  );
}

export default App;











// task 10


// const  App = () => {
//   return(
//     <>
//      <Increment/>
//     </>
//   );
// }






// task 09

// const  App = () => {
//   return(
//     <>
//       <List/>
//     </>
//   );
// }

// export default App;




// task 09
// const App = () => {

//   const [InputItem , setInputItem] = useState("");
//   const [Items , setItems] = useState([]);

//   const itemEvent = (e) => {
//   // console.log(e.target.value);
//   setInputItem(e.target.value);

//   }

//   const ListOfItems = () =>{
//       setItems((oldVal) => { 
//         return [...oldVal, InputItem];
//       });

//       setInputItem("");
//   };
//   const deleteItems = (id) => {
//     console.log("deleteItems");
//     setItems((oldVal) => {
//       return oldVal.filter((arrElem , index) => {
//         return index !== id;
//       });
//     });
// };

//   return(
//     <>
//      <div className='main-div'>
//       <div className='center-div'>
//         <br/>
//         <h1> ToDo List </h1>
//         <br/>
//         <input type='text' placeholder='Add To Items' value={InputItem} onChange={itemEvent}/>
//         <button onClick={ListOfItems}> + </button>

//         <ol>
//           {/* <li> {InputItem} </li> */}

//             { Items.map((itemval, index) => {
//            return  <ToDoList key= {index} id = {index}  text = {itemval} onSelect = {deleteItems}/>
//           })};
//         </ol>
//       </div>
//      </div>
//     </>
//   );
// }

// export default App;







// task 08


// const App = () => {

//   return(
//     <>
//      <Loginform/>
//     </>
//   );
// }




// task 07

// const App = () => {

//   return(
//     <>
//       <Event />
//     </>
//   );
// }






// task 06 
// const App = () => {

//   return(
//     <>
//       <Clock/>
//     </>
//   );
// }



// task 05
// const App = () => {
//   return(
//     <>
//      <Time/>
//     </>
//   );
// }






// task 04
// const App = () => {
//   return(
//     <>
//       <Button/>
//     </>
//   );
// }



// task 03

// const  App =() =>{
//   return(
//       <>
//        <h1 className="heading-style">
//         🎰 Welcome to <span style={{fontWeight: "bold" , backgroundColor: 'lightblue'}}>Slot Machine Game</span> 🎰  
//         </h1>
//         <div className="slot-container">
//         <SoltM x = '😄' y = '😄' z = '😄'/>
//         <hr/>
//         <SoltM x = '🍌' y = '😄' z = '🍎'/>
//         <hr/>
//         <SoltM x = '😄' y = '😄' z = '😄'/>
//         <hr/>
//         <SoltM x = '🍌' y = '😄' z = '🍎'/>
//         <hr/>
//         <SoltM x = '🍌' y = '🍌' z = '🍌'/>
        
//         </div>
//       </>
//   );
// };



















// task 02

// const favS = 'ecommerce';

// function App(){
//   return(
//       <>
//      <h1 className="heading-style">Welcome to Ecommerce Website</h1>
//      {favS === "ecommerce"?  <Ecommerce/> :  <Laptop/>}   { /*ternary operator */}
//       </>
//   );
// }


// const FavS = ()=>{
//   if(favS === "ecommerce"){
//     return <Ecommerce/>;
//   }
//   else{
//     return <Laptop/>;
//   }
// }

  /* <FavS/> */

// function App(){
//   return(
//       <>
//      <h1 className="heading-style">Welcome to Ecommerce Website</h1>
//        {data.map((val)=>{
//         return(
//         <Card 
//               key={val.id}
//               imgsrc={val.imgsrc}
//               title={val.title}
//               sname={val.sname}
//               link={val.link}
//           />
//          );
//       })}
//       </>
//   );
// }
// export default App ;

// card 
// console.log(data[0].sname);

// array mapping function 
// function ecard(val){
//   return(
//     <Card imgsrc = {val.imgsrc}
//     title = {val.title}
//     sname = {val.sname}
//     link =  {val.link}
//    />
//   );
// }
 /* <Card imgsrc = {data[0].imgsrc}
      title = {data[0].title}
      sname = {data[0].sname}
      link =  {data[0].link}
     /> */
     /* <Card imgsrc = {data[1].imgsrc}
      title = {data[1].title}
      sname = {data[1].sname}
      link =  {data[1].link}
     />
      <Card imgsrc = {data[2].imgsrc}
      title = {data[2].title}
      sname = {data[2].sname}
      link =  {data[2].link}
     />
      <Card imgsrc = {data[3].imgsrc}
      title = {data[3].title}
      sname = {data[3].sname}
      link =  {data[3].link}
     /> */


// function app() {
//   return (
//     <>
//     <ol>
//       <li>sum of two number = {Add(3 , 4)}</li>
//       <li>sum of two number = {Sub(30 , 4)}</li>
//       <li>sum of two number = {Mul(30 , 4)}</li>
//       <li>sum of two number = {Divi(30 , 4)}</li>
//     </ol>
//     </>
//   );
// }