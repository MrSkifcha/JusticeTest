import React, {useState} from 'react';
import bell from "../../images/icons/bell.png";
import person from "../../images/icons/person.png";
import "./header.scss"

const Header = () => {

    const [style, setStyle] = useState("menu-list-mobile-not-active");

    const openMenu = () => {
        setStyle("menu-list-mobile-active")
    }

    const closeMenu =() => {
        setStyle("menu-list-mobile-not-active");
    }

    return (
        <div className="container-header">
            <div className="header">
                <a>JUSTICE</a>
                <div className="header-menu">
                    <span><a>Главная</a></span>
                    <span><a>Список</a></span>
                    <span><a>Друзья</a></span>
                    <span><a>Контакты</a></span>
                    <button>Выйти</button>
                    <div className="bell"><img src={bell}/></div>
                    <div className="person"><img src={person}/></div>
                </div>
                <div className="header-menu-mobile">
                    <div onClick={openMenu} className="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={style}>
                        <div>
                            <a><img src={bell}/></a>
                            <a><img src={person}/></a>
                            <a onClick={closeMenu}>X</a>
                        </div>
                        <div>
                            <button>Выйти</button>
                        </div>
                        <div><a>Главная</a></div>
                        <div><a>Список</a></div>
                        <div><a>Друзья</a></div>
                        <div><a>Контакты</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;