import React from 'react'
import fiatlogo from "../img/fiatlogo.png"
import renaultlogo from "../img/renaultlogo.png"
import citroenlogo from "../img/citroenlogo.png"
import "./Marcas.css"

const Marcas = () => {
  return (
    <div className="card-group mt-5 p-5">
  <div className="card align-items-center justify-content-center p-4">
    <img src={fiatlogo} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Fiat</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>      
    </div>
  </div>
  <div className="card align-items-center justify-content-center p-4">
    <img src={renaultlogo} className="card-img-top " alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Renault</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>      
    </div>
  </div>
  <div className="card align-items-center justify-content-center p-4">
    <img src={citroenlogo} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Citroen</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
  )
}

export default Marcas