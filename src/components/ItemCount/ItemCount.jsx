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
        <button className='btn btn-danger m-4' disabled={count <= 1} onClick={restar}>-</button>
        <span className='text-dark'>{count}</span>
        <button className='btn btn-success m-4' disabled={count >= stock} onClick={sumar}>+</button>
            <div>
                <button className='btn btn-secondary' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
    </div>
  )
}

export default ItemCount