import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div class="box"
      style={{ backgroundColor: color }}
    >
      <div class="buttonContainer">
      <button class="button" onClick={()=>setcolor("red")} style={{backgroundColor:"Red"}}></button>
      <button class="button" onClick={()=>setcolor("blue")} style={{backgroundColor:"blue"}}></button>
      <button class="button" onClick={()=>setcolor("green")} style={{backgroundColor:"green"}}></button>
      <button class="button" onClick={()=>setcolor("yellow")} style={{backgroundColor:"yellow"}}></button>
      <button class="button" onClick={()=>setcolor("purple")} style={{backgroundColor:"purple"}}></button>
      <button class="button" onClick={()=>setcolor("orange")} style={{backgroundColor:"orange"}}></button>
      
      </div>
    </div>
  );
}

export default App;
