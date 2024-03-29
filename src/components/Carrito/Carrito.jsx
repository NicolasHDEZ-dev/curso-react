import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CarritoItem from '../CarritoItem/CarritoItem';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './Carrito.css';
import Formulario from '../Form/Formulario';


const Carrito = () => {

  const [orderId , setOrderId] = useState()

  const {carrito, totalPrice, clearCart} = useCartContext();
  
  
  
  const handleClick = (comprador) => {
    let orden = {
  
      comprador,
      items: carrito,
      total: totalPrice(),
      
      }
  const db = getFirestore();
  const ordenesCollection = collection(db,'ordenes');
  addDoc(ordenesCollection, orden)
  .then((({id})=>{
    setOrderId(id)
    clearCart()
    }))}
  
  if(orderId){
    return(
    <>
    <div className='container justify-content-center'>
  <div className='tarjeta bg-white'>
  <h1> Gracias por su compra </h1>
  <p>Su orden de compra es {orderId}</p>
  <Link className='btn btn-success' to='/'>Volver a Comprar</Link>
  </div>
  </div>
  </>
    )
  }
  
  if(carrito.length===0 && !orderId){
      return(
        <>
        <div className='container-fluid m-3 p-3 justify-content-center align-items-center'>
        <div className='container-fluid justify-content-center '>
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
      <h1 className='text-center'>Este es tu carrito</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4 mt-3 carts'>
      {
        carrito.map(product => <CarritoItem key={product.id} product={product}/>)
      }
      </div>
      <section className='container__form text-center'>
                      <h4 className='form__title'>Formulario de compra</h4>
                      <div className='cart__total'>
                          <p className='cart__total--p'>
                              Total de compra  <span className='dinero text-light'>$ARS {totalPrice()}</span>
                          </p>
                      </div>
                      <Formulario handleClick = {handleClick}/>   
                  </section>
                  <div className=' text-center'>
     
      </div>
      
      </>
    );
  
    }
export default Carrito