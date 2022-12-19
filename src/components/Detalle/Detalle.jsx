import React from 'react'

const Detalle = ({info}) => {
  return (
    <div>
    <p>{info.nombre}</p>
    <p>{info.precio}</p>
    </div>
  )
}

export default Detalle