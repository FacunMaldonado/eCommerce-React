import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { dataPromise } from '../../mocks/mockData'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading]= useState(true)

    const [productList,setProductList] = useState([])

    useEffect(()=>{
      dataPromise
      .then ((res)=>setProductDetail(res.find((item)=> item.id === '1')))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])



  return (
    <div>
        {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer