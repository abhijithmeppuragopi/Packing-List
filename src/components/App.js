import { useState } from "react";
import Header from "./header";
import Form from  "./form";
import List from "./list";
import Footer from "./footer";



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





