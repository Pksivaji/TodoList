import React from 'react'
import "./Main.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='d-none d-md-block'>
                <div className="footerCon">
                    {/* ----------shop----------- */}
                    <div className="footerSubCon">
                        <h6 style={{ padding: "2px", color: "#fff" }}>Shop</h6>
                        <a href="#" className="a">RazorStore</a>
                        <a href="#" className="a">RazerCafe</a>
                        <a href="#" className="a">Store Locator</a>
                        <a href="#" className="a">Purchase Programs</a>
                        <a href="#" className="a">Education</a>
                        <a href="#" className="a">Exclusives</a>
                        <a href="#" className="a">RazerStore Rewards</a>
                        <a href="#" className="a">Newsletter</a>
                    </div>
                    {/* ----------Explore----------- */}
                    <div className="footerSubCon">
                        <h6 style={{ padding: "2px", color: "#fff" }}>Explore</h6>
                        <a href="#" className="a">Technology</a>
                        <a href="#" className="a">Chroma RGB</a>
                        <a href="#" className="a">Concepts</a>
                        <a href="#" className="a">Esports</a>
                        <a href="#" className="a">Collabs</a>
                    </div>
                    {/* ----------Support----------- */}
                    <div className="footerSubCon">
                        <h6 style={{ padding: "2px", color: "#fff" }}>Link</h6>
                        <a href="#" className="a">Get Help</a>
                        <a href="#" className="a">Registration & Warranty</a>
                        <a href="#" className="a">Razerstore Support</a>
                        <a href="#" className="a">RazerCare</a>
                        <a href="#" className="a">Manage Razer ID</a>
                        <a href="#" className="a"> Support Videos</a>
                    </div>
                    {/* ----------company----------- */}
                    <div className="footerSubCon">
                        <h6 style={{ padding: "2px", color: "#fff" }}>Company</h6>
                        <a href="#" className="a">About Us</a>
                        <a href="#" className="a">Career</a>
                        <a href="#" className="a">Newsroom</a>
                        <a href="#" className="a">zVentures</a>
                        <a href="#" className="a">Contact Us</a>
                    </div>
                    {/* ----------Follow Us----------- */}
                    <div className="footerSubCon">
                        <h6 style={{ padding: "2px", color: "#fff" }}>Follow Us</h6>
                        <a href="#" className="a logo2"><i className="fa-brands fa-facebook icons2"></i></a>
                        <a href="#" className="a logo2"><i className="fa-brands fa-instagram icons2"></i></a>
                        <a href="#" className="a logo2"><i class="fa-brands fa-twitter icons2"></i></a>
                        <a href="#" className="a logo2"><i class="fa-brands fa-youtube icons2"></i></a>
                        <a href="#" className="a logo2"><i class="fa-brands fa-tiktok icons2"></i></a>
                        <a href="#" className="a logo2"><i class="fa-brands fa-discord icons2"></i></a>
                        <a href="#" className="a logo2"><i class="fa-brands fa-twitch icons2"></i></a>
                    </div>
                    <div style={{ color: "#44d62c", fontSize: "14px" }}>FOR GAMERS. BY GAMERS.™</div>
                </div>
                <div className="footerSubCon2">
                    <span style={{ color: "white" }}>Copyright © 2023 Razer Inc. All rights reserved.</span>
                    <span>
                        <a className='a'>Site Map &nbsp; |</a>
                        <a className='a'>Legel Terms &nbsp; |</a>
                        <a className='a'>Privacy Policy &nbsp; |</a>
                        <a className='a'>Cookie Settings &nbsp; </a>
                    </span>
                    <span>
                        <a className='a'>United States &nbsp; |</a>
                        <a className='a'>Change Location &nbsp; </a>
                    </span>
                </div>
            </div>
 {/* --------------------------------------mini footer----------------------------------------- */}

            <div className="d-md-none">
                {/* ----------------------shop------------------- */}
                <div style={{ borderBottom: "1px solid gray", marginBottom: "12px" }} onClick={() => {
                    const minUl = document.querySelector(".mini-ul1");
                    if (minUl) {
                        minUl.style.display = minUl.style.display === "none" ? "flex" : "none";
                    }
                }}>
                    <div style={{ display: "flex", flexDirection: "row", color: "white", justifyContent: "space-between" }}>
                        <h6>Shop</h6>
                        <span>

                            <h6 style={{ fontSize: "30px", margin: "-12px", float: "right" }}>+</h6>
                        </span>
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", display: "none" }} className='mini-ul1'>
                        <a href="#" className="a">RazorStore</a>
                        <a href="#" className="a">RazerCafe</a>
                        <a href="#" className="a">Store Locator</a>
                        <a href="#" className="a">Purchase Programs</a>
                        <a href="#" className="a">Education</a>
                        <a href="#" className="a">Exclusives</a>
                        <a href="#" className="a">RazerStore Rewards</a>
                        <a href="#" className="a">Newsletter</a>
                    </ul>
                </div>

                {/* ----------------------explore-----------------------*/}
                <div style={{ borderBottom: "1px solid gray", marginBottom: "12px" }} onClick={() => {
                    const minUl = document.querySelector(".mini-ul2");
                    if (minUl) {
                        minUl.style.display = minUl.style.display === "none" ? "flex" : "none";
                    }
                }}>
                    <div style={{ display: "flex", flexDirection: "row", color: "white", justifyContent: "space-between" }}>
                        <h6>Explore</h6>
                        <span>

                            <h6 style={{ fontSize: "30px", margin: "-12px", float: "right" }}>+</h6>
                        </span>
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", display: "none" }} className='mini-ul2'>
                        <a href="#" className="a">Technology</a>
                        <a href="#" className="a">Chroma RGB</a>
                        <a href="#" className="a">Concepts</a>
                        <a href="#" className="a">Esports</a>
                        <a href="#" className="a">Collabs</a>
                    </ul>
                </div>
                {/*---------------------support-----------------  */}
                <div style={{ borderBottom: "1px solid gray", marginBottom: "12px" }} className='mini-divCon' onClick={() => {
                    const minUl = document.querySelector(".mini-ul3");
                    if (minUl) {
                        minUl.style.display = minUl.style.display === "none" ? "flex" : "none";
                    }
                }}>
                    <div style={{ display: "flex", flexDirection: "row", color: "white", justifyContent: "space-between" }}>
                        <h6>Support</h6>
                        <span>

                            <h6 style={{ fontSize: "30px", margin: "-12px", float: "right" }}>+</h6>
                        </span>
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", display: "none" }} className='mini-ul3'>
                        <a href="#" className="a">Get Help</a>
                        <a href="#" className="a">Registration & Warranty</a>
                        <a href="#" className="a">Razerstore Support</a>
                        <a href="#" className="a">RazerCare</a>
                        <a href="#" className="a">Manage Razer ID</a>
                        <a href="#" className="a"> Support Videos</a>
                    </ul>
                </div>

                {/* ----------------------company----------------- */}
                <div style={{ borderBottom: "1px solid gray", marginBottom: "12px" }} className='mini-divCon' onClick={() => {
                    const minUl = document.querySelector(".mini-ul");
                    if (minUl) {
                        minUl.style.display = minUl.style.display === "none" ? "flex" : "none";
                    }
                }}>
                    <div style={{ display: "flex", flexDirection: "row", color: "white", justifyContent: "space-between" }}>
                        <h6>Company</h6>
                        <span>

                            <h6 style={{ fontSize: "30px", margin: "-12px", float: "right" }}>+</h6>
                        </span>
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", display: "none" }} className='mini-ul'>
                        <a href="#" className="a">About Us</a>
                        <a href="#" className="a">Career</a>
                        <a href="#" className="a">Newsroom</a>
                        <a href="#" className="a">zVentures</a>
                        <a href="#" className="a">Contact Us</a>
                    </ul>
                </div>
        {/* ---------------------------------------------------------------- */}
                <div className="" style={{display:"flex",flexDirection:"column",borderBottom:"1px solid gray",padding:"25px"}}>
                  <center><span style={{ color: "white",fontSize:"14px" }}>Copyright © 2023 Razer Inc. All rights reserved.</span></center>
                 <center>
                    <div style={{display:"block",fontSize:"15px",cursor:"pointer"}}>
                        <a className='a'>Site Map &nbsp; |</a>
                        <a className='a'>Legel Terms &nbsp; |</a>
                        <a className='a'>Privacy Policy &nbsp; |</a>
                        <a className='a'>Cookie Settings &nbsp; </a>
                    </div>
                 </center> 
                </div>
                     
                    <center> 
                        <span style={{fontSize:"14.5px",position:"relative",top:"12px"}}>
                            <a className='a'>United States &nbsp; | </a>
                            <a className='a'> Change Location &nbsp; </a>
                        </span>
                    </center> 
                  <center>  <div style={{ color: "#44d62c", fontSize: "12px",position:"relative",top:"32px"}}>FOR GAMERS. BY GAMERS.™</div></center> 
                

                  <div style={{display:"flex",justifyContent:"center",gap:"16px",position:"relative",margin:"40px"}}>
                        <a href="#" className="a"><i className="fa-brands fa-facebook icons2"></i></a>
                        <a href="#" className="a"><i className="fa-brands fa-instagram icons2"></i></a>
                        <a href="#" className="a"><i class="fa-brands fa-twitter icons2"></i></a>
                        <a href="#" className="a"><i class="fa-brands fa-youtube icons2"></i></a>
                        <a href="#" className="a"><i class="fa-brands fa-tiktok icons2"></i></a>
                        <a href="#" className="a"><i class="fa-brands fa-discord icons2"></i></a>
                        <a href="#" className="a"><i class="fa-brands fa-twitch icons2"></i></a>
                    </div>
            {/*write code above this line */}
             </div>
        </div>
    )
}
export default Footer;