import React from "react";
import Navigation from '../Home/Navigation'
import CheckoutForm from "./CheckoutForm";
import OrderCart from "./OrderCart";
import OrderedItemCard from "./OrderedItemCard";

function Checkout({ cart, totalamount }) {
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>Edit Delivery Details</h2>
<hr/>
<CheckoutForm/>
                </div>
                <div className="col-md-6">
                {cart.map((ordercartdata) => (
        <OrderedItemCard key={ordercartdata.id} ordercartdata={ordercartdata} />
      ))}
      <OrderCart totalamount={totalamount} />
                </div>
            </div>
        </div>
     
    </div>
  );
}

export default Checkout;
