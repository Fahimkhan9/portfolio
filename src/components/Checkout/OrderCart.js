import React, { useState } from 'react'

function OrderCart({totalamount,productquantity}) {
 
  const total = totalamount.reduce((total,price) => total + price,0)
let delivery = 0
if(total < 100){
  delivery = 20
}else if(total< 200){
  delivery = 15
}else{
  delivery = 0
}


let  grandtotal = total + delivery
  
    return (
        <div>
         <ul class="list-group border-0">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Sub Total
   
     <h3 >{total}</h3>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Deivery Fee
    <h3 >{delivery}</h3>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h2>Total</h2>
   <h3 >{grandtotal}</h3>
  </li>
</ul>
<button className="btn btn-secondary mt-2 btn-block">Checkout your Food</button>
        </div>
    )
}

export default OrderCart
