import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ApiD.css'; 

const ApiD = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedPays, setSelectedPays] = useState('Ethiopia'); // Pays par défaut
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Liste des pays pour le menu déroulant
  const pays = ['Ethiopia', 'Czech republic', 'Italy', 'Greece','China', 'Poland', 'Thailand', 'Morocco', 'Malaysia','Slovenia', 'Philippines', 'Mexico', 'Ecuador', 'Albania','Japan','Peru','Russia'];

  // Déterminez la classe de fond en fonction de la température
  const backgroundClass = weatherData && weatherData.main.temp > 20 ? 'weather-widget-chaud' : 'weather-widget-froid';


  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedPays}&appid=e59e9f9354220d18142cf0870207eead&units=metric`);
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError(err.response && err.response.data.message ? err.response.data.message : err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedPays]);

  const handlePaysChange = (event) => {
    setSelectedPays(event.target.value);
  };

  if (isLoading) {
    return <div className="text-center my-5">Chargement des données météo...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">Erreur lors du chargement des données météo : {error}</div>;
  }

  if (!weatherData) {
    return <div className="text-center my-5">Aucune donnée météo disponible.</div>;
  }

  return (
    <div className={`weather-widget-custom d-flex flex-column align-items-center justify-content-center text-white p-3 rounded shadow ${backgroundClass}`}>
      <div className="mb-3 w-100">
        <select className="form-select custom-select" value={selectedPays} onChange={handlePaysChange}>
          {pays.map(pays => (
            <option key={pays} value={pays}>{pays}</option>
          ))}
        </select>
      </div>
      <h2>Météo à {weatherData.name}</h2>
      <p>Température: {weatherData.main.temp} °C</p>
      <p>Humidité: {weatherData.main.humidity}%</p>
      {/*<button className="custom-info-button btn mt-2">Plus d'infos</button>*/}
    </div>
  );
};

export default ApiD;

