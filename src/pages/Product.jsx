import React from 'react'
import products from '../data/productList'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <h3>My Cool shopping store</h3>
        <hr />


        {
            products.map((product)=>{
                return <div>
                    <h5>{product.name}</h5>
                    {/* <img src={product.image} alt="" />
                    <p>{product.description}</p> */}
                    <h6>{product.price}</h6>
                    <Link to={product.id}>See Product</Link>
                    <hr />
                </div>
            })
        }

    </div>
  )
}

export default Product