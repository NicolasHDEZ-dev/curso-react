import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CarritoItem from '../CarritoItem/CarritoItem';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './Carrito.css';


const Carrito = () => {

const {carrito, totalPrice} = useCartContext();

const orden = {

comprador: {
  nombre: "Pedro",
  email: "pedro@gmail.com",
  telefono: "1132435673",
  direccion: "Pepito 423"
},
items: carrito.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio,})),
total: totalPrice(),

}

const handleClick = () => {
const db = getFirestore();
const ordenesCollection = collection(db,'ordenes');
addDoc(ordenesCollection, orden)
.then(({ id }) => console.log(id))

}


if(carrito.length === 0){
    return(
      <>
      <div className='container m-auto p-auto justify-content-center align-items-center'>
      <div className='container justify-content-center'>
      <div className='tarjeta text-center'>
      <p className='fs-2'>El Carrito esta vacio!</p>
      <Link to='/catalogo' className='btn btn-danger'>Porque no compras algo...?</Link>
      </div>
      </div>
      </div>
      </>
    );
  }

  return (
    <>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
    {
      carrito.map(product => <CarritoItem key={product.id} product={product}/>)
    }
    </div>
    <p className='text-center'>
      El total de tu compra es de: {totalPrice()}$
    </p>
    <div className=' text-center'>
    <button className='btn btn-success' onClick={handleClick}>Emitir Compra</button>
    </div>
    </>
  )

    if(handleClick){
      return (
        <>
    <h1> Gracias por su compra </h1>
    <Link to='/'>Volver a Comprar</Link>
    </>
      )
    }

}

export default Carrito