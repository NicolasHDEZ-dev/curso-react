import React from 'react'

const ItemDetail = ({data = []}) => {
  return (
    <div>
    <h1>{data.nombre}</h1>
    <p>{data.precio}</p>
    </div>
    )
}

export default ItemDetail