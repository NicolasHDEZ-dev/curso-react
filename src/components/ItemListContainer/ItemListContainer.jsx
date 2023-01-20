import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
 
 const [data, setData] = useState([]);

 const {marcaId} = useParams();

 useEffect(() => {
const querydb = getFirestore();
const queryCollection = collection(querydb, 'coches');

  if (marcaId){
    const queryFilter = query(queryCollection, where('marca', '==', marcaId))
    getDocs(queryFilter)
      .then(res => setData(res.docs.map(product => ({id: product.id,...product.data() }))))    

  } else {
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id: product.id,...product.data() })))) 
  }

 }, [marcaId])

 console.log(data)

  return (
<ItemList data = {data} />
  )
}

export default ItemListContainer