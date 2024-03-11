import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
 

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  function submitHandler() {
    // Email validation
    if (email.trim() === "") {
      setErrors((errors) => ({ ...errors, email: "Please enter an email" }));
    } else if (!emailPattern.test(email)) {
      setErrors((errors) => ({ ...errors, email: "Please enter a valid email" }));
    } else {
      setErrors((errors) => ({ ...errors, email: "" }));
    }

    // Password validation
    if (password.trim() === "") {
      setErrors((errors) => ({ ...errors, password: "Please enter a password" }));
    } else if (password.length < 8) {
      setErrors((errors) => ({
        ...errors,
        password: "Please enter a password with at least 8 characters",
      }));
    } else {
      setErrors((errors) => ({ ...errors, password: "" }));
    }
     
  }

  return (
    <div className="formCon border d-flex justify-content-center align-items-center bg-black vw-100 vh-100">
      <div className="formDiv justify-content-center align-items-center p-5 border border-success bg-black text-white">
        <h2 className="pe-1">RAZZER ID LOGIN</h2>
        <label htmlFor="email" className="">Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="email" 
          id="email"
          placeholder="Name please..."
          className="form-control bg-black text-white"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}<br></br>
        <label htmlFor="password" className=" ">Password</label>&nbsp; &nbsp; 
        <input
          type="password"
          id="password"
          placeholder="Password please..."
          className="form-control bg-black text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}
        
          <p className="" style={{float:"right",cursor:"pointer"}}>Forget Password</p> 
        <center>
          <input type="submit" value="LOG IN" className="btn btn-success w-100 text-black" onClick={submitHandler}/>
          <p className="p-1">Don't have an Account yet?</p>
         <h6 style={{display:"flex",justifyContent:"center",gap:"6px"}}>Create Razer ID <p style={{color:"green"}}>&gt;</p></h6>
         <hr style={{color:"white",width:"300px"}}></hr> 
         <p style={{marginTop:"-28px"}}>Or continue with</p>
         <span className="d-flex gap-3 justify-content-center" style={{width:"300px"}}>
          <button className="btn btn-primary w-75"><i class="fa-brands fa-facebook"></i></button> 
          <button className="btn btn-light w-75"><i class="fa-brands fa-google"></i></button>
          <button className="btn btn-info w-75"><i class="fa-brands fa-twitch"></i></button>
         </span>
        </center>
      </div>
    </div>
  );
}
