import React, { useEffect, useState } from 'react';
import './ApiLocation.css';

function ApiLocation() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [percentage, setPercentage] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/DashboardProject/sensors')
            .then(response => response.json())
            .then(data => {
                const totalSensors = data.length;
                const sensorsInLocation = data.filter(sensor => sensor.location === selectedLocation).length;
                const calculatedPercentage = totalSensors > 0 ? (sensorsInLocation / totalSensors) * 100 : 0;
                setPercentage(calculatedPercentage.toFixed(2));
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, [selectedLocation]);

    return (
        <div className='container'>
                        <h1 >Localisation des Capteurs</h1>
                                <select className="form-select form-select-lg mb-3" onChange={(e) => setSelectedLocation(e.target.value.toLowerCase())}>
                                    <option value="">Choisissez une localisation</option>
                                    <option value="bedroom">Chambre</option>
                                    <option value="bathroom">Salle de bain</option>
                                    <option value="livingroom">Salon</option>
                                    <option value="entrance">Entrée</option>
                                    
                                </select>
                                    {selectedLocation && <div className="alert alert-info widget-alert" role="alert">
                                    Pourcentage de capteurs dans {selectedLocation} : {percentage}%
                                </div>}
        </div>
);
}


export default ApiLocation;