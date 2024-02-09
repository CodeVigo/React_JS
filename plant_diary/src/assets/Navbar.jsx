import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between w-[100vw] pt-3">
        <div className="bg-slate-800 min-h-1 pl-5 text-2xl">Plant-Library</div>
        <div className="flex justify-between w-2/3 pr-6">
          <div className="border-2 rounded-lg p-2  border-orange-800 hover:bg-lime-400">
            <Link to="/Addplant">AddPlant</Link>
          </div>
          <div className="border-2 rounded-lg p-2  border-orange-800  hover:bg-lime-400">
            <Link to="/Myplant">MyPlant</Link>
          </div>
          <div className="border-2 rounded-lg p-2  border-orange-800  hover:bg-lime-400">
            About
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
