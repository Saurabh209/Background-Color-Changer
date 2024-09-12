import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div class="box"
      style={{ backgroundColor: color }}
    > </div>
  );
}

export default App;
