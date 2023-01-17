import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


const Carrito = () => {

const [carrito, totalPrice] = useCartContext();

if(carrito.length === 0){
    return(
      <>
      <p>El Carrito esta vacio!</p>
      <Link to='/'>Porque no compras algo?</Link>
      </>
    );
  }

  return (
    <h1 className='text-center'>Aca se veran todas tus compras</h1>
  )
}

export default Carrito