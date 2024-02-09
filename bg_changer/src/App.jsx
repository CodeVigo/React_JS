import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="bg-black min-h-screen text-white flex justify-between items-center " style={{backgroundColor: color}}>
        <div className="p-5 m-5 bg-slate-800 rounded-lg">This is Background Changer</div>

        <div>
          <div className="m-5 p-4 rounded-xl bg-red-500"><button onClick={() =>{setColor('red')}}> Red</button></div>
          <div className="m-5 p-4 rounded-xl bg-green-500"><button onClick={() =>{setColor('green')}}>Green</button> </div>
          <div className="m-5 p-4 rounded-xl bg-blue-700"><button onClick={() =>{setColor('blue')}}>Blue</button> </div>
        </div>
      </div>
    </>
  );
}

export default App;
