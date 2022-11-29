import React from 'react'
import loguito from './luxury-cars.png'
import "../Logo/Logotipo.css"

const Logo = () => {
  return (
    <div>
   <img className='logotipo' src={loguito} alt=""/>
    </div>
  )
}

export default Logo