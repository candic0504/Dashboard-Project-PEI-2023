import React, { useEffect, useState } from 'react';
import './ApiAverageTHA.css';

function ApiAverageTHA() {
    const [selectedMeasure, setSelectedMeasure] = useState('');
    const [averageValue, setAverageValue] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/DashboardProject/measures')
            .then(response => response.json())
            .then(data => {
                if (selectedMeasure) {
                    const filteredData = data.filter(item => item.type === selectedMeasure);
                    const avg = calculateAverage(filteredData);
                    setAverageValue(avg);
                }
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, [selectedMeasure]);

    const calculateAverage = (data) => {
    console.log('Données filtrées:', data); 
    const sum = data.reduce((acc, item) => {
        console.log('Accumulateur:', acc, 'Valeur actuelle:', item.value); 
        return acc + Number(item.value); 
    }, 0);
    const average = data.length > 0 ? (sum / data.length).toFixed(2) : 0;
    console.log('Moyenne calculée:', average); 
    return average;
};

    return (
            <div className='container-average'>
                 <div className="widget-measures">
                    <h1 className="widget-header">Moyennes des Mesures</h1>
                    <select className="form-select form-select-lg mb-3 menudr" onChange={(e) => setSelectedMeasure(e.target.value)}>
                    <option value="">Choisissez une mesure</option>
                    <option value="temperature">Température</option>
                    <option value="humidity">Humidité</option>
                    <option value="airPollution">Pollution de l'air</option>
                    </select>

                   {selectedMeasure && <div className="average">
                   <div className="text-average">
                        La Moyenne de {selectedMeasure} est
                    </div>

                    <div className="value-average">
                        {averageValue}
                    </div>
                    
               </div>}
           </div>
        </div>          
    );
}

export default ApiAverageTHA;
