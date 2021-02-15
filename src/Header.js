import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <img className = 'header_logo'
            src = 'http://pngimg.com/uploads/amazon/amazon_PNG24.png'/>

            <div className='header_searchInput' type='text'>
                {/* logo */}
            </div>
        </div>
    )
}

export default Header
