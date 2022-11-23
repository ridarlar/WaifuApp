import "../components/style/header.css"

import { Anchor } from 'antd';

const { Link } = Anchor;


const Header = (): JSX.Element =>
    <header className="header">

        <div className="logo" >
            <p >logo</p>
        </div>

        <input type="checkbox" name="" id="menu-bar" />
        <label htmlFor="menu-bar">Menu</label>

        <nav className="navbar">
            <ul>
                <li>
                    <Link href="#" title="home" />
                </li>
                <li>
                    <Link href="#" title="sfw +" />
                    <ul>
                        <li>
                            <Link href="#" title="wuaifu" />
                        </li>
                        <li>
                            <Link href="#" title="neko" />
                        </li>
                        <li>
                            <Link href="#" title="shinobo" />
                        </li>
                        <li>
                            <Link href="#" title="megumin" />
                        </li>

                    </ul>
                </li>
                <li>
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
                </li>
            </ul>
        </nav>
    </header>


export default Header;