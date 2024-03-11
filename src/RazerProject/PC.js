import React from 'react'
import "./Main.css"
import Footer from "../RazerProject/Footer"
 

export default function PC() {
  
  return (
    <div>
      
      {/* ----------PC   nav bar---------- */}
      <div className="navbar navbar-dark bg-dark navbar-expand-md " style={{ borderBottom: "1px solid green" }}>
        <span className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu" style={{ cursor: "pointer", }}>
          <span>PC<i class="fa-solid fa-caret-down" style={{ marginLeft: "12px" }}></i></span>
        </span>
        <div className='navbar-collapse collapse mt-2' id="menu">
          {/* font class  */}
          <ul className='navbar-nav font d-flex justify-content-center'>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Laptops</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Desktops & Components</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Gamer Room</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Mice</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Mats</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Headsets</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Keybords</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Speakers</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Content Creation</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Productivity</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Chairs</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Software</a>
            </li>
            <li className='navbar-item'>
              <a href='#' className='a p-3'>Speakers</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------div-1----------------- */}
      <div className="cus-div1">
        <center className='cus-center'>
          <h1 style={{ fontSize: "32px", color: "green", fontFamily: "sans-serif" }}>
             LAPTOPS & DESKTOPS
          </h1>
          <p style={{ fontSize: "18px", color: "#999" }}>
            The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop peripherals
            armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets and monitors, deck out
            your setup with our comprehensive selection of peripherals for gaming and work.
          </p>
        </center>
      </div>

      {/* ------------Card-images div----------- */}
      <div style={{ backgroundColor: "black" }}>
        <div class="row">
          <div class="col-lg-4 mb-3">
            <div class="card" style={{ backgroundColor: "black" }}>
              <img src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-16-2023-laptop-500x500.jpg" alt="Card Image" class="card-img-top"></img>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>LAPTOPS</h5>
                <p class="card-text" style={{ color: "white" }}>Sleek high-performance gaming laptops</p>
                <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-3" style={{ marginTop: "-12px" }}>
            <div class="card" style={{ backgroundColor: "black" }}>
              <img src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/desktops-and-components-category-500x500.webp" alt="Card Image" class="card-img-top"></img>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>DESKTOP & COMPONENTS</h5>
                <p class="card-text" style={{ color: "white" }}>Engineered for enthusiasts and designed for performance</p>
                <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-3">
            <div class="card" style={{ backgroundColor: "black" }}>
              <img src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-gamer-room-line-500x500.webp" alt="Card Image" class="card-img-top"></img>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>GAMERS ROOM</h5>
                <p class="card-text" style={{ color: "white" }}>Take Raer Chroma RGB beyond your PC with our light bulbs,light strips,and lamps</p>
                <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-3" style={{ marginTop: "-12px" }}>
            <div class="card" style={{ backgroundColor: "black" }}>
              <img src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>ACCESSORIES</h5>
                <p class="card-text" style={{ color: "white" }}>Crafting the perfect gaming experience</p>
                <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-3" style={{ marginTop: "-12px" }}>
            <div class="card" style={{ backgroundColor: "black" }}>
              <img src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/skins-500x500.jpg" alt="Card Image" class="card-img-top"></img>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>RAZER SKINS</h5>
                <p class="card-text" style={{ color: "white" }}>Custom designs for laptops, mobile controllers, and handhelds</p>
                <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------div 2------------------ */}
      <div className="cus-div1">
        <center className='cus-center'>
          <h1 style={{ fontSize: "32px", color: "green", fontFamily: "sans-serif" }}>
            PC & LAPTOPS PERIPHERALS
          </h1>
          <p style={{ fontSize: "18px", color: "#999" }}>
            The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop peripherals
            armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets and monitors, deck out
            your setup with our comprehensive selection of peripherals for gaming and work.
          </p>
        </center>
      </div>

      {/* ------------------------div 2------------------ */}

      <div class="row" style={{ backgroundColor: "black" }}>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mice-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>MICE</h5>
              <p class="card-text" style={{ color: "white" }}>Pixel-perfect precision for any hand size and grip style</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mousemats-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>MOUSE MATS</h5>
              <p class="card-text" style={{ color: "white" }}>Soft, hard, and hybrid designs to enhance your control</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/keyboards-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>KEYBOARDS</h5>
              <p class="card-text" style={{ color: "white" }}>Optical, mechanical, and every type in between</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/headsets-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>HEADSETS</h5>
              <p class="card-text" style={{ color: "white" }}>Tuned for gaming, lifestyle, or a perfect mix of both</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/speakers-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>SPEAKERS</h5>
              <p class="card-text" style={{ color: "white" }}>Set the soundstage for full-range immersion</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/chairs-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>CHAIRS</h5>
              <p class="card-text" style={{ color: "white" }}>Perfecting the science of comfort and support</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------DIV 3------------------------- */}

      <div className='items1' style={{ borderTop: "9px solid gray" }}>
        <img src="https://th.bing.com/th/id/OIP.v_JoNcHR3mrmz6gnM-GhGAHaDV?rs=1&pid=ImgDetMain" className='img1'></img>
        <center className='text3'>
          <h1 style={{ fontSize: "3vw", padding: "2px" }}>COMPLETE YOUR SETUP</h1>
          <h3 style={{ fontSize: "2.5vw", padding: "2px" }}>A Color For Every Style</h3>
          <h5 style={{ color: "green", cursor: "pointer", padding: "2px" }}>Learn More &gt;</h5>
        </center>
      </div>

      {/* ----------------------------DIV 4------------------------- */}

      <div className="cus-div1">
        <center className='cus-center'>
          <h1 style={{ fontSize: "32px", color: "green", fontFamily: "sans-serif" }}>
            CONTENT CREATION & STREAMING
          </h1>
          <p style={{ fontSize: "18px", color: "#999" }}>
            Producing quality content requires quality hardware. From high-fidelity webcams to professional-grade microphones,
            deliver the best possible streaming experience with our range of content creation gear. Whether you're streaming
            from your gaming desktop or laptop, we've got everything you need to create content that stands out from the rest.
          </p>
        </center>
      </div>

      {/* ----------------------------DIV 5------------------------- */}

      <div class="row" style={{ backgroundColor: "black" }}>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/webcams-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>WEBCAMS</h5>
              <p class="card-text" style={{ color: "white" }}>Stunning visual fidelity for streaming and productivity</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/microphones-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>MICROPHONES</h5>
              <p class="card-text" style={{ color: "white" }}>Engineered for crystal-clear voice pickup</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/capturecard&others-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>CAPTURE CARD & OTHERS</h5>
              <p class="card-text" style={{ color: "white" }}>For a professional streaming advantage</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------DIV 5------------------------- */}
      <div className="cus-div1">
        <center className='cus-center'>
          <h1 style={{ fontSize: "32px", color: "green", fontFamily: "sans-serif" }}>
            SOFTWARE
          </h1>
          <p style={{ fontSize: "18px", color: "#999" }}>
            From customizing keybinds and Chroma effects to optimizing audio and game performance,
            Razer's software platforms are designed to enhance your gaming and productivity. Seamlessly
            integrated with our extensive collection of gamer accessories and PC peripherals, get the most
            out of our devices and create a single ecosystem for your gaming or office desktop.
          </p>
        </center>
      </div>

      {/* ----------------------------DIV 6------------------------- */}
      <div style={{ backgroundColor: "#252525", border: "1px solid black" }}>
          <div className='row m-2' style={{ backgroundColor: "#252525"}}>
              <div className='col-12 col-lg-3 col-md-6'>
                <div class="mb-2" style={{ backgroundColor: "black", borderBottom: "1px solid green"  }}>
                  <img src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-axon-category-500x500-update.jpg" alt="Card Image" class="card-img-top"></img>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "white" }}>RAZER AXON</h5>
                    <p class="card-text" style={{ color: "white" }}>Every wallpaper in Razer Axon boasts high-resolution quality, meticulously crafted for any monitor including ultra-wide sizes and multiple monitor set-ups. Tons of free wallpapers to choose from.</p>
                    <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-3 col-md-6'>
                <div class="mb-2" style={{ backgroundColor: "black", borderBottom: "1px solid green"  }}>
                  <img src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-chroma-rgb-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "white" }}>RAZER CHROMA™ RGB</h5>
                    <p class="card-text" style={{ color: "white" }}>Experience full RGB customization and deeper immersion with the world’s largest lighting ecosystem that supports hundreds of games and thousands of devices.</p>
                    <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-3 col-md-6'>
                <div class="mb-2" style={{ backgroundColor: "black", borderBottom: "1px solid green"  }}>
                  <img src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-cortex-category-500x500-update.jpg" alt="Card Image" class="card-img-top"></img>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "white" }}>RAZER CORTEX</h5>
                    <p class="card-text" style={{ color: "white" }}>From boosting system performance to discovering gaming deals, hundreds of games and thousands of devices.enhance your play with one powerful platform.</p>
                    <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-3 col-md-6 '>
                <div class="mb-2" style={{ backgroundColor: "black" , borderBottom: "1px solid green" }}>
                  <img src="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/thx-spatial-audio-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "white" }}>THX SPATIAL AUDIO</h5>
                    <p class="card-text" style={{ color: "white" }}>Unlock full customization powerful platform with a surround sound application featuring more extensive audio calibration and custom-tuned game profiles.</p>
                    <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <Footer></Footer>
{/* ------------------------------------*/}
    </div>
  )
}
