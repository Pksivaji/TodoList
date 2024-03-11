import React from 'react'
import Footer from './Footer'
export default function Mobile() {
  return (
    <div style={{width:"100vw",overflowX:"hidden"}}>
      <nav className='MobNav1' style={{width:"100vw"}}>
        <ul className='MobUl1' style={{width:"100vw"}}>
          <li className='MobLl1'><div style={{ textAlign: "center" }}> <img src="https://assets2.razerzone.com/images/main-menu/icons/icon-mobile-handhelds.svg"></img><p style={{ color: "green", textAlign: "center", marginTop: "15px" }}>Handhelds</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-mobile-controller.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px",marginTop:"11px"  }}>Controllers</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-nexus.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px",marginTop:"4px"  }}>Nexus</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-opus.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px",marginTop:"8px"  }}>Headphones</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-dac.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px" ,marginTop:"17px" }}>Earbuds</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-glasses.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px",marginTop:"17px"  }}>Dac</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-cases.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px",marginTop:"10px"  }}>SmartGlasses</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-accessories.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px" ,marginTop:"9px" }}>Cases</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-customs.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px",marginTop:"8px"  }}>Accessories</p></div></li>
          <li className='MobLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-skins.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px",marginTop:"8px"  }}>Customs</p></div></li>
        </ul>
      </nav>
      {/* </div> */}

      {/* ----------------DIV 1----------- */}

      <div className="cus-div1" style={{ marginTop: "" }}>
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
      {/* ----------------DIV 2----------- */}

      <div className='storeSubCon1'>
        <div className='items1'>
          <img src="https://assets2.razerzone.com/images/pnx.assets/9d62c1abff9014287154ad41465dbea6/razer-edge-hero-desktop.webp" className='img1'></img>
          <center className='text'>
            <h1 style={{ fontSize: "4.5vw", padding: "2px" }}>RING THE WINNING SEASON</h1>
            <h3 style={{ fontSize: "2.7vw", padding: "2px" }}>DECK THE HALL WITH EXCLUSIVE OFFER</h3>
            <h5 style={{ color: "green", cursor: "pointer", padding: "2px" }}>Shop Now &gt;</h5>
          </center>
        </div>
      </div>
      {/* --------------------DIV 3------------ */}

      <div class="row" style={{ backgroundColor: "black", border: "3px solid gray" }}>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/7919179f38474154a992ce6a3ac634bf/500x500-kishi-v2-pro-for-android.webp" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>RAZER KISHI V2 PRO</h5>
              <p class="card-text" style={{ color: "white" }}>Android Gaming Controller</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/7919179f38474154a992ce6a3ac634bf/razer-kishi-v2-xbox-editions-500x500.webp" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>RAZER KISHI V2 XBOX EDITIONS</h5>
              <p class="card-text" style={{ color: "white" }}>Mobile Gaming Controller for Xbox</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="card" style={{ backgroundColor: "black" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/7919179f38474154a992ce6a3ac634bf/razer-kishi-v2-500x500.webp" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>RAZER KISHI V2</h5>
              <p class="card-text" style={{ color: "white" }}>Console-quality iPhone and Android gamining.</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------DIV 4------------------ */}

      <div className='row' style={{backgroundColor:"black"}}>
        <div className='col-md-12 col-lg-6'>
          <img src='https://assets2.razerzone.com/images/pnx.assets/7f6e153ca9fa8df97d43f3adc6fb2d49/holiday-gift-guide-2023v2-768x460.webp' style={{width:"100vw"}}></img>
        </div>
        <div className='col-md-12 col-lg-6 d-none d-lg-block'>
          <div className='mobDiv4Txt mt-50'>
            {/* full screen text */}
            <span className="Txt1">
            <h1 style={{ fontSize: "2vw", padding: "2px" }}>RING THE WINNING SEASON</h1>
            <h3 style={{ fontSize: "1.7vw", padding: "2px" }}>DECK THE HALL WITH EXCLUSIVE OFFER</h3>
            <h5 style={{ color: "green", cursor: "pointer", padding: "2px" }}>Shop Now &gt;</h5>
            </span>
          </div>
        </div>
        {/*---- half screen text */}
        <span className="Txt2 d-md-none" style={{textAlign:"center"}}>
            <h1 style={{ fontSize:"5vw", padding: "3px",color:"white" }}>RING THE WINNING SEASON</h1>
            <h3 style={{ fontSize:"3vw", padding: "2px",color:"white"}}>DECK THE HALL WITH EXCLUSIVE OFFER</h3>
            <h5 style={{ color: "green", cursor: "pointer", padding: "2px" }}>Shop Now &gt;</h5>
        </span>
      </div>

      {/* ---------------------------DIV 5------------------ */}

      <div className='storeSubCon1' style={{borderBottom:"4px solid gray"}}>
        <div className='items1'>
          <img src="https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?cs=srgb&dl=headphones-man-music-person-374777.jpg&fm=jpg" className='img1'></img>
          <center className='text'>
            <h1 style={{ fontSize: "4.5vw", padding: "2px" }}>SYNC WITH YOUR WORLD</h1>
            <h3 style={{ fontSize: "3vw", padding: "2px" }}>Whether you’re working from home or immersed in entertainment, our industry-leading Bl</h3>
            <h5 style={{ fontSize: "4vw",color: "green", cursor: "pointer", padding: "2px" }}>Headphones &gt;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Earbuds &gt;</h5>
          </center>
        </div>
      </div>

      {/* ---------------------------DIV 5------------------ */}
   
      <div class="row p-3" style={{ backgroundColor: "black", border: "3px solid gray" }}>
        <div class="mb-3 col-lg-3 col-md-6 col-sm-12">
          <div class="card" style={{ backgroundColor: "black",borderBottom:"3px solid green" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/3784260489b65a92a1a7730abde98fec/razer-hammerhead-pro-hyperspeed_category_500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>RAZER HAMMERHEAD PRO HYPERSPEED</h5>
              <p class="card-text" style={{ color: "white" }}>True Wireless Gaming Earbuds with Razer™ HyperSpeed Wireless, Razer Chroma™ RGB, and Bluetooth 5.3</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card" style={{ backgroundColor: "black",borderBottom:"3px solid green" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/0f6664b8e4a2ae4aa934396b22275c5c/razer-opus-category-500x500.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>RAZER OPUS</h5>
              <p class="card-text" style={{ color: "white" }}>Savor pure, high-fidelity sound with zero distractions with wireless THX® Certified headphones that feature advanced active noise</p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card" style={{ backgroundColor: "black ",borderBottom:"3px solid green" }}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/3784260489b65a92a1a7730abde98fec/500x500_thx-onyx.jpg" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>RAZER KISHI V2 PRO</h5>
              <p class="card-text" style={{ color: "white" }}>Android Gaming Controller <br></br><br></br><br></br></p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card" style={{ backgroundColor: "black" ,borderBottom:"3px solid green"}}>
            <img src="https://assets2.razerzone.com/images/pnx.assets/7919179f38474154a992ce6a3ac634bf/500x500-kishi-v2-pro-for-android.webp" alt="Card Image" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "white" }}>THX ONYX™</h5>
              <p class="card-text" style={{ color: "white" }}>Portable DAC Headphone Amplifier<br></br><br></br></p>
              <a href="#" style={{ color: "green", textDecoration: "none" }}>Learn More &gt;</a>
            </div>
          </div>
        </div>
        </div>
      
      {/* ---------------------------DIV 6------------------ */}
      
      <div className="cus-div1" style={{height:"330px"}}>
        <center className='cus-center'>
          <h1 style={{ fontSize: "32px", color: "green", fontFamily: "sans-serif" }}>
             RAZZER MOBILE GAMING ACCESSORY:THE GAMINING EXPERIENCE
          </h1>
          <p style={{ fontSize: "18px", color: "#999" }}>
          Razer is a name synonymous with high-quality gaming peripherals and accessories, and our mobile gaming accessories are no exception.
           These accessories are specifically designed to enhance the gaming experience on your mobile device, making it more immersive, comfortable, and enjoyable.
          </p>
        </center>
      </div>
    {/* ---------------------------DIV 6------------------ */}

       <div className='div6' style={{backgroundColor:"#222222",color:"white"}}>
        <center><div className='div6a p-5'>
              <h3>A MOBILE GAMING ACCESSORY FOR EVERY NEED</h3>
              <p>Choose from an extensive collection of mobile gaming accessories that cater to your needs,
                 from handhelds, controllers, headphones, to phone cases that provide high-performance, quality,
                  and portability. With our mobile gaming accessories, you can enjoy a more immersive and tactile gaming experience on the go.</p>
          </div></center>
          {/* ---------------------------- */}
          <div className="div6ul row">
              <div className='div6li col-lg-3 col-md-4 col-sm-12'>
                <center> 
                  <img src="https://assets2.razerzone.com/images/pnx.assets/3c3c6bad3b4c2b17337384a71907f124/mobile-controllers-icon-gray.svg" style={{width:"100px"}}></img>
                  <p>If you are looking to improve your play when it comes to your favorite mobile games, then our <a href='#' style={{color:"#44d62c",}}>handhelds</a>
                    are designed to offer a greater level of precision and control that rivals console controllers.
                  </p>
                </center>
              </div>    
              <div className='div6li col-lg-3 col-md-4 col-sm-12'>
                <center> 
                  <img src="https://assets2.razerzone.com/images/pnx.assets/3c3c6bad3b4c2b17337384a71907f124/handhelds-icon-gray.svg" style={{width:"100px"}}></img>
                  <p>If you are looking to improve your play when it comes to your favorite mobile games, then our <a href='#' style={{color:"#44d62c",}}> wireless headphones and earbuds</a>
                    are designed to offer a greater level of precision and control that rivals console controllers.
                  </p>
                </center>
              </div>    
              <div className='div6li col-lg-3 col-md-4 col-sm-12'>
                <center> 
                  <img src="https://assets2.razerzone.com/images/pnx.assets/3c3c6bad3b4c2b17337384a71907f124/wireless-headphones-earbuds-icon.svg" style={{width:"100px"}}></img>
                  <p>If you are looking to improve your play when it comes to your favorite mobile games, then our <a href='#' style={{color:"#44d62c",}}> phone cases</a>
                    are designed to offer a greater level of precision and control that rivals console controllers.
                  </p>
                </center>
              </div>    
              <div className='div6li col-lg-3 col-md-4 col-sm-12'>
                <center> 
                  <img src="https://assets2.razerzone.com/images/pnx.assets/3c3c6bad3b4c2b17337384a71907f124/phone-cases-icon-gray.svg" style={{width:"100px"}}></img>
                  <p>If you are looking to improve your play when it comes to your favorite mobile games, then our <a href='#' style={{color:"#44d62c",}}>mobile controllers</a>
                    are designed to offer a greater level of precision and control that rivals console controllers.
                  </p>
                </center>
              </div>    
          </div>
    {/* ----------------------------------- */}
          <center><div className='div6a p-5'>
              <h3>A MOBILE GAMING ACCESSORY FOR EVERY NEED</h3>
              <p>Choose from an extensive collection of mobile gaming accessories that cater to your needs,
                 from handhelds, controllers, headphones, to phone cases that provide high-performance, quality,
                  and portability. With our mobile gaming accessories, you can enjoy a more immersive and tactile gaming experience on the go.</p>
          </div></center>
          <center><div className='div6a p-5'>
              <h3>A MOBILE GAMING ACCESSORY FOR EVERY NEED</h3>
              <p>Choose from an extensive collection of mobile gaming accessories that cater to your needs,
                 from handhelds, controllers, headphones, to phone cases that provide high-performance, quality,
                  and portability. With our mobile gaming accessories, you can enjoy a more immersive and tactile gaming experience on the go.</p>
          </div></center>
       </div>
       <Footer></Footer>
      {/* -------end---- */}
    </div>
  )
}
