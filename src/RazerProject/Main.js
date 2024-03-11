import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PC from "../RazerProject/PC";
import Home from "./Home"
import Mobile from "./Mobile";
import Service from "./Service";
import Error from "./Error"
import Login from "./Login";
import Store from "./Store";
 
 
function Main() {
    
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/pc' element={<PC />}></Route>
        <Route path='/mobile' element={<Mobile />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )

  function Nav() {
    return (
      <div style={{backgroundColor:"black"}}>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </span>
            <Link to="/" className="navbar-brand ms-5">
              <img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" alt="" className="logo" />
            </Link>
            {/* search bar main*/}
            <div>
              <div className="srch-div">
                <i class="fa-solid fa-xmark srch-div-Xicon" onClick={() => { document.querySelector(".srch-div").style.display = "none"; document.querySelector(".navbar-nav").style.display = "block"; document.querySelector(".navbar-nav").style.display = "flex"; }}></i>
                <input type="text" className="srch1" placeholder="Search here"></input>
                <i className="fa fa-search srch-div-icon"></i>
              </div>
            </div>
            {/* --------shopping cart--icon------ */}
            <span className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#cartbar">
              <span className=""><i class="fa-solid fa-cart-shopping"></i></span>
            </span>
            {/* ---------------- */}
            <div className="collapse navbar-collapse mt-2 justify-content-center me-5 pe-5" id="navbarNav">
              <div>
                <input type="text" className="form-control d-md-none ms-5 m-2" placeholder="Search here"></input>
              </div>
              <ul className="navbar-nav" onClick={() => {
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                  navbarCollapse.classList.remove('show');
                }}}>
                <li className="nav-item">
                  <Link to="/" className="nav-link ps-4 ms-4 me-3">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/store" className="nav-link ps-4 ms-4 me-3">Store</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pc" className="nav-link ps-4 ms-4 me-3">PC</Link>
                </li>
                <li className="nav-item">
                  <Link to="/mobile" className="nav-link ps-4 ms-4 me-3">Mobile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link ps-4 ms-4 me-3">Service</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link ps-4 ms-4">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ps-4 d-none d-lg-block ms-5"><i className="fa fa-search"
                    onClick={() => { document.querySelector(".srch-div").style.display = "block"; document.querySelector(".navbar-nav").style.display = "none"; }}></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ps-4 d-none d-lg-block ms-5"><i className="fa fa-shopping-cart"></i></Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div style={{ height: "auto", background: "#555", margin: "-9px 0px 0px", padding: "1px", width: "100vw", zIndex: "12" }}>
          <p style={{ justifyContent: "center", textAlign: "center", color: "white", marginTop: "14px" }}>For a limited time, all orders will
            enjoy free shipping to the United States.<span href="#" style={{ cursor: "pointer", color: "green" }}>&nbsp;Shop Now &gt;</span></p>
        </div>

        {/* ---------cart function ---------- */}

        
        

      </div>
    )
    
  }
 
}

export default Main;