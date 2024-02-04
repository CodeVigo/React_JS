import { useState } from "react";

import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <div>
        <Card username="Vigo" go="Visit me" />
        <Card username="Vi" />
      </div>
    </>
  );
}

export default App;