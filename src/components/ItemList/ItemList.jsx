import React from 'react'
import Cards from '../Cards/Cards'
import './ItemList.css'


const ItemList = ({data = []}) => {
  return (
    <>
    <h1 className='text-center fs-2 font-monospace fw-bold'>Bienvenidos a nuestro catalogo!</h1>
    <div className='d-flex row row-cols-1 row-cols-md-3 text-center hesi'>
    {data.map(coche => <Cards key ={coche.id} info={coche}/>)}
    </div>
    </>
  )
}

export default ItemList