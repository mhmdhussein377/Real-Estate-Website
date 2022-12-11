import React from 'react'

import {Link} from 'react-router-dom'

import Logo from "../assets/img/logo.svg";

const Header = () => {
    return (
        <header className='py-6 mb-12 border-b'>
            <div className="container flex items-center justify-between mx-auto">
                <Link to='/'>
                    <img src={Logo} alt=""/>
                </Link>
                {/* Buttons */}
                <div className='flex items-center gap-6'>
                    <Link to='' className='hover:text-violet-900 transition'>Log in</Link>
                    <Link to='' className='bg-violet-700 hover:bg-violet-800 text-white py-3 px-4 rounded-lg transition'>Sign up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header