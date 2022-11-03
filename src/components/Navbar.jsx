import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">Navbar
        <Link to="/">Rectangle</Link>
        <Link to="/ArrayState">ArrayState</Link>
        <Link to="/Form">Form</Link>
        <Link to="/FormExercice">Form exercice</Link>
        <Link to="/FormExercice2">Form exercice</Link>
        <Link to="/LifeCycle">Cycle de vie</Link>
        <Link to="/DevineLeNombre">DevineLeNombre</Link>
        <Link to="/Users">Users</Link>
        <Link to="/ShareState">Remonté de l'état</Link>
        <Link to="/TempConverter">Convertisseur</Link>
        <Link to="/Memory">Memory</Link>
        <Link to="/Caroussel">Caroussel</Link>
    </div>
  )
}

export default Navbar
