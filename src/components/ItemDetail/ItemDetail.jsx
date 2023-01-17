import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({data = []}) => {

  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext();


  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <div>
    <h1>{data.nombre}</h1>
    <p>{data.precio}</p>
    {
      goToCart
      ? <Link to={'/carrito'}>Termina tu compra</Link>
      : <ItemCount initial={1} stock={5} onAdd={onAdd}/>

    }
    </div>
    )
}

export default ItemDetail