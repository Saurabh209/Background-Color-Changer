import { useState } from "react";

import "./App.css";
import Button from "./assets/Button/Button.jsx";
function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div class="box"
      style={{ backgroundColor: color }}
    >
      <div class="buttonContainer">
        <button />
        <button/>
      </div>
    </div>
  );
}

export default App;
