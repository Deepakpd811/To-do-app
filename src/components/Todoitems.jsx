import Todoitem from "./TodoItem";

function Todoitems({todoitems}) {
    const delitem = (x)=>{
      console.log(x)
    }
    return (
      <>
        {todoitems.map((item,count)=>
        <Todoitem 
        key={count++} 
        todoName={item.name} 
        todoDate={item.date}
        handeledelte={()=>delitem(item.name)}
        />)}
        
      </>
    );
  }
  
  export default Todoitems;
  
  