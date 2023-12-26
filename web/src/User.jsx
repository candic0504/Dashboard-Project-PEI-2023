import React, { useEffect, useState } from 'react';

function UserWidget() {

    const [country, setCountry] = useState('');
    const [sizeHouse, setSizeHouse] = useState('');
    const [nbPerson, setNbPerson] = useState(0);
    const [selectedUser, setSelectedUser]= useState('');

    const handleSubmit = (e) => {
        console.log("Formulaire soumis");
        e.preventDefault(); // Empêcher le rechargement de la page
        fetch(`http://localhost:3000/api/DashboardProject/users/${selectedUser}`)
            .then(response => response.json())
            .then(user => {
                setCountry(user.location); 
                setSizeHouse(user.houseSize); 
                setNbPerson(user.personsInHouse);
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    };
    
    return (
        <div className="container">
            <div className='row'>
                <div className="col-lg-3 col-md-8 col-sm-12 mx-auto" style={{ margin: '50px', gap: '20px' }}>
                    <h1 className="widget-header">Données de l'Utilisateur</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={selectedUser}
                            onChange={(e) => setSelectedUser(e.target.value)}
                            placeholder="Entrez l'ID d'un utilisateur"
                        />
                        <button type="submit">Rechercher</button>
                    </form>
                    <p>Taille de la maison : {sizeHouse}</p>
                    <p>Nombre de personnes dans la maison : {nbPerson}</p>
                    <p>Pays : {country}</p>
                </div>
            </div>
        </div>
    );

}

export default UserWidget;
