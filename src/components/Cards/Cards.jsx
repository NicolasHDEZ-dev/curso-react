import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';

const Cards = ({info}) => {   
   
    return (      
        <div className='container text-center'>
      <div className="card text-center">
    <div className='contenedor'>
    <img src={info.img} className="card-img-top img-fluid" alt=""/>
    </div>
      <div className="card-body">
        <h5 className="card-title fs-3">{info.nombre}</h5>
        <p className="card-text fs-5">{info.description}</p>
        <p className="card-text fs-4">${info.precio}</p>
        <p className="card-text fs-5">Stock :{info.stock}</p>
        <Link className="btn btn-primary" to={`/detalle/${info.id}`}>Ver Mas</Link>
      </div>
        </div> 
    </div>      
  )
}

export default Cards