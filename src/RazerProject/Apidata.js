import { useEffect, useState } from 'react'

//---------watch yt 38 video----------//

export default function Apidata()
  //instad of url ,just pasted api link at url place in "Apidata(url)" function for direct use of api data.
 {  
    let [data,setData]=useState({})

     useEffect(
        ()=>{getData()
        },[]
     )   


    async function getData(){
            let res=await fetch('https://fakestoreapi.com/products/1');
            let apidata =await res.json();
            setData(apidata)
        }
  return data

}
