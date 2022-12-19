import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
 const coches = [
   {
     id:1,
     img:"./img/argo.2023-ext.jpeg",
     nombre:"Fiat Argo",
     description:"Este es el FIAT ARGO. Experimente el verdadero placer de conducir con el Motor 1.3 Firefly. Con un consumo de hasta 16,3 km/l, es el sueño de todo conductor.",
     precio: 1550000,
     stock: 5,
   },
   {
     id:2,
     img:"./img/cronos.jpg",
     nombre:"Fiat Cronos",
     description:"Sentí el poder de la sofisticación con Fiat Cronos.",
     precio: 2850000,
     stock: 5,
   },
   {
     id:3,
     img:"./img/citroen-c3-1362806.jpg",
     nombre:"Citroen C3",
     description:"Único desde todos los ángulos, combina la robustez y la posición de manejo de un SUV con la comodidad de un Hatchback para que lo combines como quieras.",
     precio: 1850000,
     stock: 5,
   },
   {
     id:4,
     img:"./img/ds7.jpg",
     nombre:"Citroen Ds7",
     description:"El DS 7 es un SUV de orientación premium, del segmento D, fabricado por Citroen desde 2017.",
     precio: 3550000,
     stock: 5,
   },
   {
     id:5,
     img:"./img/sandero.jpg",
     nombre:"Renault Sandero",
     description:"Con un diseño completamente renovado, su nueva identidad lumínica, llantas diamantadas 16” , el Renault SANDERO es el auto perfecto que se adapta a todo lo que sos.",
     precio: 1950000,
     stock: 5,
   },
   {
     id:6,
     img:"./img/duster.jpg",
     nombre:"Renault Duster",
     description:"Llegó Renault Duster para que puedas tomar el rumbo que quieras. Un SUV diseñado para disfrutar de la vida off road.",
     precio: 2850000,
     stock: 5,
   }
 ];
 
 const [data, setData] = useState([]);

 useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(coches)
    }, 0);
  });

  getData.then(res => setData(res));
 }, [])

  return (
<ItemList data = {data} />
  )
}

export default ItemListContainer