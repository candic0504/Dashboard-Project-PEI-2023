import React, { useEffect, useState } from 'react';
import './Sensor_per_Year.css';

function SensorWidget() {
    const [count2019, setCount2019] = useState(0);
    const [count2018, setCount2018] = useState(0);
    const [selectedYear, setSelectedYear]= useState(null);

    useEffect(() => {
        if (selectedYear) {
            fetch(`http://localhost:3000/api/DashboardProject/sensors`)
                .then(response => response.json())
                .then(data => {
                    const total = data.filter(sensor => sensor.creationDate.endsWith(selectedYear)).length;
                    if (selectedYear === '2019') {
                        setCount2019(total);
                    } else if (selectedYear === '2018') {
                        setCount2018(total);
                    }
                })
                .catch(error => console.error('Erreur lors de la récupération des données:', error));
        }
    }, [selectedYear]);
    

    return (
        <div className="container">
                    <div className='sensor-per-year-container d-flex flex-column align-items-center'>
                                        <select className='choix-annee' onChange={(e) => setSelectedYear(e.target.value)}>
                                            <option value="">Choisissez une année</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                        </select>
                                        <p className='year-sensor'> {selectedYear === '2019' ? count2019 : count2018}</p>
                                        <p className='capteur-achete' >Capteurs achetés</p>
                                        <p>en {selectedYear} </p>
                    </div>  
        </div>
    );
    
}

export default SensorWidget;



