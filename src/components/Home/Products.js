import React, { useEffect } from 'react'
import { useState } from 'react'
import breakfastdata from './breakfast'
import dinnerdata from './dinner'
import lunchdata from './lunch'
import ProductDetail from './ProductCard'
import './Products.css'

function Products() {
    const [productsbycategory,setProductbycategory] = useState([])
   
useEffect(() => {
fetch('http://localhost:5000/getproductbycategory')
.then(res=> res.json())
.then(data => setProductbycategory(data))
},[])



//  console.log(productsbycategory);
    return (
        <div>
 <ul>
     <li className="nav-link mr-5" >Breakfast</li>
     <li className="nav-link mr-5" >Lunch</li>
     <li className="nav-link mr-5" >Dinner</li>
 </ul>

 <div className="container">
     <div className="row">
     {
     productsbycategory.length ===0 ? <p>loading</p>
     :
     productsbycategory.map(bdata => <ProductDetail bdata={bdata}/>)
 }
     </div>
 </div>

        </div>
    )
}

export default Products
