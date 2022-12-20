import React from 'react'
import "./Cards.css"

const Cards = ({info}) => {
   
   
    return (
      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">      
        <div className="card text-center">
<img src={info.img} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title fs-3">{info.nombre}</h5>
    <p className="card-text fs-5">{info.description}</p>
    <p className="card-text fs-4">${info.precio}</p>
    <p className="card-text fs-5">Stock :{info.stock}</p>
    <button className="btn btn-primary">Ver Mas</button>
  </div>
      </div>
</div>
</div>        
  )
}

export default Cards