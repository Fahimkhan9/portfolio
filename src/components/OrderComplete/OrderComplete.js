import React from 'react'
import mapimg from '../../resources/ordercomplete.e34eab0b.png'
import Navigation from '../Home/Navigation'
import OrderInfo from './OrderInfo'

function OrderComplete({orderdata}) {
    return (
        <div className='container'>
         
<Navigation/>
                <div className="row">
                    <div className="col-md-8">
<img src={mapimg} style={{width:'100%'}} alt=""/>
                    </div>
                    <div className="col-md-4">
<OrderInfo orderdata={orderdata}/>
                    </div>
                </div>
            </div>
       
    )
}

export default OrderComplete
