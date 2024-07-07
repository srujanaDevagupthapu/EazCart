import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="title">
                <h2>EazCart</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='seacrch' />
        </div>
        <div className="right">
            <div className="signin">
                Signin/ signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header
