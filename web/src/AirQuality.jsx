import React, { useEffect, useState } from 'react';

function AirQualityWidget() {
    const [airQuality, setAirQuality] = useState({});
    const latitude = 'LATITUDE'; // Remplacez par la latitude désirée
    const longitude = 'LONGITUDE'; // Remplacez par la longitude désirée

    useEffect(() => {
        const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=64.952416&lon=26.068944&appid=e59e9f9354220d18142cf0870207eead`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAirQuality(data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données de qualité de l'air:", error);
            });
    }, [latitude, longitude]);

    return (
        <div>
            <h1>Qualité de l'Air</h1>
            {/* Affichez les données de qualité de l'air comme vous le souhaitez */}
            <div>
                {airQuality.list ? (
                    <div>
                        <p>PM2.5: {airQuality.list[0].components.pm2_5}</p>
                        <p>PM10: {airQuality.list[0].components.pm10}</p>
                        {/* Ajoutez plus de composants de qualité de l'air si nécessaire */}
                    </div>
                ) : (
                    <p>Chargement des données de qualité de l'air...</p>
                )}
            </div>
        </div>
    );
}

export default AirQualityWidget;
