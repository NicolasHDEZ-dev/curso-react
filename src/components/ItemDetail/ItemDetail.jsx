import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({data = []}) => {

  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext();


  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <div className='text-center pt-2 m-4 carusel'>
      <div id="carouselExampleIndicators" class="carousel slide shadow" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={data.img4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={data.img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={data.img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <section className='card d-flex container-fluid shadow bg-light text-dark tarjetona'>
    <div className='card-body'>
    <div className='card-title'>
    <h1 className='fw-bold font-monospace m-1'>{data.nombre}</h1>   
    </div>
    <p className='fst-italic fs-2'>{data.descripcion}</p>
    <p className='fs-3 fst-italic'>${data.precio}</p>    
    {
      goToCart
      ? <Link to={'/carrito'} className="btn btn-success">Termina tu compra</Link>
      : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    }
    </div>
    </section>
    </div>
    )
}

export default ItemDetail