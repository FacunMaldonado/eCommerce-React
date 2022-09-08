import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {dataPromise} from "../../mocks/mockData"

const ItemListContainer = ({greeting}) => {
  const [productList,setProductList] = useState([])
  const [loading, setLoading]= useState(true)

useEffect(()=>{
      dataPromise
      .then ((res)=>setProductList(res))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
},[])

  return (
    <div>
      <h3>{greeting}</h3>
      {loading ? <p>Loading...</p> : <ItemList productList={productList}/>}
    </div>
  )
}

export default ItemListContainer

