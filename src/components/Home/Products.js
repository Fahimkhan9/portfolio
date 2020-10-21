import React from 'react'
import breakfastdata from './breakfast'
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
     breakfastdata.map(bdata => <ProductDetail/>)
 }
     </div>
 </div>

        </div>
    )
}

export default Products
