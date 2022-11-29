import React from 'react'
import './titulo.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h2 className="bienvenida">{greeting}</h2>
    </div>
  )
}

export default ItemListContainer