import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Navigation from '../Home/Navigation'
import ProductDetailMain from './ProductDetailMain'

function ProductDetail({addtocart,productquantity,setProductquantity}) {
    const {id} = useParams()
    const [productdetail,setProductdetail] = useState([])

    useEffect(() => {
fetch(`http://localhost:5000/getproductbyid?id=${id}`)
.then(res => res.json())
.then(data => setProductdetail(data))
    },[])
    console.log(productdetail)
 
    return (
        <div>   
    <Navigation/>
  <ProductDetailMain productquantity={productquantity} setProductquantity={setProductquantity} productdetail={productdetail} addtocart={addtocart} />
        </div>
    )
}

export default ProductDetail
