import React, { useState } from 'react'

function OrderCart({cart,setQuantity,quantity,quantityofproduct}) {
    const [grandtotal,setGrandtotal] = useState()
    const total = cart.reduce((total,cartdata) => {
        console.log(cartdata);
        return(
            parseFloat(total)  + parseFloat(cartdata.price.slice(1))
           
        )
  
    
    } ,0)
console.log("total",total);
quantityofproduct &&
// setGrandtotal(() => parseFloat(total) + parseFloat(quantityofproduct))



console.log(grandtotal);
    return (
        <div>
          <p>total fee {total} </p>
        </div>
    )
}

export default OrderCart
