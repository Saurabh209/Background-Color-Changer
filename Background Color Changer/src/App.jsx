import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    > <h3 className="text-white text-4xl font-bold">Your Name Here</h3></div>
  );
}

export default App;
