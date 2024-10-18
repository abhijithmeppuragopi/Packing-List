import { useState } from "react";
import Items from "./items";
export default function List({item,deleteitem1, toggleItem,clear}){
    const [sortinput,setsortinput]=useState('input');
    let sorteditems;
  
    if(sortinput==='input') sorteditems=item;
    if(sortinput==='description') sorteditems=item
    .slice()
    .sort((a,b)=> a.description.localeCompare(b.description));
    if(sortinput ==='selected') sorteditems=item
    .slice()
    .sort((a,b)=> Number(a.packed) - Number(b.packed)) ;
  
  
    return <div className="list">
      <ul>
        {sorteditems.map((m)=> <Items item= {m} deleteItem1={deleteitem1} toggleItem={toggleItem}/>)}
      </ul>
      <div className="actions">
        <select value={sortinput} onChange={(e)=>setsortinput(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="selected">sort by selected items</option>
        </select>
        <button onClick={clear}>Clear List</button>
  
      </div>
      </div>
    
  }