import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import fiatargo from "../ItemListContainer/img/nuevo-fiat-argo.jpg"
import fiatcronos from "../ItemListContainer/img/cronos.jpg"
import citroenc3 from "../ItemListContainer/img/citroen-c3-1362806.jpg"
import citroends7 from "../ItemListContainer/img/ds7.jpg"
import renaultsandero from "../ItemListContainer/img/sandero.jpg"
import renautlduster from "../ItemListContainer/img/duster.jpg"


const ItemListContainer = () => {
 const coches = [
   {
     id:1,
     img: {fiatargo},
     nombre:"Fiat Argo",
     description:"Este es el FIAT ARGO. Experimente el verdadero placer de conducir con el Motor 1.3 Firefly. Con un consumo de hasta 16,3 km/l, es el sueño de todo conductor.",
     precio: 1550000,
     stock: 5,
     marca: "Fiat",
   },
   {
     id:2,
     img: {fiatcronos},
     nombre:"Fiat Cronos",
     description:"Sentí el poder de la sofisticación con Fiat Cronos.",
     precio: 2850000,
     stock: 5,
     marca: "Fiat",
   },
   {
     id:3,
     img:{citroenc3},
     nombre:"Citroen C3",
     description:"Único desde todos los ángulos, combina la robustez y la posición de manejo de un SUV con la comodidad de un Hatchback para que lo combines como quieras.",
     precio: 1850000,
     stock: 5,
     marca: "Citroen",
   },
   {
     id:4,
     img:{citroends7},
     nombre:"Citroen Ds7",
     description:"El DS 7 es un SUV de orientación premium, del segmento D, fabricado por Citroen desde 2017.",
     precio: 3550000,
     stock: 5,
     marca: "Citroen",
   },
   {
     id:5,
     img:{renaultsandero},
     nombre:"Renault Sandero",
     description:"Con un diseño completamente renovado, su nueva identidad lumínica, llantas diamantadas 16” , el Renault SANDERO es el auto perfecto que se adapta a todo lo que sos.",
     precio: 1950000,
     stock: 5,
     marca:"Renault",
   },
   {
     id:6,
     img:{renautlduster},
     nombre:"Renault Duster",
     description:"Llegó Renault Duster para que puedas tomar el rumbo que quieras. Un SUV diseñado para disfrutar de la vida off road.",
     precio: 2850000,
     stock: 5,
     marca:"Renault",
   }
 ];
 
 const [data, setData] = useState([]);

 const {marcaId} = useParams();

 useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(coches)
    }, 0);
  }); if (marcaId){
    getData.then(res => setData(res.filter(coche => coche.marca == marcaId)));

  } else {
  getData.then(res => setData(res));
  }

 }, [marcaId])

  return (
<ItemList data = {data} />
  )
}

export default ItemListContainer