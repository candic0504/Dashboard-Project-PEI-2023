
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminPage.css';

function AdminPage() {
    const [selectedCollection, setSelectedCollection] = useState('');
    const [documentData, setDocumentData] = useState({});
    const [idToDelete, setIdToDelete] = useState('');
    const [dataAccessed, setDataAccessed] = useState(null);

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
        const dbName = 'DashboardProject'; 

        try {
            const response = await axios.post(`http://localhost:3000/api/${dbName}/${selectedCollection}`, documentData);
            console.log("données ajoutées");
        } catch (error) {
            console.error('Erreur lors de la création du document', error);
            // Gérez l'erreur ici
        }
    };

    const handleDelete = async () => {
        if (!selectedCollection || !idToDelete) {
            alert("Veuillez sélectionner une collection et fournir un ID.");
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:3000/api/DashboardProject/${selectedCollection}/${idToDelete}`, {
                method: 'DELETE'
            });
    
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Document supprimé', data);

        } catch (error) {
            console.error('Erreur lors de la suppression du document', error);
        }
    };

    const handleAccessData = async () => {
        if (!selectedCollection) {
            alert("Veuillez sélectionner une collection.");
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:3000/api/DashboardProject/${selectedCollection}`);
    
            const data = await response.json();
            console.log('Données récupérées', data);
            setDataAccessed(data);

        } catch (error) {
            console.error('Erreur lors de l’accès aux données', error);
        }
    };
    

    return (
        <div className="container-fluid admin-background">
            <div className="row">
                <form onSubmit={handleSubmit}>
                        <select onChange={handleCollectionChange} value={selectedCollection}>
                            <option value="">Choisissez une collection</option>
                            <option value="users">users</option>
                            <option value="sensors">sensors</option>
                            <option value="measures">measures</option>
                        </select>
                </form>
            </div>
            <div className="row">
            <form onSubmit={handleSubmit}>
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
            <div className="row">
                <input type="text" placeholder="ID à supprimer" value={idToDelete} onChange={e => setIdToDelete(e.target.value)} />
                <button onClick={handleDelete} className="btn btn-danger">Supprimer Donnée</button>
            </div>

            <div className="row">
                <button onClick={handleAccessData} className="btn btn-info">Accéder aux Données</button>
                {/* Afficher les données accédées */}
                {dataAccessed && <div>{/* ... affichage des données ... */}</div>}
            </div>
        </div>
    );
}

export default AdminPage;
