import React from 'react';
import { useState} from 'react';
import App from '/Projects/Learn React/clicker/src/App'

export default function Disp(){

  const [count,setCount] = useState (0)
 
  const plus = () =>{
    setCount(count + 1)
  }
  const minus = ()=>{
    setCount(count - 1)
  }
  return (
    
    <div className = "App">
      <h1>Number is {count} </h1>
      <p onClick = {plus}>Press to +1</p>
      <p onClick = {minus}>Press to -1</p>
    </div>
  );
}
  