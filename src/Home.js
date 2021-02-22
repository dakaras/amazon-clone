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
                    id='6837628489'
                    title = 'The Day Is Now Far Spent'
                    price = {16.44}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/51UYSL+IuPL._SX332_BO1,204,203,200_.jpg'
                    rating = {5}
                    />
                    <Product
                    id='193739284'
                    title='VIGOROSO Mens Vintage Full Copper Hand-Wind Mechanical Second 24hours Sub-dials Pocket Watch in Box'
                    price={35.99}
                    image = 'https://m.media-amazon.com/images/I/61oLA9oWb4L._AC_UL800_FMwebp_QL65_.jpg'
                    rating={2}
                    />
                </div>
                <div className='home_row'>
                    <Product
                    id='1353478284'
                    title = 'Orthodoxy'
                    price={8.99}
                    image = 'https://m.media-amazon.com/images/I/417KKdU6lHL._SY346_.jpg'
                    rating= {4}
                    />
                    <Product
                    id='45692728492'
                    title='Ninja Professional Countertop Blender: 1100-Watt Base, 72 Oz Pitcher,(2) 16 Oz Cups'
                    price={115.48}
                    image = 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6001/6001401_sd.jpg;maxHeight=640;maxWidth=550'
                    rating={3}
                    />
                    <Product
                    id ='5374829223'
                    title = 'Ingersoll Rand 2235TiMAX 1/2-Inch Drive Air Impact Wrench'
                    price={215.00}
                    image = 'https://m.media-amazon.com/images/I/811k8tFlcSL._AC_UL800_FMwebp_QL65_.jpg'
                    rating={4}
                    />
                </div>
                <div className='home_row'>
                    <Product 
                    id='8297582742323'
                    title = 'Samsung Galaxy Tab S6- 10.5" 128GB, Wifi Tablet - SM-T860NZBAXAR, Cloud Blue'
                    price={647.99}
                    image = 'https://m.media-amazon.com/images/I/51Hu0jCbcQL._AC_UL800_FMwebp_QL65_.jpg'
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
