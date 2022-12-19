import React from 'react'
import Cards from '../Cards/Cards'


const ItemList = ({data = []}) => {
  return (
    data.map(coche => <Cards key ={coche.id} info={coche}/>)
  )
}

export default ItemList