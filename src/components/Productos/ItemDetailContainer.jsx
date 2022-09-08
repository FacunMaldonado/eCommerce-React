import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { dataPromise } from '../../mocks/mockData'

const ItemDetailContainer = () => {
/*     const [productDetail, setProductDetail] = useState({}) */

/*     const [productList,setProductList] = useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
      dataPromise
      .then ((res)=>setProductList(res))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[]) */



  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer