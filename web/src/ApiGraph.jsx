import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApiGraph.css';

const MeasureWidget = () => {
    const [chartData, setChartData] = useState({ datasets: [] });
    const [sensorID, setSensorID] = useState("");
    const [searchedSensorID, setSearchedSensorID] = useState(""); 

    const sortByDate = (a, b) => {
        const dateA = new Date(a.x).getTime();
        const dateB = new Date(b.x).getTime();
        return dateA - dateB;
    };

    const fetchData = () => {
        if (!searchedSensorID) {
            console.error("Veuillez entrer un ID de capteur valide.");
            return;
        }

        fetch(`http://localhost:3000/api/DashboardProject/measures`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Raw data from API:', data);

                const filteredData = data.filter(item => item.sensorID === searchedSensorID);
                console.log('Filtered data:', filteredData);

                const temperatureData = filteredData
                    .filter(item => item.type === 'temperature')
                    .map(item => ({ x: new Date(item.creationDate), y: item.value }))
                    .sort(sortByDate);

                const humidityData = filteredData
                    .filter(item => item.type === 'humidity')
                    .map(item => ({ x: new Date(item.creationDate), y: item.value }))
                    .sort(sortByDate);

                const airPollutionData = filteredData
                    .filter(item => item.type === 'airPollution')
                    .map(item => ({ x: new Date(item.creationDate), y: item.value }))
                    .sort(sortByDate);

                console.log('Temperature data:', temperatureData);
                console.log('Humidity data:', humidityData);
                console.log('Air Pollution data:', airPollutionData);

                setChartData({
                    datasets: [
                        {
                            label: 'Température',
                            data: temperatureData,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            showLine: true,
                            fill: false,
                        },
                        {
                            label: 'Humidité',
                            data: humidityData,
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            showLine: true,
                            fill: false,
                        },
                        {
                            label: 'Pollution de l\'air',
                            data: airPollutionData,
                            backgroundColor: 'rgba(75, 192, 192, 0.5)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            showLine: true,
                            fill: false,
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Fetching error:', error);
            });
    };

    useEffect(() => {
        if (sensorID) {
            setSearchedSensorID(sensorID);
            fetchData();
        }
    }, [sensorID]);

    return (
        <div className="d-flex justify-content-center align-items-center my-3">
            <div className="card measure-widget">
                <div className="card-header text-center">
                    <h1>Graphique des Mesures pour Capteur {sensorID}</h1>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="sensorID">ID du Capteur :</label>
                        <input
                            type="text"
                            id="sensorID"
                            className="form-control"
                            value={sensorID}
                            onChange={e => setSensorID(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={fetchData}>
                        Rechercher
                    </button>
                    <Scatter data={chartData} options={{
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: 'day',
                                },
                            },
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }} />
                </div>
            </div>
        </div>
    );
}

export default MeasureWidget;
