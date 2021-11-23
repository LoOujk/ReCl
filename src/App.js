import React from 'react';
import { useState ,useEffect} from 'react';
import Disp from "/Projects/Learn React/cl/src/Disp.js"

export default function App(){
 
  const [array,setArray] = useState([])
  useEffect(() =>{
    const newArr = []
    for(let i = 0;5>i;i++){
      newArr.push(i)
    }
    setArray(newArr)
   
  },[])
  return 
   <Disp/>
}


