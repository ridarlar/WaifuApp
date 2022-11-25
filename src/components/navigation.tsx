import { Link, } from 'react-router-dom';
import './style/header.css'


function Navigation() {

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
        <nav className="navbar">
            <ul>
                <li>
                    <Link
                        style={{ pointerEvents: 'none', textDecoration: 'none' }}
                        to="#"
                        title="" >
                        SFW +
                    </Link>
                    <ul>
                        {
                            navMenu[0].categories.map((category,index) => {
                                return (
                                    <li key={category+index}>
                                        <Link to={`/waifu-app/${navMenu[0].type}/${category}`}>
                                            {category}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>

                <li>
                    <Link
                        style={{ pointerEvents: 'none', textDecoration: 'none' }}
                        to="#"
                        title="" >
                        NSFW +
                    </Link>
                    <ul>
                        {
                            navMenu[1].categories.map((category,index) => {
                                return (
                                    <li className='dos' key={category+index}>
                                        <Link to={`/waifu-app/${navMenu[1].type}/${category}`}>
                                            {category}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>


               
            </ul>
        </nav>
    );
}

export default Navigation