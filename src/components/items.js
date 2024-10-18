export default function Items({item,deleteItem1,toggleItem}){
   
    return <li key={item.id}>
      <input type="checkbox" onClick={()=>toggleItem(item.id)} value={item.packed}/>
      <span  style={item.packed ? {textDecoration:'line-through'}:{}}>{item.numItems}  {item.description}</span> 
      <button onClick={()=>deleteItem1(item.id)}>❌</button>
      </li>
     
  }