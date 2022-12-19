import React from 'react'
import './Navbar.css'
import Logo from '../Logo/Logo'
import Cart from '../CartLogo/Cart'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-white">
<div className="container-fluid">
    <ul>
      <Logo/>
    </ul>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active text-dark font-monospace fs-5 p-5" aria-current="page" to="/Contacto" >Contacto</NavLink>
        </li>        
        <li className="nav-item">
          <NavLink  className="nav-link text-dark font-monospace fs-5 p-5" to="/itemlistcontainer">Catálogo</NavLink>
        </li>
      </ul>
    </div>
    <ul>
      <NavLink to="/carrito">
          <Cart/>
      </NavLink>
    </ul>
  </div>
</nav>
  )
}

export default Navbar