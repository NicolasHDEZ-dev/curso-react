import React from 'react'
import './Contacto.css'

export const Contacto = () => {
  return (
    <>
    <h1 className='text-center'>Contactanos Aqui</h1>
    <div className='d-flex mt-2 container-fluid justify-content-center'>
    <div className='tarjetas'>
      <div className='face front'>
      <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" />
      <h2>Facebook</h2>
      </div>
      <div className='face back'>
        <h2>Facebook</h2>
        <p>Luxury Cars es nuestro usuario de facebook!</p>
      </div>
    </div>

    <div className='tarjetas'>
      <div className='face front'>
      <img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png?fit=512%2C512&ssl=1" alt="" />
      <h2>Instagram</h2>
      </div>
      <div className='face back'>
        <h2>Instagram</h2>
        <p>Encontranos en instagram como luxury.cars1!</p>
      </div>
    </div>

    <div className='tarjetas'>
      <div className='face front'>
      <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" alt="" />
      
      </div>
      <div className='face back'>
        <h2>Twitter</h2>
        <p>Nuestro usuario de twitter es @luxurycars1</p>
      </div>
    </div>
    </div>
    </>
  )
}
