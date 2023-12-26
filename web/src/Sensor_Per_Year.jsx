import React, { useEffect, useState } from 'react';

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
            <div className="row">
                <div className="col-lg-2 col-md-8 col-sm-12 mx-auto" style={{ margin: '50px', gap: '20px' }}>
                    <h1>Données des Capteurs</h1>
                    <select onChange={(e) => setSelectedYear(e.target.value)}>
                        <option value="">Choisissez une année</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                    <p>Total des capteurs de {selectedYear} : {selectedYear === '2019' ? count2019 : count2018}</p>
                </div>
            </div>
        </div>
    );
    
}

export default SensorWidget;



