import React, { useState } from 'react';
import './style/Dropdown.css';
import { Link } from 'react-router-dom';

interface IObjectMenu {
    type: string
    categories: string[]
}

function Dropdown(
    { options }: {
        options: IObjectMenu
    }
) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        < >
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {
                    options.categories.map((category, index) => {
                        return (
                            <li
                                key={category + index}>
                                <Link
                                    className='dropdown-link'
                                    onClick={() => setClick(false)}
                                    to={`/waifu-app/${options.type}/${category}`}
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
