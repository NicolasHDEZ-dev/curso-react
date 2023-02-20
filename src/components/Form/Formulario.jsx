import React, { useContext } from 'react'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'
import './Formulario.css'



const Formulario = ({handleClick}) => {


    const {validarFormulario } = useCartContext()


    const [comprador, setComprador]= useState({})
    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    }
    const sendOrder = (e) =>{
        e.preventDefault();
        if(validarFormulario(datosComprador)){
            console.log("hola")
        }
        handleClick(comprador)
    }
    return (
    <>
        <form className='form__cart' onSubmit={sendOrder}>
            <input
                className='form__text'
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={datosComprador}
            />
            <input
                className='form__text'
                type="text"
                name="apellido"
                placeholder="Apellido"
                onChange={datosComprador}
            />
            <input
                className='form__text '
                type="email"
                name="email"
                placeholder="Email" 
                onChange={datosComprador}              
            />
            <input
                className='form__text'
                type="text"
                name="telefono"
                placeholder="Telefono" 
                onChange={datosComprador}           
            />
            <textarea
                className='form__text'
                type="text"
                name="mensaje"
                placeholder="Escriba su mensaje" 
                            
            />
            <button className='btn__cart mt-2' type="submit">Enviar</button>
        </form>
    </>
    );
}

export default Formulario