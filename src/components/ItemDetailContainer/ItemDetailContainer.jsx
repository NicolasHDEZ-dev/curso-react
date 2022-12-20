import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"


const coches = [
  {
    id:1,
    img: "https://www.vgonzalez.com.ar/img/argo/argo-drive-grande1.jpg",
    nombre:"Fiat Argo",
    description:"Este es el FIAT ARGO. Experimente el verdadero placer de conducir con el Motor 1.3 Firefly. Con un consumo de hasta 16,3 km/l, es el sueño de todo conductor.",
    precio: 1550000,
    stock: 5,
    marca: "fiat",
  },
  {
    id:2,
    img: "https://cdn.motor1.com/images/mgl/gZjbE/s3/lanzamiento-fiat-cronos-s-design-ii-2022.jpg",
    nombre:"Fiat Cronos",
    description:"Sentí el poder de la sofisticación con Fiat Cronos.",
    precio: 2850000,
    stock: 5,
    marca: "fiat",
  },
  {
    id:3,
    img:"https://www.citroen.com.ar/content/dam/citroen/argentina/c3acc/highlights.png",
    nombre:"Citroen C3",
    description:"Único desde todos los ángulos, combina la robustez y la posición de manejo de un SUV con la comodidad de un Hatchback para que lo combines como quieras.",
    precio: 1850000,
    stock: 5,
    marca: "citroen",
  },
  {
    id:4,
    img:"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_73fde15700e94affb8e5e21239694828.jpg",
    nombre:"Citroen Ds7",
    description:"El DS 7 es un SUV de orientación premium, del segmento D, fabricado por Citroen desde 2017.",
    precio: 3550000,
    stock: 5,
    marca: "citroen",
  },
  {
    id:5,
    img:"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_84799dabf51c489fb723e93d8228baad.jpg",
    nombre:"Renault Sandero",
    description:"Con un diseño completamente renovado, su nueva identidad lumínica, llantas diamantadas 16” , el Renault SANDERO es el auto perfecto que se adapta a todo lo que sos.",
    precio: 1950000,
    stock: 5,
    marca:"renault",
  },
  {
    id:6,
    img:"https://cdn.group.renault.com/ren/ar/modelos/nuevo-duster/ph1/renault-duster-hjd-ph1-diseno-exterior-017.jpg.ximg.xsmall.jpg/906484ffde.jpg",
    nombre:"Renault Duster",
    description:"Llegó Renault Duster para que puedas tomar el rumbo que quieras. Un SUV diseñado para disfrutar de la vida off road.",
    precio: 2850000,
    stock: 5,
    marca:"renault",
  }
];

const ItemDetailContainer = () => {

const[data, setData] = useState({});
const {detalleId} = useParams();

useEffect(() =>{
  const getData = new Promise((resolve) => {
    setTimeout(() => {
          resolve(coches);
    }, 0)
    
  })

getData.then(res => setData(res.find(coche => coche.id === parseInt(detalleId))));
  
}, [])



  
  return (  
  <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer