import React from 'react'
import "./Main.css"
import Footer from "../RazerProject/Footer"
export default function Service() {
    return (
        <div style={{}}>
            <nav className='MobNav1'>
                <ul className='d-flex serDivUl'>
                    <li className='MobLl1'><div style={{ textAlign: "center", marginRight: "15px" }}> <img src="https://assets2.razerzone.com/images/main-menu/icons/icon-gold.svg"></img><p style={{ color: "green", textAlign: "center", marginTop: "2px", padding: "5px" }}>Gold</p></div></li>
                    <li className='MobLl1'><div style={{ textAlign: "center", marginRight: "15px" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-silver.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "2px" }}>Silver</p></div></li>
                    <li className='MobLl1'><div style={{ textAlign: "center", marginRight: "15px " }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-goldpins.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "15px" }}>GoldPINs</p></div></li>
                    <li className='MobLl1'><div style={{ textAlign: "center", marginRight: "15px" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-goldwebshop.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px" }}>GoldWebshop</p></div></li>
                    <li className='MobLl1'><div style={{ textAlign: "center", marginRight: "15px" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-giftcards.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "12px" }}>GiftCards</p></div></li>
                    <li className='MobLl1'><div style={{ textAlign: "center", marginRight: "15px" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-razercare.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "7px" }}>RazerCare</p></div></li>
                    <li className='MobLl1'><div style={{ textAlign: "center", marginRight: "15px" }}><img src="https://assets2.razerzone.com/images/main-menu/icons/icon-razerid.svg"></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "6px" }}>RazerID</p></div></li>
                </ul>
            </nav>
            {/* </div> */}

            {/* ----------------DIV 1----------- */}

            <div className="cus-div1" style={{ height: "300px" }}>
                <center className='cus-center'>
                    <h1 style={{ fontSize: "32px", color: "green", fontFamily: "sans-serif" }}>
                        RAZER SERVICES
                    </h1>
                    <p style={{ fontSize: "18px", color: "#999" }}>
                        Join over millions of users who enjoy using Razer Services to enrich their gaming experience.<br></br><br></br>
                        Razer Gold and Silver offers users the competitive advantage in any battlefield. Use Gold PINs to
                        purchase from our ever-expanding list of games in the Gold Webshop. Protect your gear with RazerCare
                        and use Razer ID to access all the best services Razer has to offer.
                    </p>
                </center>
            </div>

            {/* ----------------DIV 2----iiem images------- */}

             
                <div className='serItems'>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/d7d8a5e49e0713010baa91b8c412cdda/razer-gold-768x500-mobile.jpg" className='ser-img' style={{width:"100vw"}}></img>
                    <center className='d-none d-md-block' style={{position:"relative",top:"-623px"}}>
                        <h1 style={{ fontSize: "3vw", padding: "2px",color:"white" }}>RAZER GOLD</h1>
                        <h3 style={{ fontSize: "2.3vw", padding: "2px", width: "80vw",color:"white" }}>Razer Gold is the unified virtual credits for gamers worldwide, available in over 42,000 games
                            and entertainment titles.</h3>
                        <h5 style={{ color: "green", cursor: "pointer", padding: "2px"}}>Shop Now &gt;</h5>
                    </center>
                  </div>
                 
                {/* ------- */}
            <div style={{ backgroundColor: "black", color: "white", height: "300px",marginTop:"-130px"}} className='p-3 d-md-none d-sm-block'>
                <h3>RAZER GOLD</h3>
                <h6>Razer Gold is the unified virtual credits for gamers worldwide, available in over 42,000 games
                    and entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for
                    your buck—including getting rewarded with Razer Silver and exclusive game deals.</h6><br></br>
                Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the world.
                <h6 className='text-center' style={{ color: "green", cursor: "pointer", padding: "2px" }}>Shop Now &gt;</h6>
            </div>

            {/* --------------------DIV 3----------------------- */}
                <div className='serItems'>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/5044606f04fbcc28b98ca2be9b48bc3e/razer-goldpin-768x500-mobile.jpg" className='ser-img' style={{width:"100vw"}}></img>
                    <center className='d-none d-md-block' style={{position:"relative",top:"-623px"}}>
                        <h1 style={{ fontSize: "3vw", padding: "2px",color:"white" }}>RAZER SILVER</h1>
                        <h3 style={{ fontSize: "2.3vw", padding: "2px", width: "80vw",color:"white" }}>Razer Silver is the unified virtual credits for gamers worldwide, available in over 42,000 games
                            and entertainment titles.</h3>
                        <h5 style={{ color: "green", cursor: "pointer", padding: "2px"}}>Shop Now &gt;</h5>
                    </center>
                  </div>
                 
                {/* -- */}
            <div style={{ backgroundColor: "black", color: "white", height: "300px",marginTop:"-130px"}} className='p-3 d-md-none d-sm-block'>
                <h3>RAZER SILVER</h3>
                <h6>Razer Silver is the unified virtual credits for gamers worldwide, available in over 42,000 games
                    and entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for
                    your buck—including getting rewarded with Razer Silver and exclusive game deals.</h6><br></br>
                Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the world.
                <h6 className='text-center' style={{ color: "green", cursor: "pointer", padding: "2px" }}>Learn More &gt;</h6>
            </div>

            {/* --------------------DIV 4----------------------- */}
                <div className='serItems'>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/c44ce6aa9d981f08ce3f054e20fa07b2/razer-webshop-768x500-mobile.jpg" className='ser-img' style={{width:"100vw"}}></img>
                    <center className='d-none d-md-block' style={{position:"relative",top:"-623px"}}>
                        <h1 style={{ fontSize: "3vw", padding: "2px",color:"white" }}> GOLD PINS</h1>
                        <h3 style={{ fontSize: "2.3vw", padding: "2px", width: "80vw",color:"white" }}> Gold Pins is the unified virtual credits for gamers worldwide, available in over 42,000 games
                            and entertainment titles.</h3>
                        <h5 style={{ color: "green", cursor: "pointer", padding: "2px"}}>Learn More &gt;</h5>
                    </center>
                  </div>
                 
                {/* -- */}
            <div style={{ backgroundColor: "black", color: "white", height: "300px",marginTop:"-130px"}} className='p-3 d-md-none d-sm-block'>
                <h3>GOLD PINS</h3>
                <h6>Gold Pins is the unified virtual credits for gamers worldwide, available in over 42,000 games
                    and entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for
                    your buck—including getting rewarded with Razer Silver and exclusive game deals.</h6><br></br>
                Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the world.
                <h6 className='text-center' style={{ color: "green", cursor: "pointer", padding: "2px" }}>Learn More &gt;</h6>
            </div>

            {/* --------------------DIV 5----------------------- */}
                <div className='serItems'>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/b9e965bfe9e958df22d94e6eaea4dfa6/razer-silver-768x500-mobile.jpg" className='ser-img' style={{width:"100vw"}}></img>
                    <center className='d-none d-md-block' style={{position:"relative",top:"-623px"}}>
                        <h1 style={{ fontSize: "3vw", padding: "2px",color:"white" }}>GOLD WEBSHOP</h1>
                        <h3 style={{ fontSize: "2.3vw", padding: "2px", width: "80vw",color:"white" }}>Razer virtual credits for gamers worldwide, available in over 42,000 games
                            and entertainment titles.</h3>
                        <h5 style={{ color: "green", cursor: "pointer", padding: "2px"}}>Shop Now &gt;</h5>
                    </center>
                  </div>
                 
                {/* -- */}
            <div style={{ backgroundColor: "black", color: "white", height: "300px",marginTop:"-130px"}} className='p-3 d-md-none d-sm-block'>
                <h3>GOLD WEBSHOP</h3>
                <h6>Razer virtual credits for gamers worldwide, available in over 42,000 games
                    and entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for
                    your buck—including getting rewarded with Razer Silver and exclusive game deals.</h6><br></br>
                Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the world.
                <h6 className='text-center' style={{ color: "green", cursor: "pointer", padding: "2px" }}>Shop Now &gt;</h6>
            </div>

            {/* --------------------DIV 6----------------------- */}
                <div className='serItems'>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/c126593c168b557f2d7f3f0f596f4364/services-gift-card-mobile.jpg" className='ser-img' style={{width:"100vw"}}></img>
                    <center className='d-none d-md-block' style={{position:"relative",top:"-623px"}}>
                        <h1 style={{ fontSize: "3vw", padding: "2px",color:"white" }}>RAZER GIFT CARD - GIVE THE GIFT OF GAMING</h1>
                        <h3 style={{ fontSize: "2.3vw", padding: "2px", width: "80vw",color:"white" }}>The Razer Gift Card unlocks the ultimate gifts for any gamer. From gaming peripherals to laptops to apparel, redeem from the largest catalog of Razer gear in the world, including rare and exclusive products only found on Razer.com. Recipients also enjoy 14-day risk free returns, and comprehensive customer support.</h3>
                        <h5 style={{ color: "green", cursor: "pointer", padding: "2px"}}>Learn More &gt;</h5>
                    </center>
                  </div>
                 
                {/* -- */}
            <div style={{ backgroundColor: "black", color: "white", height: "300px",marginTop:"-130px"}} className='p-3 d-md-none d-sm-block'>
                <h3>RAZER GIFT CARD - GIVE THE GIFT OF GAMING</h3>
                <h6>The Razer Gift Card unlocks the ultimate gifts for any gamer. From gaming peripherals to laptops to apparel, redeem from the largest catalog of Razer gear in the world, including rare and exclusive products only found on Razer.com. Recipients also enjoy 14-day risk free returns, and comprehensive customer support. Gold account online, or at any of our 5.6 million touchpoints around the world.</h6>
                <h6 className='text-center' style={{ color: "green", cursor: "pointer", padding: "2px" }}>Shop Now &gt;</h6>
            </div>

            {/* --------------------DIV 7----------------------- */}
                <div className='serItems'>
                    <img src="https://assets2.razerzone.com/images/pnx.assets/cd51cc9a2c8e89918bcce4a6b66132d3/razer-care-768x500-mobile.jpg" className='ser-img' style={{width:"100vw" }}></img>
                    <center className='d-none d-md-block' style={{position:"relative",top:"-623px"}}>
                        <h1 style={{ fontSize: "3vw", padding: "2px",color:"white" }}>RAZERCARE</h1>
                        <h3 style={{ fontSize: "2.3vw", padding: "2px", width: "80vw",color:"white" }}>Protect your Razer gear with RazerCare—includes extended warranty that covers both mechanical and electrical issues due to normal product usage.</h3>
                        <h5 style={{ color: "green", cursor: "pointer", padding: "2px"}}>Learn More &gt;</h5>
                    </center>
                  </div>
                 
                {/* -- */}
             <div style={{ backgroundColor: "black", color: "white", height: "200px",marginTop:"-100px"}} className='p-3 d-md-none d-sm-block'>
                <h3>RAZERCARE</h3>
                <h6>Protect your Razer gear with RazerCare—includes extended warranty that covers both mechanical and electrical issues due to normal product usage.</h6>
                <h6 className='text-center' style={{ color: "green", cursor: "pointer", padding: "2px" }}>Learn More &gt;</h6>
            </div>     

      <Footer></Footer>
            {/*------------------ */}
        </div>
    )
}
