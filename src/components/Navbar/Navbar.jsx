import React from 'react'
import './Navbar.css'
import Logo from '../Logo/Logo'
import Cart from '../CartLogo/Cart'
import { NavLink, Link } from 'react-router-dom'


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
          <NavLink  className="nav-link text-dark font-monospace fs-5 p-5" to="/catalogo">Catálogo</NavLink>
        </li>       
      </ul>
      <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </Link>
          <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" to="/marca/fiat">fiat</NavLink></li>
            <li><NavLink class="dropdown-item" to="/marca/citroen">citroen</NavLink></li>
            <li><NavLink class="dropdown-item" to="/marca/renault">renault</NavLink></li>
          </ul>
        </li>
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