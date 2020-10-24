import React from 'react'
import riderimg from "../../resources/Image/Group 1151.png"
import helmet from '../../resources/Image/Group 1152.png'
function OrderInfo({orderdata}) {
    return (
        <div>
            <img src={riderimg} style={{height:"80px"}} alt=""/>
            <div className="card">
                <div className="card-body">
                   
                   <h5>Order ID</h5>
                    <br/>
                 <p>5f910e61c22c383c985add76</p>
            <h5>Your Location:</h5>
            <br/>
    {/* <p>{orderdata.address}</p */}
    {orderdata && <p>{orderdata.address}</p>}
            <h5>Restaurent:</h5>
            <br/>
            <p>Star Kabab and Restaura</p>
   

                </div>
            </div>
            <h5>{ (new Date().getHours()) + 1}:00</h5>
            <p>Estimated Delivery</p>
            <div className="card">
                <div className="card-body d-flex">
                    <img src={helmet} style={{height:"30px"}} alt=""/>
                    <div>
                        <h6>Hamim</h6>
                        <p>Your Rider</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo
