

function LogIn() {
         
    return (
         <div className="row justify-content-center">
            <h2 className="row justify-content-center">Login Page</h2>
            <form className="form-control w-50 justify-content-center bg-primary">
                <div>
                    <label>Name :</label>
                    <input type="text"  className="form-control"></input><br></br>
                </div>
                     
                <div>
                    <label>Password :</label>
                    <input type="password"  className="form-control"></input><br></br>
                </div>
                <div className="d-flex justify-content-around" >
                    <button className="btn btn-secondary">Submit</button>
                    <button className="btn btn-secondary">Clear</button>
                </div>
            </form>
         </div>
    )
     
}
export default LogIn;