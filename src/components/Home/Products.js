import React from 'react'
import breakfastdata from './breakfast'
import dinnerdata from './dinner'
import lunchdata from './lunch'
import ProductDetail from './ProductDetail'
import './Products.css'

function Products() {
  
    return (
        <div>
 <ul>
     <li className="nav-link mr-5">Breakfast</li>
     <li className="nav-link mr-5">Lunch</li>
     <li className="nav-link mr-5">Dinner</li>
 </ul>

 <div className="container">
     <div className="row">
     {
     
     dinnerdata.map(bdata => <ProductDetail bdata={bdata}/>)
 }
     </div>
 </div>

        </div>
    )
}

export default Products
