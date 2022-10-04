import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {dataPromise} from "../../mocks/mockData"
import { useParams } from 'react-router-dom'
import Slider from '../Slider/Slider'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import './productos.css'
import TTBlanco from '../../img/TT-Blanco.png'

const ItemListContainer = ({greeting}) => {
  const [productList,setProductList] = useState([])
  const [loading, setLoading]= useState(false)
  const {categoriaID} = useParams()

//firebase
useEffect(()=>{
  setLoading(true)
  const productos = categoriaID ?query(collection(db,"products"), where("category", "==", categoriaID))  : collection(db, "products")
  getDocs(productos)
  .then((res)=>{
    const lista = res.docs.map((product)=>{
      return{
        id:product.id,
        ...product.data()
      }
    })
    setProductList(lista)
  })
  .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
},[categoriaID])



  //mock
/* useEffect(()=>{
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
},[categoriaID]) */

  return (
    <div>
      <div className="boxTT">
        {/* <img className='TT' src="https://res.cloudinary.com/dhzrx3fie/image/upload/c_scale,h_51,q_auto:low,w_427/v1664375193/CoderReact-TT/TT_1_Negro_1_b7jik5.png" alt="" /> */}
        <img src={TTBlanco} alt="" />
      </div>
      <Slider/>

      {loading ? <p>Loading...</p> : <ItemList productList={productList}/>}
    </div>
  )
}

export default ItemListContainer

