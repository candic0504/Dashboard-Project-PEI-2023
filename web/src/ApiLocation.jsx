import React, { useEffect, useState } from 'react';

import './ApidLocation.css';

function SensorWidget() {
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
        <div className="widget-container">
        <h1 className="widget-header">Localisation des Capteurs</h1>
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


export default SensorWidget;