import React from "react";
import Navigation from '../Home/Navigation'
import CheckoutForm from "./CheckoutForm";
import OrderCart from "./OrderCart";
import OrderedItemCard from "./OrderedItemCard";

function Checkout({ cart, totalamount,productquantity ,orderdata,setOrderdata}) {
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>Edit Delivery Details</h2>
<hr/>
<CheckoutForm orderdata={orderdata} setOrderdata={setOrderdata}/>
                </div>
                <div className="col-md-6">
                  <h2>From <b>Star Kabab & Restaure</b></h2>
                  <h5>Arriving in 20-30 mins</h5>
                  <h6>107 Road No. 7</h6>
                
          
                {cart.map((ordercartdata) => (
        <OrderedItemCard key={ordercartdata.id} productquantity={productquantity} ordercartdata={ordercartdata} />
      ))}
      <OrderCart totalamount={totalamount} productquantity={productquantity} />
                </div>
            </div>
        </div>
     
    </div>
  );
}

export default Checkout;
