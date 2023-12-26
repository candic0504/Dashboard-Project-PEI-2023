import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import des composants de page
import Apid from "./Apid.jsx";
import ApiLocation from "./ApiLocation.jsx";
import User from "./User.jsx";
import Sensor_Per_Year from "./Sensor_Per_Year.jsx";
import ApiAverageTHA from "./ApiAverageTHA.jsx";
import MeasureWidget from "./ApiGraph.jsx";
import OpenCageGeocoder from "./AirQuality.jsx";
import AdminPage from "./AdminPage"; 
import Navigation from './Navigation'; 

//CSS 
import './App.css';
import './AdminPage.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
    <Navigation /> {}
    <Routes>
      <Route path="/" element={
        <>
          {}
          <Apid />
          <ApiLocation />
          <Sensor_Per_Year />
          <User />
          <ApiAverageTHA />
          <MeasureWidget/>
          <OpenCageGeocoder />
        </>
      } />
      <Route path="/admin" element={<AdminPage />} /> {}
      {}
    </Routes>
  </BrowserRouter>
);
