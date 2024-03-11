import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function NavbarMain() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/imported' element={<Imported />}></Route>
          <Route path='/webseries' element={<Webseries />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/romance' element={<Romance />}></Route>
          <Route path='/comedy' element={<Comedy />}></Route>
          <Route path='/logIn' element={<LogIn />}></Route>
          <Route path='/logOut' element={<LogOut />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
   )

   function Nav() {
    return (
      <div className="nav">
        <Link to="/" className="a logo">Mini<span style={{ color: "red", }}>Tv</span></Link>
        <ul className="ul">
          <li className="li"><Link to="/" className="a">Home</Link> </li>
          <li><Link to="/imported" className="a">Imported</Link></li>
          <li><Link to="/webseries" className="a">Webseries</Link></li>
          <li><Link to="/movies" className="a">Movies</Link></li>
          <li><Link to="/romance" className="a">Romance</Link></li>
          <li><Link to="/comedy" className="a">Comedy</Link></li>
          {LoggedIn ? <li><Link to="/LogIn" className="a signin">Log In</Link></li> : <li><Link to="/LogOut" className="a signout">Sign In</Link></li>}
        </ul>
      </div>
    )
  }

  
  
  function Home() {
    return (
      <div>
          home page
      </div>
    )
  }

  function Imported() {
    return (
      <div>

      </div>
    )
  }

  function Webseries() {
    return (
      <div>
        This is webseries page
      </div>
    )
  }
  function Movies() {
    return (
      <div>
        This is Movies page
      </div>
    )
  }
  function Romance() {
    return (
      <div>
        This is Romance page
      </div>
    )
  }
  function Comedy() {
    return (
      <div>
        This is Comedy page
      </div>
    )
  }

  function SignIn() {
    return (
      <div>
        This is Sign page
      </div>
    )
  }

  function LogIn() {
    return (
      <div>
        This is Login-in page
      </div>
    )
  }

  function LogOut() {
    return (
      <div>
        This is Log-out page
      </div>
    )
  }

  function ErrorPage() {
    return (
      <div>
        This is Error page
      </div>
    )
  }

}
