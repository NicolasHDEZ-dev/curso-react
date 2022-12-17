import React from 'react'
import loguito from './luxury-cars.png'
import "../Logo/Logotipo.css"
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to="/">
   <img className='logotipo' src={loguito} alt=""/>
   </NavLink>
  )
}

export default Logo