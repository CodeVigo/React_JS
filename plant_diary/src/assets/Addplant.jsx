import React from "react";
import Card from "./Card";

function Addplant() {
  const plants = {
    Tulsi: {
      name: "Tulsi ",
      image:
        "https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHR1bHNpfGVufDB8fDB8fHww",
      Scientific_Name: "Ocimum tenuiflorum",
      Discription:
        "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.",
      //   price: 100,
    },
    Avocado: {
      name: "Avocado",
      image:
        "https://assets.flowersnfruits.com/uploads/product-pics/1687350686_12.png",
      Scientific_Name: "Persea americana",
      Discription:
        "A lily is a woody perennial flowering plant of the genus Lilium, in the family Asteraceae, or the lily of the field.",
      //   price: 150,
    },
    Kiwi: {
      name: "Kiwi",
      image:
        "https://images.unsplash.com/photo-1514116799412-5876d319c242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FuZGFsd29vZHxlbnwwfHwwfHx8MA%3D%3D",
      Scientific_Name: "Actinidia deliciosa",
      Discription:
        "A hibiscus is a shrub or small tree in the family Hibranchaceae.",
      //   price: 200,
    },
    Sunflower: {
      name: "Sunflower",
      image:
        "https://images.unsplash.com/photo-1601767770428-265b2c67780c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbWVncmFuYXRlfGVufDB8fDB8fHww",
      Scientific_Name: "Rosa",
      Discription:
        "A sunflower is a tall annual of the genus Helianthus, which is native to South and Southeast Asia.",
      //   price: 250,
    },
    Lemon: {
      name: "Lemon",
      image:
        "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlbW9uJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      Scientific_Name: "Rosa",
      Discription:
        "A carnation is a flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.",
      //   price: 300,
    },
    Apple: {
      name: "Apple",
      image:
        "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB0cmVlfGVufDB8fDB8fHww",
      Scientific_Name: "Apple",
      Discription:
        "A lavender is a woody perennial flowering plant of the genus Lavandula, in the familyLavandulaceae.",
      //   price: 350,
    },
    Moosambi: {
      name: "Moosambi",
      image:
        "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB0cmVlfGVufDB8fDB8fHww",
      Scientific_Name: "Apple",
      Discription:
        "A lavender is a woody perennial flowering plant of the genus Lavandula, in the familyLavandulaceae.",
      //   price: 350,
    },
    Mango: {
      name: "Mango",
      image:
        "https://images.unsplash.com/photo-1589122262990-7c92c203aeb9?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Scientific_Name: "Mangifera indica",
      Discription:
        "A jasmine is a woody perennial flowering plant of the genus Jasminum, in the family Jasminaceae.",
      //   price: 400,
    },
  };

  return (
    <div>
      <h3 className="text-[100px] font-bold text-center ">Add Plant</h3>

      <div className="flex ">
        <div className="flex flex-wrap justify-around text-center  ">
          {Object.values(plants).map((d) => (
            <Card key={d.name} plant={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Addplant;
