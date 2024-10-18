import { useState } from "react";
export default function Form({addItems}){

    const [description,setDescription] = useState("");
    const [numItems,setnumItems] = useState(1);
    
    
    function formUpdate(e){
      e.preventDefault();
      if(!description){
        return
      }
      const itemList={ id: Date.now(), description, numItems, packed: false };
      addItems(itemList);
      // setpackingList(...itemList,itemList);
      console.log(itemList);
      setDescription("");
      setnumItems(1);
      
      }
    
      return <div className='add-form'>
       
       <h3>What would do you like to pack</h3> 
       <form onSubmit={formUpdate}>
          
          <select value={numItems} onChange={(e)=>setnumItems(Number(e.target.value))}>
            {Array.from({length:20},(_,i)=>i+1).map((num)=><option value={num} key={num}>{num}</option>)}
            
          </select>
          
          <input type="text" placeholder="Type here..." value={description} onChange={(e)=>
            setDescription(e.target.value)}></input>
          <button>Add</button>
    
        </form>
    
      </div>
    }