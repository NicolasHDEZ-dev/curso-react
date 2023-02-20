import React, { useContext } from 'react'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'
import './Formulario.css'




const Formulario = () => {

    
    return (
    <>
        <form className='form__cart'>
            <input
                className='form__text'
                type="text"
                name="nombre"
                placeholder="Nombre"
                
            />
            <input
                className='form__text'
                type="text"
                name="apellido"
                placeholder="Apellido"
            />
            <input
                className='form__text '
                type="email"
                name="email"
                placeholder="Email"               
            />
            <input
                className='form__text'
                type="text"
                name="telefono"
                placeholder="Telefono"            
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