
function Container({children}){

    return<>
        <div className="border bg-danger">
            <h1>outside childern</h1>
            {children}
            
            </div>
    </>
}

export default Container;