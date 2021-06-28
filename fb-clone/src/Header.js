import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt=""
                />
            </div>
            <div className="header__midle"></div>
            <div className="header__right"></div>
        </div>
    )
}

export default Header
