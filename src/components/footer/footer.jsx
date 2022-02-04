import React from 'react';
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="menu">
                <a>JUSTICE</a>
                <div className="menu-list">
                    <a>Главная</a>
                    <a>Список</a>
                    <a>Друзья</a>
                    <a>Контакты</a>
                </div>
            </div>
            <div className="about-company">
                <p>© 2021 Justice-team. All rights reserved.</p>
                <div>
                    <span>Terms & conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;