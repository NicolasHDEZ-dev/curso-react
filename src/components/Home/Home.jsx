import React from 'react'
import sandero from './img/sandero.jpg';
import argo from "./img/argo.jpg";
import "./Home.css"
import Marcas from './Marcas/Marcas';

export const Home = () => {
  return (
   <React.Fragment>
    <div className='mb-5'>
    <h1 className='text-center fs-2 font-monospace fw-bold'>Bienvenidos a Luxury Cars!</h1>
    </div>

    <div id="carouselExampleCaptions" className="carousel slide carusel m-3 p-3" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.motor1.com/images/mgl/xqqvQv/s1/alta-0545.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-center'>Citroen C3 2023</h5>
        <p>Distribuidores oficiales de Citroen</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={argo} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Fiat Argo 2023</h5>
        <p>Distribuidores oficiales de Fiat</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sandero} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Renault Sandero 2023</h5>
        <p>Distribuidores oficiales de Renault</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='text-center fs-2 font-monospace m-5'>
  <h2 className='fw-bold mt-4'>Actualmente somos el unico distribuidor de los ultimos modelos de las marcas seleccionadas</h2>
  <h3 className='text-muted fw-bold mt-4'>y tambien los mejores...</h3>
</div>
<div className='m-2'>
<Marcas/>
</div>
</React.Fragment>
  )

}
