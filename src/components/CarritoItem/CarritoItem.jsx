import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CarritoItem from './CarritoItem.css'

const CarritoItem = ({product}) => {
const {borrarProducto} = useCartContext();

  return (
    <div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.img} className="img-fluid rounded-start" alt={product.nombre}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><small className="text-muted">Precio: {product.precio}</small></p>
        <p className="card-text"><small className="text-muted">Stock: {product.stock}</small></p>
        <button onClick={() => borrarProducto(product.id)}>Eliminar</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default CarritoItem