import React, { useState } from 'react'

function OrderCart({totalamount}) {
 
  const total = totalamount.reduce((total,price) => total + price,0)

  console.log("total",total);
    return (
        <div>
          <p>total fee {total} </p>
        </div>
    )
}

export default OrderCart
