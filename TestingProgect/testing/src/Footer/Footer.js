import React from 'react';
import LogoFooterSvg from "../img/background/mobile/LogoFooterSvg";
import GoMapSvg from "../img/background/mobile/GoMapSvg";
import Map from "../img/background/mobile/Map.png"
import WebAlternativeSvg from "../img/WebAlternativeSvg";

const Footer = () => {
    return (
        <div className="footer">
                <div className="footer_content-container">
                <div className="footer_logo-container">
                    <LogoFooterSvg/>
                </div>
                <div className="footer_about-container">
                    <div className="contacts-info" >
                        <div className="main_text">
                            Контакты
                        </div>
                        <div className="info_text">
                            <li>ул. Волочаевская, 8г</li>
                            <li>+7 (4212)470-300</li>
                            <li>+7 (4212) 25-30-85</li>
                        </div>
                    </div>
                    <div className="social-network" >
                        <div className="main_text">
                            Мы в соц сетях
                        </div>
                        <div className="info_text">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Vkontakte</li>
                        </div>
                    </div>
                </div>
                <div className="footer_map-container">
                    <div className="footer_map_text-container">
                        <div className="text">
                            Найди нас <br/>
                            На карте
                        </div>
                        <div className="image">
                            <GoMapSvg/>
                        </div>
                        <div className="map" >
                            <img src={Map} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;