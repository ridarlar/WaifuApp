import "../components/style/header.css"

import Navigation from "./navigation";

function Header() {
    return (
        <header className="header">
            <div className="logo" >
                <p>WAIFU GALLERY</p>
            </div>
            <input type="checkbox" name="" id="menu-bar" />
            <label className="logo" htmlFor="menu-bar">Menu</label>
            <Navigation />
        </header>
    )
}


export default Header;
