import React from 'react'
import {Link, useHistory } from 'react-router-dom'
function ProductCard({bdata}) {
  const history = useHistory()
const handleclick =() => {
  history.push(`productdetail/${bdata.id}`)
}

    return (
      
        <div class="card col-md-4 text-center " style={{cursor:"pointer"}} onClick={handleclick} >
        <div class="card-body">
            <img style={{height:'80px'}} src={bdata.imgofproduct} alt=""/>
    <h5 class="card-title">{bdata.nameofproduct}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{bdata.desoproduct}</h6>
  <h6>{bdata.price}</h6>
      
        </div>
      </div>

      
    )
}

export default ProductCard
