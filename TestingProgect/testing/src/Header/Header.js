import React from 'react';
import style from "../Header/Header.module.scss"
import Burger from "../img/background/mobile/Burger.png"
import Logo from "../img/Logo.png"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} alt=""/>
            </div>
            <div className="contacts-container">
                <div className="order-a-call">
                    <div>
                        заказать звонок
                    </div>
                </div>
                <div className="phone">
                    <a href="">+7 (4212) 25-30-85</a>
                </div>
            </div>
            <div className="items-container">
                <ul>
                    <li>О студии</li>
                    <li>Портфолио</li>
                    <li>Наши услуги</li>
                    <li>Новости</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="burger-container">
                <div className="burger">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </div>
    );
};

export default Header;