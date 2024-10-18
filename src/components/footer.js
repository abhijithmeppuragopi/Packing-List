export default function Footer({items}){

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