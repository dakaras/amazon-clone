import React from 'react'
import './Checkout.css'
import subtotal from './Subtotal'
function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img 
                className = 'checkout_ad'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Prime/XCM_Manual_1500x350_1210306_1210306_IN_Prime_Deals_7a028a6d_aba0_4767_9510_e5e013c3a81f_jpg_LOWER_QL85_.jpg' />
            <div className='checkout_title'>
                <h2>Your Shopping Basket</h2>
            </div>
        </div>

            <div className='checkout_right'>
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
