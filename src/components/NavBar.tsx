import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/NavBar.css';
import Dropdown from './Dropdown';

import useActionMenu from '../hook/useActionMenu';

function Navbar() {

    const firstNav = useActionMenu()
    const secondNav = useActionMenu()

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);


    const navMenu = [
        {
            type: 'sfw',
            categories: [
                'waifu',
                'neko',
                'shinobu',
                'cry',
                'kiss',
                'hug',
                'pat',
                'smug',
                'bonk',
                'yeet',
                'blush',
                'smile',
                'wave',
                'highfive',
                'handhold',
                'nom',
                'bite',
                'slap',
                'happy',
                'wink',
                'poke',
                'dance',
                'cringe',
            ]
        }, {
            type: 'nsfw',
            categories: [
                'waifu',
                'neko',
                'trap',
                'blowjob'
            ]
        }
    ]


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
                        onMouseEnter={firstNav.onMouseEnter}
                        onMouseLeave={firstNav.onMouseLeave}
                    >
                        <Link
                            style={{ pointerEvents: 'none', textDecoration: 'none' }}
                            to='/waifu-app'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            SFW <i className='fas fa-caret-down' />
                        </Link>
                        {firstNav.dropdown && <Dropdown options={navMenu[0]} />}
                    </li>

                    <li
                        className='nav-item'
                        onMouseEnter={secondNav.onMouseEnter}
                        onMouseLeave={secondNav.onMouseLeave}
                    >
                        <Link
                            style={{ pointerEvents: 'none', textDecoration: 'none' }}
                            to='/waifu-app'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            NSFW <i className='fas fa-caret-down' />
                        </Link>
                        {secondNav.dropdown && <Dropdown options={navMenu[1]} />}
                    </li>

                    {/* Pagina pendiente // NO ELIMINAR   */}

                    <li className='nav-item'>
                        <Link
                            to='/waifu-app/information'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            INFO
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    );
}

export default Navbar;
