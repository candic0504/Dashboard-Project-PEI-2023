import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import des composants de page
import Apid from "./Apid.jsx";
import ApiLocation from "./ApiLocation.jsx";
import User from "./User.jsx";
import Sensor_Per_Year from "./Sensor_Per_Year.jsx";
import ApiAverageTHA from "./ApiAverageTHA.jsx";
import ApiGraph from "./ApiGraph.jsx";
import OpenCageGeocoder from "./AirQuality.jsx";
import AdminPage from "./AdminPage"; 
import Navigation from './Navigation'; 

//CSS 
import './App.css';
import './AdminPage.css';



import 'bootstrap/dist/css/bootstrap.min.css';
import AirQualityWidget from "./AirQuality.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
    <Navigation /> {}
    <Routes>
      <Route path="/" element={
        <>
          {}
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 mx-auto" style={{ margin: '0.125rem', gap: '1rem' }}>
                <Apid/>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 mx-auto" style={{ margin: '2.125rem', gap: '1rem' }}>
                <ApiGraph/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto" style={{margin: '1.125rem', gap: '1rem' }}>
                <ApiLocation/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto" style={{ margin: '1.125rem', gap: '1rem'}}>
                <User/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto" style={{ margin: '1.125rem', gap: '1rem'}}>
                <Sensor_Per_Year/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto" style={{ margin: '1.125rem', gap: '1rem'}}>
                <AirQualityWidget/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 mx-auto" style={{ margin: '2.125rem', gap: '1rem'}}>
                <ApiAverageTHA/>
              </div>
            </div>
          </div>
        </>
      } />
      <Route path="/admin" element={<AdminPage />} /> {}
      {}
    </Routes>
  </BrowserRouter>
);

