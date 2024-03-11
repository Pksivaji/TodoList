import "./Header.css"
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Header() {
    let LoggedIn =  true;
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/logIn' element={<LogIn />}></Route>
                    <Route path='/signIn' element={<SignIn />}></Route>
                    <Route path='*' element={<ErrorPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

    function Nav() {
        return (
            <div> 
                <ul className="ul">
                    <li className="li"><Link to="/" className="a">Home</Link> </li>
                    <li><Link to="/about" className="a">About</Link></li>
                    <li><Link to="/contact" className="a">Contact</Link></li>
                    {LoggedIn ? <li><Link to="/LogIn" className="a signin">Log In</Link></li> : <li><Link to="/SignIn" className="a signout">Sign In</Link></li>}
                </ul>
            </div>
        )
    }

    function Home() {
        const [data,setData] =useState([]) 
        function fetchData(){
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(value=> {setData(value)})
        }
         useEffect(()=>{
            fetchData()
         },[]);
        return (
            <div>
               <p style={{backgroundColor:"blue",color:"greenyellow",width:"100vw",height:"100vh",marginTop:"-16px"}}> <h1 style={{textAlign:"center"}}>Home Page</h1> 
                    <div className="cards">
                        {data.map(
                            (value)=>{
                                return(<div className="card">
                                    <img src={value.thumbnailUrl} alt=""></img>
                                    <h4>Value:-{value.title}</h4>
                                </div>)
                            }
                        )}
                    </div>
                </p> 
            </div>
        );
    }

    function About() {
        const [data,setData] =useState([]) 
        function fetchData(){
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(value=> setData(value))
            
        }
        fetchData()
        return (
            <div>
               <p style={{backgroundColor:"blue",color:"greenyellow",width:"100vw",height:"100vh",marginTop:"-16px"}}> <h1 style={{textAlign:"center"}}>Home Page</h1> 
                <div className="cards">
                    {data.map(
                        (value)=>{
                            return(<div className="card">
                                 <img src={value.thumbnailUrl} alt=""></img>
                                <h4>Value:-{value.title}</h4>
                                  </div>)
                        }
                    )}
                </div>
                </p> 
            </div>
        );
    }

   

    function Contact() {
        const [data,setData] =useState([]) 
        function fetchData(){
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(value=> setData(value))
            
        }
        fetchData()
        return (
            <div>
               <p style={{backgroundColor:"blue",color:"greenyellow",width:"100vw",height:"100vh",marginTop:"-16px"}}> <h1 style={{textAlign:"center"}}>Contact Page</h1> 
                <div className="cards">
                    {data.map(
                        (value)=>{
                            return(<div className="card">
                                <h4>Name:-{value.title}</h4>
                                <h4>Value:-{value.id}</h4>
                            </div>)
                        }
                    )}
                </div>
                </p> 
            </div>
        );
    }

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
    
    // -----------------------------------------------------

    function SignIn() {
        return (
            <div className="row justify-content-center">
                <h2 className="row justify-content-center">Sign Page</h2>
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
    function ErrorPage() {
        return (
            <div className="wrapper">
              <center><p style={{backgroundColor:"yellow",color:"red",width:"100vw",height:"100vh",marginTop:"-16px"}}> Error Page</p></center>
            </div>
        );
    }

}
