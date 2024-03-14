
import React, {useState} from "react";
import ToDoList from './ToDList';


const List = () => {


  const [InputItem , setInputItem] = useState("");
  const [Items , setItems] = useState([]);

  const itemEvent = (e) => {
  // console.log(e.target.value);
  setInputItem(e.target.value);

  }

  const ListOfItems = () =>{
      setItems((oldVal) => { 
        return [...oldVal, InputItem];
      });

      setInputItem("");
  };
  const deleteItems = (id) => {
    console.log("deleteItems");
    setItems((oldVal) => {
      return oldVal.filter((arrElem , index) => {
        return index !== id;
      });
    });
};

  return(
    <>
     <div className='main-div'>
      <div className='center-div'>
        <br/>
        <h1> ToDo List </h1>
        <br/>
        <input type='text' placeholder='Add To Items' value={InputItem} onChange={itemEvent}/>
        <button onClick={ListOfItems}> + </button>

        <ol>
          {/* <li> {InputItem} </li> */}

            { Items.map((itemval, index) => {
           return  <ToDoList key= {index} id = {index}  text = {itemval} onSelect = {deleteItems}/>
          })};
        </ol>
      </div>
     </div>
    </>
  );
}

export default List;