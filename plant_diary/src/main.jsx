import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Landing from "./assets/Landing.jsx";
import Addplant from "./assets/Addplant.jsx";
import Myplant from "./assets/Myplant.jsx";
import Footer from "./assets/Footer.jsx";
import Navbar from "./assets/navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index  element={<Landing />}/>
          <Route path="Navbar" element={< Navbar/>}></Route>
          <Route path="Myplant" element={< Myplant/>}></Route>
          <Route path="Addplant" element={< Addplant/>}></Route>
          <Route path="Footer" element={< Footer/>}></Route>

        </Route>
      </Routes>
  </BrowserRouter>
);
