import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './CarritoItem.css'

const CarritoItem = ({product}) => {
const {borrarProducto} = useCartContext();

  return (
    <div className="card mt-5 mb-5 text-center shadow carrete m-2 pr-0">
  <div className="row container-fluid align-items-center justify-content-center ">
    <div className="col-md-4">
      <img src={product.img} className="img-fluid rounded-start imagen" alt={product.nombre}/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><small className="text-muted">Precio por auto: {product.precio}$</small></p>
        <p className="card-text"><small className="text-muted">En Stock nos quedan: {product.stock - product.quantity}</small></p>
        <p className="card-text"><small className="text-muted">Usted esta llevando {product.quantity} unidades.</small></p>
        <p className="card-text">Su subtotal es de: {product.quantity * product.precio}$</p>
        <button className='btn btn-danger' onClick={() => borrarProducto(product.id)}>Eliminar</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default CarritoItem