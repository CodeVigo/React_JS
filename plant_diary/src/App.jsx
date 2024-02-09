import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./assets/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col  justify-between items-center text-white bg-slate-800 min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
