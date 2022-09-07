import React, {useState, useEffect} from 'react'
import {data} from  '../../mocks/mockData'


useEffect(()=>{
  setLoading = true
      data
      .then ((res)=>setProductList(res))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading = (false))
},[])

const itemListContainer = ({greeting}) => {
  return (
    <div>
      <h3>{greeting}</h3>
      {loading ? <p>Loading..,</p> : <ItemList productList={productList}/>}
    </div>
  )
}

export default itemListContainer

