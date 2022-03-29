import React from 'react';
import Burger from "../img/background/mobile/Burger.png"
import LogoSvg from "../img/LogoSvg";
import WebAlternativeSvg from "../img/WebAlternativeSvg";

const Header = () => {
    return (
        <div className="header">
            <div className="header_content-container" >
                <div className="logo-container">
                    <LogoSvg/>
                </div>
                <div className="logo_text-container" >
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
                <div className="header__items-container">
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

        </div>
    );
};

export default Header;