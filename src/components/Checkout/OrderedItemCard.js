import React from 'react'

function OrderedItemCard({ordercartdata,quantity,setQuantity,hanldequantity}) {
    return (
        <div class="card" style={{width:"18rem"}}>
        <div class="card-body">
    <h5 class="card-title">{ordercartdata.nameofproduct}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{ordercartdata.price}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div>
              <button onClick={() => {
                  setQuantity(pre => pre - 1)
                  hanldequantity(ordercartdata)
                  }}>-</button>
    <p>{quantity}</p>
    <button onClick={() =>{
        setQuantity(pre => pre + 1)
        hanldequantity(ordercartdata)
        }}>+</button>
          </div>
        </div>
      </div>
    )
}

export default OrderedItemCard
