import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { dataPromise } from '../../mocks/mockData'
import { useParams } from 'react-router-dom'
import { collection , doc, getDoc} from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading]= useState(true)
    const {id} = useParams()
    

    const [productList,setProductList] = useState([])

    useEffect(()=>{
      const coleccionProductos = collection(db, "products")
      const referenciaDoc = doc(coleccionProductos, id)
      getDoc(referenciaDoc)
      .then((res)=>{
        setProductDetail({
          id:res.id,
          ...res.data()
        })
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
    },[])

    /* useEffect(()=>{
      dataPromise
      .then ((res)=>setProductDetail(res.find((item)=> item.id === id)))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[id]) */



  return (
    <div>
        {loading ? <Loader/> : <ItemDetail productDetail={productDetail} />}
    </div>
  )
}

export default ItemDetailContainer