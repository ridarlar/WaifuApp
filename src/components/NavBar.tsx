import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/NavBar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };



    return (
        <>
            <nav className='navbar'>
                <Link 
                to='/waifu-app' 
                className='navbar-logo' 
                onClick={closeMobileMenu}>
                    WAIFU APP
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                              style={{ pointerEvents: 'none', textDecoration: 'none' }}

                            to='/waifu-app'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            SFW <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    {/* <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li> */}

                </ul>
            </nav>
        </>
    );
}

export default Navbar;
