import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='navbar__logo' to='/about'>
                <h3>Music_app</h3>
            </Link>
            <div className="navbar__links">
                <Link className='navbar__links_item' to="/about">О сайте</Link>
                <Link className='navbar__links_item' to="/tracks">Музыка</Link>
            </div>
        </div>
    )
};


export default Navbar;