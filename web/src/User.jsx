import React, { useEffect, useState } from 'react';
import './User.css'

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
                    <div className='user-container d-flex flex-column justify-items-center'>
                                            <h1 className='donne-utilisateur'>Données de l'Utilisateur</h1>
                                            <form onSubmit={handleSubmit}>
                                                <input className='id-user'
                                                    type="text"
                                                    value={selectedUser}
                                                    onChange={(e) => setSelectedUser(e.target.value)}
                                                    placeholder="Entrez l'ID d'un utilisateur"
                                                />
                                                <button className="button-submit" type="submit">Rechercher</button>
                                            </form>
                                            <p className='sizeHouse'>Taille de la maison : {sizeHouse}</p>
                                            <p className='nbPersonne'>Nombre de personnes dans la maison : {nbPerson}</p>
                                            <p className='country'>Pays : {country}</p>
                    </div>
        </div>
    );

}

export default UserWidget;
