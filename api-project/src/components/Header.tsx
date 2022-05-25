import React from 'react';
import {Link, Outlet} from "react-router-dom";
import CustomLink from "../CustomElements/CustomLink";
import LogoSvg from "../img/LogoSvg";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <LogoSvg/>
            </div>
            <div className="header_menu-container">
                <CustomLink to="">
                    Версия для слабовидящих
                </CustomLink>
                <CustomLink to="/my-profile">
                    Мой Профиль
                </CustomLink>
            </div>
        </header>
    );
};

export default Header;