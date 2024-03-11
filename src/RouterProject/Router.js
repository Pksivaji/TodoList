import './Router.css';
import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
 
 
function Routing(){
      return(       
           <>
              <BrowserRouter>
               <Header1/>
                <Routes>
                    <Route path='/' element={<Home/>}> </Route>
                    <Route path='/about' element={<About/>}> </Route>
                    <Route path='/contact' element={<Contact/>}> </Route>
                </Routes>
              </BrowserRouter>
           </>
      );
 }


function Header1(){
    return(
         <ul>
            <li><Link to='/'>Home1</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
             
         </ul>
    )
}
// --------------FUNCTIONS------------


 function Header1() {
  let loggedIn = true;

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/logIn"
            element={
              <LogIn showSignInButton={!loggedIn} />
            }
          ></Route>
          <Route
            path="/signIn"
            element={
              <SignIn showLogInButton={loggedIn} />
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Nav() {
  return (
    <div>
      <ul className="ul">
        <li className="li">
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="a">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="a">
            Contact
          </Link>
        </li>
        {loggedIn ? (
          <li>
            <Link to="/signIn" className="a signout">
              Sign In
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/logIn" className="a signin">
              Log In
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div className="wrapper">
      <center>
        <p
          style={{
            backgroundColor: "red",
            color: "greenyellow",
            width: "100vw",
            height: "100vh",
            marginTop: "-16px",
          }}
        >
          Home Page
        </p>
      </center>
    </div>
  );
}

    function About() {
      return (
        <div className="wrapper">
          <center>
            <p
              style={{
                backgroundColor: "blue",
                color: "greenyellow",
                width: "100vw",
                height: "100vh",
                marginTop: "-16px",
              }}
            >
              About Page
            </p>
          </center>
        </div>
      );
    }

    function Contact() {
      return (
        <div className="wrapper">
          <center>
            <p
              style={{
                backgroundColor: "green",
                color: "greenyellow",
                width: "100vw",
                height: "100vh",
                marginTop: "-16px",
              }}
            >
              Contact Page
            </p>
          </center>
        </div>
      );
    }

    function LogIn({ showSignInButton }) {
      return (
        <div className="wrapper">
          <center>
            <p
              style={{
                backgroundColor: "purple",
                color: "greenyellow",
                width: "100vw",
                height: "100vh",
                marginTop: "-16px",
              }}
            >
              Log In Page
            </p>
            {showSignInButton && (
              <p style={{ color: "white" }}>Please sign in to continue</p>
            )}
          </center>
        </div>
      );
    }

      function SignIn({ showLogInButton }) {
        return (
          <div className="wrapper">
            <center>
              <p
                style={{
                  backgroundColor: "#a2c441",
                  color: "greenyellow",
                  width: "100vw",
                  height: "100vh",
                  marginTop: "-16px",
                }}
              >
                SignIn Page
              </p>
              {showLogInButton && (
                <p style={{ color: "white" }}>Please sign in </p>
              )}
            </center>
          </div>
        );
      }

export default Routing;