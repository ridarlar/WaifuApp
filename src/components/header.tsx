import "../components/style/header.css"


import { Anchor } from 'antd';

const { Link } = Anchor;


function Header() {
    return (
        <header className="header">

            <div className="logo" >
                <p></p>
            </div>

            <input type="checkbox" name="" id="menu-bar" />
            <label htmlFor="menu-bar">Menu</label>

            <nav className="navbar">
                <ul>

                    <li>
                        <Link href="/" title="sfw +" />
                        <ul>

                            <li>
                                <Link href="/sfw/neko" title="neko" />
                            </li>
                            {/* <li>
                                <Link href="/sfw/shinobo" title="shinobo" />
                            </li>
                            <li>
                                <Link href="#" title="megumin" />
                            </li> */}

                        </ul>
                    </li>
                    {/* <li>
                        <Link href="#" title="nsfw +" />

                        <ul>

                            <li>
                                <Link href="#" title="wuaifu" />
                            </li>
                            <li>
                                <Link href="#" title="neko" />
                            </li>
                            <li>
                                <Link href="#" title="trap" />
                            </li>
                            <li>
                                <Link href="#" title="blowjob" />
                            </li>

                        </ul>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}




export default Header;
