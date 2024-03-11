import React,{useState} from 'react';
 
export default function CounterApp() {
  let[count,setCount]=useState(0);
  return (

       <center>
             <h3>Counter-app</h3>
             <button onClick={Add}>+ </button>
              <span>{count}</span>
             <button onClick={Minus}>-</button>
        </center>
  )


    function Add(){
      if(count<=9){
         setCount(count+1);
      }
   }

   function Minus(){
        if(count>0){
           setCount(count-1)
      }
    }
    
 }

