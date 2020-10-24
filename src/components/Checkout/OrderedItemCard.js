import React from 'react'

function OrderedItemCard({ordercartdata,productquantity}) {
  
    return (
      <div class="card mb-3" style={{maxWidth:"540px"}}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={ordercartdata.imgofproduct} class="card-img" alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
    <h5 class="card-title">{ordercartdata.nameofproduct}</h5>
    <p class="card-text">{ordercartdata.desoproduct}</p>
    {/* <p class="card-text"><small class="text-muted">{ordercartdata.price}</small></p>
     */}
     <h6 className="card-text">Price: {ordercartdata.price}</h6>
    <h6>Quantity : {productquantity}</h6>
          </div>
        </div>
      </div>
    </div>
    )
}

export default OrderedItemCard
