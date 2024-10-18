import { useState } from "react";


export default function App() {
  const [packingList, setpackingList] = useState([]);

  function handleAddItems(items){
    setpackingList((item)=>[...item,items])
    console.log(setpackingList);
  }
  function deleteItem(id){
    console.log(id)
    setpackingList((list)=>list.filter((list)=>list.id !==id))
  }
  function checkToggleItem(id){
    setpackingList((list)=> list.map((lists)=> 
      lists.id===id ? {...lists, packed:!lists.packed}:lists))
  }
  function deleteItems(){
    const confirmed=window.confirm('are you sure you want to delete all')
    
   if(confirmed) setpackingList([]);
  }

  return (
    <div className="app">
      <Header/>
      <Form addItems={handleAddItems} />
      <List item={packingList} deleteitem1={deleteItem} toggleItem={checkToggleItem} clear={deleteItems}/>
      <Footer items={packingList}/>
    </div>
  );
}
function Header(){
  return <h1>Packing List</h1>
}


function Form({addItems}){

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
function List({item,deleteitem1, toggleItem,clear}){
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
function Items({item,deleteItem1,toggleItem}){
   

  return <li key={item.id}>
    <input type="checkbox" onClick={()=>toggleItem(item.id)} value={item.packed}/>
    <span  style={item.packed ? {textDecoration:'line-through'}:{}}>{item.numItems}  {item.description}</span> 
    <button onClick={()=>deleteItem1(item.id)}>❌</button>
    </li>
   
}
function Footer({items}){

  if(items.length===0){
    return <footer className="stats">
      <em>Start planning your things</em>
      </footer>
  }
  const numItems=items.length;
  const itemsPacked= items.filter((item)=>item.packed===true).length;
  const percentage= (itemsPacked/numItems *100);

  return  <footer className='stats'>
      <p>
        <em>You have {numItems} items on your list and you already packed {itemsPacked} which is {percentage}%</em>
        {percentage===100? <p>Fully packed readyto go </p>:""}
        </p>
      </footer>
   
  
}