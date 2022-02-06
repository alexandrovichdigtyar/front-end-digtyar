import React from "react";
import logo from "./logo.svg"

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__container container">
                    <a href="#"><img className="header__logo" src={logo}></img></a>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li><a href="#">главная</a></li>
                            <li><a href="#">об авторе</a></li>
                            <li><a href="#">работы</a></li>
                            <li><a href="#">процесс</a></li>
                            <li><a href="#">контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;