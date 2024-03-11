import React from 'react'
import Data from './data.json'

export default function Store() {
  return (
  <div className='storeCon' style={{ backgroundColor: "black", height: "auto" }}>
    <nav className='storeNav1' style={{ width: "100vw", height: "200px" }}>
      <ul className='storeUl1' style={{ width: "100vw", gap: "12px" }}>
        <li className='storeLl1'><div style={{ textAlign: "center" }}> <img src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blade-16_200x150.png" style={{ width: "100px" }}></img><p style={{ color: "green", textAlign: "center", marginTop: "15px" }}>Laptops</p></div></li>
        <li className='storeLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_gamer-room_icon_188x150.webp" style={{ width: "100px", height: "80px" }}></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "6px" }}>GamerRoom</p></div></li>
        <li className='storeLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-basilisk-v3-pro_90x150.png" style={{ width: "100px", height: "80px" }}></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "7px" }}>Mice</p></div></li>
        <li className='storeLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blackwidow-v4-pro_168x150.png" style={{ width: "100px", height: "80px" }}></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "8px" }}>Keyboard</p></div></li>
        <li className='storeLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.webp" style={{ width: "100px", height: "80px" }}></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "10px" }}>Audio</p></div></li>
        <li className='storeLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-edge_186x150.png" style={{ width: "100px", height: "80px" }}></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "14px" }}>Mobile</p></div></li>
        <li className='storeLl1'><div style={{ textAlign: "center" }}><img src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-kiyo-pro-ultra_118x150.png" style={{ width: "100px", height: "80px" }}></img><p style={{ color: "green", textAlign: "center", padding: "5px", marginTop: "12px" }}>ContentCreation</p></div></li>
      </ul>
    </nav>
    {/* --------------------------- */}
    <div>
      <h2 style={{ color: "#44D62C", fontSize: "3vw", fontWeight: "bold", top: "12px", position: "relative", left: "20px", padding: "1.4px" }}>THE LATEST AND GREATEST GAMMING GEAR</h2>
      <p style={{ color: "white", position: "relative", top: "12px", left: "25px", fontSize: "18px" }}>Razer mice, keyboards, headsets, laptops & more</p>
      <span style={{ color: "white", position: "relative", top: "12px", left: "22px", cursor: "pointer" }} className='a'>
        <p><img src='https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/razerstore-icon.svg'></img></p>
        <div style={{ margin: "-45px 0px 0px 42px" }}>
          <p>Find RazerStore</p>
          <p style={{ marginTop: "-20px" }}>near you</p>
        </div>
      </span>
    </div>
    {/* ---------------------------- */}
    <div className='storePc row mt-5 p-5 gap-4 d-flex flex-direction-row flex-row flex-nowrap' style={{ height: "650px" }}>
      {Data.map(value => {
        return <div className='col-8 col-sm-6 col-md-4 col-lg-3' style={{ height: "550px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "109.3%", marginLeft: "-12px" }}>
            <img src={value.image} style={{ width: "280px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "257px", width: "283px", marginLeft: "-12px" }}>
            <h3 style={{ color: 'white', }}>{value.name}</h3>
            <p style={{ color: 'gray', }}>NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor</p>
            <h6 style={{ color: 'white', }}>Now available in a sleek mercury or matte black finish.</h6>
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us${value.price}</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
      })}
    </div>
    <p style={{ color: "green", position: "relative", top: "-382px", left: "-22px", fontSize: "100px", float: "right", cursor: "pointer", opacity: ".4" }}>&gt;</p>
    {/* ---------------------------MOBILE---------------------- */}
    <div className='storeMob text-white'>
      <div style={{marginTop:'42px'}}>
         <h2>BEST SELLERS</h2>
         <h6>Join the hype train with the hottest products in our arsenal</h6>
      </div>
      <div className='mobCardsCon d-flex flex-row gap-4' style={{ width: "100%" }}>
        <div className='mobCard col-7 col-sm-6 col-md-4 col-lg-3' style={{ height: "500px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "99%", marginLeft: "2px" }}>
            <img src="https://assets3.razerzone.com/7nHLILYrxMeHhdiPAEr0X3606js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fhe9%2F9488900620318%2Fkiyo-pro-2-500x500.png" style={{ width: "260px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "200px", width: "270px", marginLeft: "0px" }}>
            <h3 style={{ color: 'white', }}>Razer Kiyo Pro</h3>
            <p style={{ color: 'gray', }}>USB Camera with High-Performance Adaptive Light Sensor</p>
            <br />
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us$235.34</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
        {/*---------------*/}
        <div className='col-7 col-sm-6 col-md-4 col-lg-3' style={{ height: "500px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "99%", marginLeft: "2px" }}>
            <img src="https://assets3.razerzone.com/7nHLILYrxMeHhdiPAEr0X3606js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fhe9%2F9488900620318%2Fkiyo-pro-2-500x500.png" style={{ width: "260px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "200px", width: "270px", marginLeft: "0px" }}>
            <h3 style={{ color: 'white', }}>Razer Kiyo Pro</h3>
            <p style={{ color: 'gray', }}>USB Camera with High-Performance Adaptive Light Sensor</p>
            <br />
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us$235.34</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
        {/*---------------*/}
        <div className='col-7 col-sm-6 col-md-4 col-lg-3' style={{ height: "500px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "99%", marginLeft: "2px" }}>
            <img src="https://assets3.razerzone.com/7nHLILYrxMeHhdiPAEr0X3606js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fhe9%2F9488900620318%2Fkiyo-pro-2-500x500.png" style={{ width: "260px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "200px", width: "270px", marginLeft: "0px" }}>
            <h3 style={{ color: 'white', }}>Razer Kiyo Pro</h3>
            <p style={{ color: 'gray', }}>USB Camera with High-Performance Adaptive Light Sensor</p>
            <br />
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us$235.34</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
        {/*---------------*/}
        <div className='col-7 col-sm-6 col-md-4 col-lg-3' style={{ height: "500px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "99%", marginLeft: "2px" }}>
            <img src="https://assets3.razerzone.com/7nHLILYrxMeHhdiPAEr0X3606js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fhe9%2F9488900620318%2Fkiyo-pro-2-500x500.png" style={{ width: "260px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "200px", width: "270px", marginLeft: "0px" }}>
            <h3 style={{ color: 'white', }}>Razer Kiyo Pro</h3>
            <p style={{ color: 'gray', }}>USB Camera with High-Performance Adaptive Light Sensor</p>
            <br />
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us$235.34</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
        {/*---------------*/}
        <div className='col-7 col-sm-6 col-md-4 col-lg-3' style={{ height: "500px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "99%", marginLeft: "2px" }}>
            <img src="https://assets3.razerzone.com/7nHLILYrxMeHhdiPAEr0X3606js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fhe9%2F9488900620318%2Fkiyo-pro-2-500x500.png" style={{ width: "260px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "200px", width: "270px", marginLeft: "0px" }}>
            <h3 style={{ color: 'white', }}>Razer Kiyo Pro</h3>
            <p style={{ color: 'gray', }}>USB Camera with High-Performance Adaptive Light Sensor</p>
            <br />
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us$235.34</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
        {/*---------------*/}
        <div className='col-7 col-sm-6 col-md-4 col-lg-3' style={{ height: "500px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "99%", marginLeft: "2px" }}>
            <img src="https://assets3.razerzone.com/7nHLILYrxMeHhdiPAEr0X3606js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fhe9%2F9488900620318%2Fkiyo-pro-2-500x500.png" style={{ width: "260px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "200px", width: "270px", marginLeft: "0px" }}>
            <h3 style={{ color: 'white', }}>Razer Kiyo Pro</h3>
            <p style={{ color: 'gray', }}>USB Camera with High-Performance Adaptive Light Sensor</p>
            <br />
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us$235.34</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
        {/*---------------*/}
        <div className='col-7 col-sm-6 col-md-4 col-lg-3' style={{ height: "500px", border: "2px solid green" }}>
          <div style={{ backgroundColor: "#111", height: "290px", width: "99%", marginLeft: "2px" }}>
            <img src="https://assets3.razerzone.com/7nHLILYrxMeHhdiPAEr0X3606js=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fhe9%2F9488900620318%2Fkiyo-pro-2-500x500.png" style={{ width: "260px", marginLeft: "-12px", }}></img>
          </div>
          <div className='p-2' style={{ backgroundColor: "#000", height: "200px", width: "270px", marginLeft: "0px" }}>
            <h3 style={{ color: 'white', }}>Razer Kiyo Pro</h3>
            <p style={{ color: 'gray', }}>USB Camera with High-Performance Adaptive Light Sensor</p>
            <br />
            <div style={{ color: "white" }}>
              from <br />
              <p style={{ marginTop: "-5px" }}>Us$235.34</p>
            </div>
            <button className='btn btn-success w-25' style={{ float: "right", marginTop: '-52px' }}>Buy</button>
          </div>
        </div>
        {/*---------------*/}
      </div>
    </div>
    <span id="left-arrow" class="arrow">&lt;</span>
    <span id="right-arrow" class="arrow">&gt;</span>
    {/* ----------------------MOUSE----------------------- */}
    <div className='storeMouse'>

    </div>
    {/* -----------------------BLUETOOTH-------------------------- */}
    <div className='storeBluetooth'>

    </div>
    {/* -----------------------BLUETOOTH-------------------------- */}
    <div className='storeChair'>

    </div>

    {/* ------end----- */}
  </div>
)
}
