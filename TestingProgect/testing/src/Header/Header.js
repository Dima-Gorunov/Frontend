import React, {useState} from 'react';
import Burger from "../img/background/mobile/Burger.png"
import LogoSvg from "../img/LogoSvg";
import WebAlternativeSvg from "../img/WebAlternativeSvg";

const Header = () => {

    const [menu, setActive] = useState("header__items-container")
    const [burger, setBurger] = useState("burger")
    const [darkBg,setDarkBg]=useState("dark_background_disActive")
    const openMenu = () => {
        if (menu === "header__items-container_active") {
            setActive("header__items-container")
            setBurger("burger")
            setDarkBg("dark_background_disActive")
        } else {
            setActive("header__items-container_active")
            setBurger("burger__active")
            setDarkBg("dark_background_active")
        }

    }

    return (
        <div className="header">
            <div className={darkBg}></div>
            <div className="header_content-container">
                <div className="logo-container">
                    <LogoSvg/>
                </div>
                <div className="logo_text-container">
                    <WebAlternativeSvg/>
                </div>
                <div className="header_contacts-container">
                    <div className="order-a-call">
                        <div>
                            заказать звонок
                        </div>
                    </div>
                    <div className="phone">
                        <a href="">+7 (4212) 25-30-85</a>
                    </div>
                </div>
                <div className={menu}>
                    <ul>
                        <li><a href="">О студии</a></li>
                        <li><a href="">Портфолио</a></li>
                        <li><a href="">Наши услуги</a></li>
                        <li><a href="">Новости</a></li>
                        <li><a href="">Отзывы</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </div>
                <div className="burger-container" onClick={openMenu}>
                    <div className={burger}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;