import "./Apid.css"; 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=e59e9f9354220d18142cf0870207eead&units=metric`);
        setWeatherData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (isLoading) {
    return <div className="text-center my-5">Chargement des données météo...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">Erreur lors du chargement des données météo.</div>;
  }

  if (!weatherData) {
    return <div className="text-center my-5">Aucune donnée météo disponible.</div>;
  }

  return (
    <div className={`weather-widget-custom d-flex flex-column align-items-center justify-content-center text-white p-3 my-3 rounded shadow`}>
      <h2>Météo à {weatherData.name}</h2>
      <p>Température: {weatherData.main.temp} °C</p>
      <p>Humidité: {weatherData.main.humidity}%</p>
      {/* Ajoutez des boutons ou autres éléments ici, en appliquant des styles personnalisés au besoin */}
      <button className="custom-button mt-2">Plus d'infos</button>
    </div>
  );
};

export default WeatherWidget;
