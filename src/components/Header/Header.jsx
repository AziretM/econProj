import React from 'react'

import icon from '../assets/Frame.svg'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <div className="background-logo">
                <a href='/' className='logo'></a>
            </div>
            <div className='container'>
                <a className="logo_company">
                    <img src={icon} className='icon'/>
                    <h2 className='hobby'>Hobby</h2>
                </a>
                <div className="nav">
                    <a href='/' className='Link'>Home</a>
                    <a href='/about-us' className='Link'>AboutUs</a>
                    <a href='/service' className='Link'>Service</a>
                    <a href='/contact' className='Link'>Contact</a>
                    <a href='/' className='login'>Login</a>
                </div>
            </div>
        </div>
    )
}
export default Header;