import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
// Import des composants de page
=======
// import App from "./App.jsx";

// Importez vos composants de page
>>>>>>> ff9526f2f976c793f6dc2a7585b6aa1d4a76ef5a
import Apid from "./Apid.jsx";
import ApiLocation from "./ApiLocation.jsx";
import User from "./User.jsx";
import Sensor_Per_Year from "./Sensor_Per_Year.jsx";
import ApiAverageTHA from "./ApiAverageTHA.jsx";
<<<<<<< HEAD
import MeasureWidget from "./ApiGraph.jsx";
import OpenCageGeocoder from "./AirQuality.jsx";
import AdminPage from "./AdminPage"; 
import Navigation from './Navigation'; 

//CSS 
import './App.css';
import './AdminPage.css';
=======
import ApiGraph from "./ApiGraph.jsx";

import OpenCageGeocoder from "./AirQuality.jsx";
import AdminPage from "./AdminPage"; // Supposons que c'est votre page d'administration
import Navigation from './Navigation'; // Votre composant de navigation

>>>>>>> ff9526f2f976c793f6dc2a7585b6aa1d4a76ef5a

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
<<<<<<< HEAD
          <MeasureWidget/>
          <OpenCageGeocoder />
=======
          <OpenCageGeocoder />
          <ApiGraph />
>>>>>>> ff9526f2f976c793f6dc2a7585b6aa1d4a76ef5a
        </>
      } />
      <Route path="/admin" element={<AdminPage />} /> {}
      {}
    </Routes>
  </BrowserRouter>
<<<<<<< HEAD
);
=======
);
>>>>>>> ff9526f2f976c793f6dc2a7585b6aa1d4a76ef5a
