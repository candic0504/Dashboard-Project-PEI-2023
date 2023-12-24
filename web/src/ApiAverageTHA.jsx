import React, { useEffect, useState } from 'react';
import './ApiAverageTHA.css';

function MeasureWidget() {
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
        const sum = data.reduce((acc, item) => acc + item.value, 0);
        return data.length > 0 ? (sum / data.length).toFixed(2) : 0;
    };

    return (
        <div className="widget-container measure-widget">
            <h1 className="widget-header">Moyennes des Mesures</h1>
                        <select className="form-select form-select-lg mb-3" onChange={(e) => setSelectedMeasure(e.target.value)}>
                            <option value="">Choisissez une mesure</option>
                            <option value="temperature">Température</option>
                            <option value="humidity">Humidité</option>
                            <option value="airPollution">Pollution de l'air</option>
                        </select>
                        {selectedMeasure && <div className="alert alert-info" role="alert">
                            Moyenne de {selectedMeasure}: {averageValue}
                        </div>}
         </div>
                
    );
}

export default MeasureWidget;
