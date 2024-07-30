import "../index.css";
import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'> 
          <NavLink to="/">Gari-Zetu</NavLink>
        </div>
        <ul className='nav-menu'>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </li>
            <li className="nav-item">
          <NavLink to="/catalogue" className={({ isActive }) => isActive ? "active" : ""}>Catalogue</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </li>
            <li className="nav-contact">
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
        </li>
        <li className="nav-contact">
          <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
        </li>
        </ul>
    </div>
  )
}

export default Navbar