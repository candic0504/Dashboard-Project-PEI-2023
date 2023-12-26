import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AirQualityWidget() {
    const [airQuality, setAirQuality] = useState({});
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const tauxPM10 = airQuality.list && airQuality.list[0].components.pm10 < 100;

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleGeocode = async () => {
        setLoading(true);
        setError(null);
        try {
            const apiKey = '24449f0a4e464c07a13eb6f90a17746a'; // Remplacez par votre clé API OpenCage
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`);
            if (response.data && response.data.results && response.data.results.length > 0) {
                const { lat, lng } = response.data.results[0].geometry;
                setCoordinates({ lat, lng });
                fetchAirQualityData(lat, lng);
            } else {
                setAirQuality({});
                setError('Aucun résultat trouvé');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchAirQualityData = async (lat, lon) => {
        try {
            const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=e59e9f9354220d18142cf0870207eead`;
            const response = await axios.get(url);
            setAirQuality(response.data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container">
            <div className='row'>
                <div className="col-lg-3 col-md-8 col-sm-12 mx-auto" style={{ margin: '50px', gap: '20px' }}>
                    <h1 className="widget-header quality-widget">Qualité de l'Air</h1>
                                <input type="text" value={address} onChange={handleAddressChange} placeholder="Entrez une adresse" />
                                <button onClick={handleGeocode}>Vérifier la Qualité de l'Air</button>
                                <h3 className="exemple">Exemple : 7 rue du Pavillon, Triel sur Seine</h3>
                                {loading && <p>Chargement...</p>}
                                {error && <p>Erreur : {error}</p>}
                                {airQuality.list ? (
                                    <div>
                                        {tauxPM10 ? (
                                            <>
                                            <img src="sourire.png" alt="BIEN" width="50" height="50" />
                                            <p>BONNE</p>
                                            </>
                                        ) : (
                                            <>
                                            <img src="masque.png" alt="NUL" width="50" height="50" />
                                            <p>MAUVAISE : Portez un masque ! </p>
                                            </>
                                        )}
                                        <h3>INDICATEURS</h3>
                                        <p>PM2.5: {airQuality.list[0].components.pm2_5}</p>
                                        <p>PM10: {airQuality.list[0].components.pm10}</p>
                                        {/* Autres composants de qualité de l'air */}
                                    </div>
                                ) : (
                                    <p>Entrez une adresse pour obtenir les données de qualité de l'air</p>
                                )}
                </div>
            </div>
        </div>
    );
}

export default AirQualityWidget;