import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminPage() {
    const [selectedCollection, setSelectedCollection] = useState('');
    const [documentData, setDocumentData] = useState({});

    const handleCollectionChange = (event) => {
        setSelectedCollection(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDocumentData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dbName = 'DashboardProject'; // Remplacez par votre nom de base de données

        try {
            const response = await axios.post(`http://localhost:3000/api/${dbName}/${selectedCollection}`, documentData);
            console.log('Document ajouté', response.data);
            // Gérez la réponse ici
        } catch (error) {
            console.error('Erreur lors de la création du document', error);
            // Gérez l'erreur ici
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <h1>ADMIN</h1>
                    <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
                </div>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <select onChange={handleCollectionChange} value={selectedCollection}>
                        <option value="">Choisissez une collection</option>
                        <option value="users">users</option>
                        <option value="sensors">sensors</option>
                        <option value="measures">measures</option>
                    </select>
                    {
                        selectedCollection === "users" && (
                            <>
                                <input type="text" name="location" placeholder="Location" onChange={handleInputChange} />
                                <input type="number" name="personInHouse" placeholder="Person in House" onChange={handleInputChange} />
                                <input type="text" name="houseSize" placeholder="House Size" onChange={handleInputChange} />
                            </>
                        )
                    }
                    {
                        selectedCollection === "sensors" && (
                            <>
                                <input type="text" name="creationDate" placeholder="Creation Date" onChange={handleInputChange} />
                                <input type="text" name="location" placeholder="Location of the sensor" onChange={handleInputChange} />
                            </>
                        )
                    }
                    {
                        selectedCollection === "measures" && (
                            <>
                                <input type="text" name="type" placeholder="Type of measure" onChange={handleInputChange} />
                                <input type="text" name="creationDate" placeholder="Creation Date" onChange={handleInputChange} />
                                <input type="number" name="value" placeholder="Value of the measure" onChange={handleInputChange} />
                            </>
                        )
                    }

                    <button type="submit" className="btn btn-success">Créer Document</button>
                </form>
            </div>
        </div>
    );
}

export default AdminPage;
