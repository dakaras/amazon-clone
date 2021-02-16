import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>The Day Is Now Far Spent</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>16.44</strong>
                </p>
                <p className='product_rating'>
                    <p>⭐</p>
                </p>
            </div>
            < img src = 'https://images-na.ssl-images-amazon.com/images/I/51UYSL+IuPL._SX332_BO1,204,203,200_.jpg'/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
