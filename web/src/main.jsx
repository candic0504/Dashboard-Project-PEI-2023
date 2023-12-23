import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App.jsx";

import Apid from "./Apid.jsx";
import ApiLocation from "./ApiLocation.jsx";
import Sensor_Per_Year from "./Sensor_Per_Year.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  {/*
    <React.StrictMode>
      <App />
    </React.StrictMode>
*/}
    <Apid />
    <ApiLocation />
    <Sensor_Per_Year/>
    

  </>
);
