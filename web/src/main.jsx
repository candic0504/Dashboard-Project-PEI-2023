import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App.jsx";

import ApiD from "./ApiD.jsx";
import ApiLocation from "./ApiLocation.jsx";
import User from "./User.jsx";
import Sensor_Per_Year from "./Sensor_Per_Year.jsx";
import ApiAverageTHA from "./ApiAverageTHA.jsx";
import ApiGraph from "./ApiGraph.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  {/*
    <React.StrictMode>
      <App />
    </React.StrictMode>
*/}

   <ApiD />
    <ApiLocation />
    <Sensor_Per_Year/>
    <User/>
    <ApiAverageTHA/> 
    <ApiGraph/>
    

  </>
);
