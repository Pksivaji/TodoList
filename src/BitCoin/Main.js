import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CryptoTaxes from "./CryptoTaxes";
import FreeTools from './FreeTools';
import ResourceCenter from './ResourceCenter';
import GetStarted from './GetStarted';
import Error from "./Error";
export default function BitCoinMain() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<CryptoTaxes/>}></Route>
                <Route path='/cryptoTaxes' element={<CryptoTaxes />}></Route>
                <Route path='/freeTools' element={<FreeTools />}></Route>
                <Route path='/resourceCenter' element={<ResourceCenter />}></Route>
                <Route path='/getStarted' element={<GetStarted />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )

    function Nav() {
        return (
            <div style={{ backgroundColor: "white" }}>
                <div>
                    <nav className="navbar navbar-expand-md navbar-white bg-white">
                        <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </span>
                        <Link to="/" className="navbar-brand ms-5">
                            <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="" className="logo" />
                        </Link>
                        <div className="collapse navbar-collapse mt-2 justify-content-center me-5 pe-5" id="navbarNav">
                            
                            <ul className="navbar-nav" onClick={() => {
                                const navbarCollapse = document.getElementById('navbarNav');
                                if (navbarCollapse.classList.contains('show')) {
                                    navbarCollapse.classList.remove('show');
                                }
                            }}>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link ps-4 ms-4 me-3"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cryptoTaxes" className="nav-link ps-4 ms-4 me-3">Crypto Taxes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/freeTools" className="nav-link ps-4 ms-4 me-3">Free Tools</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/resourceCenter" className="nav-link ps-4 ms-4 me-3">Resource Center</Link>
                                </li>                  
                                <li className="nav-item">
                                    <Link to="/getStarted" className="nav-link ps-4 ms-4 me-3">Get Started</Link>
                                </li>                  
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
