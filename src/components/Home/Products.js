import React, { useEffect } from 'react'
import { useState } from 'react'
import breakfastdata from './breakfast'
import dinnerdata from './dinner'
import lunchdata from './lunch'
import ProductCard from './ProductCard'
import './Products.css'

function Products() {
    const [productsbycategory,setProductbycategory] = useState([])
   
useEffect(() => {
fetch(`http://localhost:5000/getproductbycategory?category=breakfast`)
.then(res=> res.json())
.then(data => setProductbycategory(data))
},[])




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
     productsbycategory.length === 0 ?
     <div className="text-center">
<div class="spinner-grow" style={{width:'3rem',height:"3rem"}} role="status">
     <span class="sr-only">Loading...</span>
   </div>
     </div>
     
     :
     productsbycategory.map(bdata => <ProductCard key={bdata.id} bdata={bdata}/>)
 }
     </div>
 </div>

        </div>
    )
}

export default Products
