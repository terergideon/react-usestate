import './App.css';
import React,{useState} from 'react';//import  tjhe useState an to use .
//hooks are used inside a function componenet. classes  odes the same thing in a differentr manner.
// hooks execute in orderof the code run. nevernested and shoule be placed on top of the functions.

function App() {
const [count,setCount]= useState(0)
//useState(()=>{
  //return 0;
  //when we use the arrow function on usestate it actually calls the function once every time it is rendered ,
  //if declared outside the usestate of not used as arrow function it can be called every time the
  //system rerenders.
//})//always the first parameter is the initial count 
//while the second sets the counter 
function decreamentCount(){
  setCount((previousCount)=>previousCount-1)
  setCount((previousCount)=>previousCount-1)
}
function increamentCount(){
  setCount(nextCount=>nextCount+1)
}
  return (
    <div className="App">
      <button onClick={decreamentCount}>-</button>
       <span>{count}</span>
       <button onClick={increamentCount}>+</button>
    </div>
  );
}

export default App;
