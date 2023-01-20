import React from 'react'
import './Navbar.css'
import Logo from '../Logo/Logo'
import CartLogo from '../CartLogo/CartLogo'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg">
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
          <Link className="nav-link dropdown-toggle text-dark font-monospace fs-5 p-5" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </Link>
          <ul class="dropdown-menu text-center">
            <Link class="dropdown-item text-dark" to="/marca/fiat">Fiat</Link>
             <Link class="dropdown-item text-dark" to="/marca/citroen">Citroen</Link>
             <Link class="dropdown-item text-dark" to="/marca/renault">Renault</Link>
          </ul>
        </li>
    </div>
    <ul>
      <NavLink to="/carrito">
          <CartLogo/>
      </NavLink>
    </ul>
  </div>
</nav>
  )
}

export default Navbar