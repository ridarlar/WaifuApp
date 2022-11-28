import React, { useState } from 'react';
import './style/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


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
        < >
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {
                    navMenu[0].categories.map((category, index) => {
                        return (
                            <li
                                key={category + index}>
                                <Link
className='dropdown-link'
                                    onClick={() => setClick(false)}
                                    to={`/waifu-app/${navMenu[0].type}/${category}`}
                                >
                                    {category}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    );
}

export default Dropdown;
