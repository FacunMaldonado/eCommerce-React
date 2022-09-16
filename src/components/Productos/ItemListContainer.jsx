import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {dataPromise} from "../../mocks/mockData"
import { useParams } from 'react-router-dom'
import Slider from '../Slider/Slider'

const ItemListContainer = ({greeting}) => {
  const [productList,setProductList] = useState([])
  const [loading, setLoading]= useState(false)
  const {categoriaID} = useParams()

useEffect(()=>{
    setLoading(true)
      dataPromise
      .then ((res)=>{
        if(categoriaID){
          setProductList(res.filter((item)=> item.category === categoriaID))
        }else{
          setProductList(res)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
},[categoriaID])

  return (
    <div>
      <Slider/>

      {loading ? <p>Loading...</p> : <ItemList productList={productList}/>}
    </div>
  )
}

export default ItemListContainer

