import React from 'react'
import './Navbar.css'
import Logo from '../Logo/Logo'
import Cart from '../CartWidget/Cart'


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
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="/#">Quienes Somos?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/#">Porque elegirnos?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/#">Catalogo de coches</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/#">Marcas</a>
        </li>
      </ul>
    </div>
    <ul>
          <Cart/>
    </ul>
  </div>
</nav>
  )
}

export default Navbar