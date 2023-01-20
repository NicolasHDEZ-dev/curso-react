import React from 'react'
import fiatlogo from "../img/fiatlogo.png"
import renaultlogo from "../img/renaultlogo.png"
import citroenlogo from "../img/citroenlogo.png"
import "./Marcas.css"

const Marcas = () => {
  return (
    <div className="card-group m-5 d-flex text-center fst-italic">
  <div className="card align-items-center justify-content-center shadow">
    <img src={fiatlogo} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Fiat</h5>
      <p className="card-text">Marca italiana que siempre se destacó en el mundo de los vehículos pequeños. Su gama actual está compuesta por vehículos producidos en Argentina, Brasil y Europa.</p>      
    </div>
  </div>
  <div className="card align-items-center justify-content-center shadow">
    <img src={renaultlogo} className="card-img-top " alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Renault</h5>
      <p className="card-text">El grupo Renault es una empresa internacional, de origen francés, con una historia de más de 115 años. Presente en 128 países, diseñamos, fabricamos y comercializamos vehículos particulares y utilitarios vendidos bajo tres marcas: Renault, Dacia y RSM.</p>      
    </div>
  </div>
  <div className="card align-items-center justify-content-center shadow">
    <img src={citroenlogo} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Citroen</h5>
      <p className="card-text">La marca del doble chevrón apuesta por la innovación expresada en su slogan Créative Technologie, destacándose actualmente sus parabrisas panorámicos entre otros.</p>
    </div>
  </div>
</div>
  )
}

export default Marcas