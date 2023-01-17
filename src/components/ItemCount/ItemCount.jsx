import React, {useState, useEffect} from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const restar = () => {
        setCount(count - 1);
    }

    const sumar = () =>{
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

  return (
    <div className='counter text-center m-auto'>
        <button disabled={count <= 1} onClick={restar}>-</button>
        <span className='text-white'>{count}</span>
        <button disabled={count >= stock} onClick={sumar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
    </div>
  )
}

export default ItemCount