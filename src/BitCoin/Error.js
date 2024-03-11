import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <div style={{ width: "400px", height: "400px", position: "relative", display: "flex",flexDirection:"column", justifyContent: "center", textAlign: "center", margin: "15% auto" }} class="errorDiv">
                <h1 style={{ color: "#44d62c" ,fontSize:"100px",fontFamily:" cursive" }}>ERROR</h1>
                <img class="usp-bg" src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt='' style={{width:"400px"}}></img>
               <center>  <Link to="/" className="nav-link ps-4 ms-4 me-3 btn " style={{width:"150px",padding:"12px",color:"white",background:"black",fontSize:"22px",fontFamily:"cursive"}}>Go Home</Link></center> 
            </div>
             {/* -------------- */}
        </div>
    )
}