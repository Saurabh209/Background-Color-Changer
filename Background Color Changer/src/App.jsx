import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <div class="box"
      style={{ backgroundColor: color }}
    >
      <div class="buttonContainer">
      <button class="button" onClick={()=>setcolor("#FA0201")} style={{backgroundColor:"#FA0201"}}></button>
      <button class="button" onClick={()=>setcolor("#FF751D")} style={{backgroundColor:"#FF751D"}}></button>
      <button class="button" onClick={()=>setcolor("#FFCB20")} style={{backgroundColor:"#FFCB20"}}></button>
      <button class="button" onClick={()=>setcolor("#D9FF1E")} style={{backgroundColor:"#D9FF1E"}}></button>
      <button class="button" onClick={()=>setcolor("#82FF1C")} style={{backgroundColor:"#82FF1C"}}></button>
      <button class="button" onClick={()=>setcolor("#00FD57")} style={{backgroundColor:"#00FD57"}}></button>
      <button class="button" onClick={()=>setcolor("#1DFFC2")} style={{backgroundColor:"#1DFFC2"}}></button>
      <button class="button" onClick={()=>setcolor("#02DEFF")} style={{backgroundColor:"#02DEFF"}}></button>
      <button class="button" onClick={()=>setcolor("#1E8BFF")} style={{backgroundColor:"#1E8BFF"}}></button>
      <button class="button" onClick={()=>setcolor("#0318FC")} style={{backgroundColor:"#0318FC"}}></button>
      <button class="button" onClick={()=>setcolor("#7600ED")} style={{backgroundColor:"#7600ED"}}></button>
      <button class="button" onClick={()=>setcolor("#AE01FB")} style={{backgroundColor:"#AE01FB"}}></button> 
      <button class="button" onClick={()=>setcolor("#D606DE")} style={{backgroundColor:"#D606DE"}}></button>
      <button class="button" onClick={()=>setcolor("#FC0087")} style={{backgroundColor:"#FC0087"}}></button>
      <button class="button" onClick={()=>setcolor("#FC0026")} style={{backgroundColor:"#FC0026"}}></button>
     
          
      </div>
    </div>
  );
}

export default App;
