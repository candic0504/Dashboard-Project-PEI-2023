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
        <div className='widget-container'>
         <h1 className='titre'>Localisation des Capteurs</h1>
             <select className="form-select form-select-lg mb-3" onChange={(e) => setSelectedLocation(e.target.value.toLowerCase())}>
               <option value="Localisation">Choisissez une localisation</option>
                <option value="bedroom">Chambre</option>
                <option value="bathroom">Salle de bain</option>
                <option value="livingroom">Salon</option>
                <option value="entrance">Entrée</option>    
            </select>
               {selectedLocation && <div className="pourcentage">
                <div className="value-pourcentage">
               {percentage}% 
                </div>
                <div className="text-pourcentage">
               des capteurs sont dans {selectedLocation}  
                </div>
                 </div>}
        </div>
);
}


export default ApiLocation;