import React from "react";
import Card from "./src/assets/Card";
import Myplant from "./assets/Myplant";

function junction() {
    const data =(plantt)=>{
      console.log(plantt)
    }
    const [receivedData, setReceivedData] = useState([]);
    const receiveDataFromCard = (data) => {
      console.log(data);
      setReceivedData(data);
    };
// 7
  return <div>junction
<Card receivedData={receiveDataFromCard}   />  //Receivng the data from Card
    <Myplant xyz={receivedData}/>
  </div>;
}

export default junction;
