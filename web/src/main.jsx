import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importez vos composants de page
import Apid from "./Apid.jsx";
import ApiLocation from "./ApiLocation.jsx";
import User from "./User.jsx";
import Sensor_Per_Year from "./Sensor_Per_Year.jsx";
import ApiAverageTHA from "./ApiAverageTHA.jsx";
import OpenCageGeocoder from "./AirQuality.jsx";
import AdminPage from "./AdminPage"; // Supposons que c'est votre page d'administration
import Navigation from './Navigation'; // Votre composant de navigation

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
          <OpenCageGeocoder />
        </>
      } />
      <Route path="/admin" element={<AdminPage />} /> {}
      {}
    </Routes>
  </BrowserRouter>
);
