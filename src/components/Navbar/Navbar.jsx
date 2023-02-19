import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand fs-2" to="/">Luxury Cars</Link>
    <div className="collapse navbar-collapse container-fluid">
      <ul className="navbar-nav m-1">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Contacto">Contacto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/catalogo">Catalogo</NavLink>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/marca/fiat">Fiat</Link></li>
            <li><Link className="dropdown-item" to="/marca/citroen">Citroen</Link></li>
            <li><Link className="dropdown-item" to="/marca/renault">Renault</Link></li>
          </ul>
        </li>
      </ul>              
    </div>
    <Link className="btn" to="/carrito"><i className="bi bi-bag-plus-fill fs-2"></i></Link>
  </div>
</nav>
  )
}

export default Navbar