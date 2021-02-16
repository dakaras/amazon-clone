import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                < img className='home_image' src='https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920'/>
                <div className='home_row'>
                    < Product 
                    title = 'The Day Is Now Far Spent'
                    price = {16.44}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/51UYSL+IuPL._SX332_BO1,204,203,200_.jpg'
                    rating = {5}
                    />
                    <Product/>
                </div>
                <div className='home_row'>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className='home_row'>
                    {/*Product*/}
                </div>
            </div>
        </div>
    )
}

export default Home
