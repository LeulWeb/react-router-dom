import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import products from '../data/productList'

const ProductDetail = () => {
         let {id}=  useParams()
         let [item, setItem] = useState()
    useEffect(()=>{
        let [product] = products.filter((item)=>item.id == id)
        setItem({... product})
        console.log(item)
    },[])


  return (
    <div>
        <p>This is product detail page for {id}</p>

    </div>
  )
}

export default ProductDetail