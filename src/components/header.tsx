import "../components/style/header.css"


const Header = (): JSX.Element =>
    <div className="header">
        <a className="logo" href="">LOGO</a>
        <input type="checkbox" name="" id="menu-bar" />
        <label htmlFor="menu-bar">Menu</label>
        <nav className="navbar">
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">sfw +</a>
                    <ul>
                        <li><a href="">WUAIFU</a></li>
                        <li><a href="">NEKO</a></li>
                        <li><a href="">shinobo</a></li>
                        <li><a href="">megumin</a></li>
                    </ul>
                </li>
                <li><a href="">nsfw +</a>
                    <ul>
                        <li><a href="">WUAIFU</a></li>
                        <li><a href="">NEKO</a></li>
                        <li><a href="">trap</a></li>
                        <li><a href="">blowjob</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>


export default Header;