
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <Link className="accueil" to="/">HOME</Link>
      <Link className="admin" to="/admin">ADMIN</Link>
    </nav>
  )
}

export default Navigation;
