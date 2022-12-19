import React from 'react'
import Detalle from '../Detalle/Detalle'

const ItemDetail = ({data = []}) => {
  return (
    data.map(detail => <Detalle key = {detail.id} info ={detail}/>)
  )
}

export default ItemDetail