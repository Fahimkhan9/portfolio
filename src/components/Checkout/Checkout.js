import React from 'react'
import { useState } from 'react'
import OrderCart from './OrderCart'
import OrderedItemCard from './OrderedItemCard'

function Checkout({cart}) {
    const [quantity,setQuantity] = useState(1)
    const [quantityofproduct,SetQuantityofproduct] = useState(0)
const hanldequantity = (cartdata) => {
console.log(cartdata.price.slice(1));
SetQuantityofproduct(()=> cartdata.price.slice(1))
}

    return (
        <div>
         {
                cart.map(ordercartdata => <OrderedItemCard ordercartdata={ordercartdata} quantity={quantity} setQuantity={setQuantity} hanldequantity={hanldequantity} />)


            }
            <OrderCart cart={cart} quantity={quantity} setQuantity={setQuantity} quantityofproduct={quantityofproduct} />
         
        </div>
    )
}

export default Checkout
