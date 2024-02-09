import React, { useState } from "react";
import Addplant from "./Addplant";
let plantt = [];

function Card({ plant,receivedData }) {
    const [plantData, setPlantData] = useState([]);

    function addPlant(e) {
      const newPlant = e.target.value;
      setPlantData(prevData => [...prevData, newPlant]); // Push new data to the array
      receivedData(plantData); // Pass the updated array to the parent component
    }
  return (
    <div className="card w-[300px] rounded-lg min-h-max flex flex-col text-xl gilroy p-7 m-2  shadow-slate-400 bg-slate-700   justify-center items-center  mb-7 hover:scale-105 duration-700 ">
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} className=' h-[300px] object-cover object-left-top hover:object-bottom duration-700 rounded-lg border flex-grow'/>
      <p>Scientific Name : {plant.Scientific_Name}</p>
      <p> Description : {plant.Discription} </p>
      <div className="flex justify-between">
        <button
          onClick={addPlant}
          value={plant.name}
          className="border-2 m-1  rounded-lg p-2  border-orange-800  hover:bg-yellow-400"
        >
          Add
        </button>
        <button className="border-2 m-1  rounded-lg p-2  border-orange-800  hover:bg-yellow-400">
          Remove
        </button>
      </div>
    </div>
  );
}

export default Card;
