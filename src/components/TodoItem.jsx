
function Todoitem({todoName,todoDate,handeledelte}) {
 
  return (
    <>
      <div className="row mb-2">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button className="btn btn-danger w-100" onClick={handeledelte}> Delete</button>
         
        </div>
        
      </div>
    </>
  );
}

export default Todoitem;

