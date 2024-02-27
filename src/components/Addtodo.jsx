
function Addtodo(){
    return<>
         <div className="row mb-2">
        <div className="col-sm-6">
          <input placeholder="item" onChange={(e)=>console.log(e.target.value)} className="w-100"></input>
        </div>
        <div className="col-sm-4">
          <input type="date"  onChange={(e)=>console.log(e.target.value)} className="w-100"></input>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success w-100">add</button>
        </div>
      </div>
    </>
}

export default Addtodo;