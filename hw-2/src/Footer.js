import React from "react";
import logo from "./vk_logo.svg";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer__container container">
                        <div className="footer__autor-container">
                            <p className="footer__autor">
                                Иванов Иван
                            </p>
                            <p className="footer__autor-about">
                                (с) 2018. Все права защищены.
                            </p>
                        </div>
                        <div className="footer__sn-links">
                            <a href="#"><img src={logo} alt="not found"></img></a>
                            <a href="#"><img src={logo} alt="not found"></img></a>
                            <a href="#"><img src={logo} alt="not found"></img></a>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;