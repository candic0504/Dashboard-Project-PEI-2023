import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <div>
      <h1>Page d'Administration</h1>
      {/* Contenu de la page d'administration */}
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default AdminPage;
