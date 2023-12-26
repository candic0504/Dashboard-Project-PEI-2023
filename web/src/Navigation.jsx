// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/admin">Admin</Link>
      {/* Autres liens de navigation */}
    </nav>
  )
}

export default Navigation;
