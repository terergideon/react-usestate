import "./App.css";
import React, { useState, useEffect } from "react"; //import  tjhe useState an to use .
//hooks are used inside a function componenet. classes  odes the same thing in a differentr manner.
// hooks execute in orderof the code run. nevernested and shoule be placed on top of the functions.
function App() {
  const [count, setCount] = useState(0);
  //useState(()=>{
  //return 0;
  //when we use the arrow function on usestate it actually calls the function once every time it is rendered ,
  //if declared outside the usestate of not used as arrow function it can be called every time the
  //system rerenders.
  //})//always the first parameter is the initial count
  //while the second sets the counter
  function decreamentCount() {
    setCount((previousCount) => previousCount - 1);
    setCount((previousCount) => previousCount - 1);
  }
  function increamentCount() {
    setCount((nextCount) => nextCount + 1);
  }
  const handleResize=(()=>{
    setwindowWidth(window.innerWidth);

  })

  //useState for window width
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener('resize',handleResize)
    // return ()=>
    // window.removeEventListener{}
  },[])

  // use Effect functions
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`) //call api and fetch give an end  point of the initial usestate
      .then((response) => response.json()) //respond in json file
      .then((json) => setItems(json)); //
  }, [resourceType]); //to enable you render some things needed only we pass an array at the end of the useEfect
  return (
    <div className="App">
      <button onClick={decreamentCount}>-</button>
      <span>{count}</span>
      <button onClick={increamentCount}>+</button>

      {/* useEffects -perfoms side effects whenever something happens*/}
      <div className="useStates">
        <button onClick={() => setResourceType("posts")}> posts </button>
        <button onClick={() => setResourceType("users")}> users </button>
        <button onClick={() => setResourceType("comments")}> comments </button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        // return <pre>{JSON.stringify(item)}</pre>;
      })}
      <div className="windowWidth">{windowWidth}</div>
    </div>

    //  use effects
  );
}

export default App;
