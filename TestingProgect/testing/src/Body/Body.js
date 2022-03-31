import React from 'react';
import Head_translucent_bg from "../img/Body/Head/Head_translucent_bg.png"
import telephone from "../img/Body/telephone.png"
import ellipse from "../img/Body/Ellipse.png"
import ShopCartSvg from "../img/Body/Head/ShopCartSvg";
import eDesktop from "../img/Body/eDesktop.png"
import eMobile from "../img/Body/eMobile.png"
import UnionSvg from "../img/Body/UnionSvg";
import PunctsSvg from "../img/Body/How/PunctsSvg";

const Body = () => {
    return (
        <div className="body">
            <div className="body_content-container">
                <div className="head">
                    <div className="head-container">
                        <div className="heading-container">
                            <div className="heading">
                                <div className="heading-top_text">
                                    <ShopCartSvg/>
                                    <div>E-commerce</div>
                                </div>
                                <div className="heading-bottom_text">
                                    Интернет-магазин принесет вам максимум прибыли!
                                </div>
                            </div>
                        </div>
                        <div className="head__background">
                            <img src={Head_translucent_bg} style={{height: "526px"}} alt=""/>
                            <img src={ellipse} alt=""/>
                            <img src={eMobile} alt=""/>
                            <img src={eDesktop} alt=""/>
                            <img src={telephone} alt=""/>
                        </div>

                        <div className="bottom-container">
                            <div className="bottom__order-a-call">
                                <div className="call_text">
                                    Заказать звонок
                                </div>
                                <div className="call_link">
                                    <UnionSvg/>
                                </div>
                            </div>
                            <div className="bonus_text">
                                Ответим на любой вопрос
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------*/}
                <div className="how">
                    <div className="how_content-container">
                        <div className="how_heading-container">
                            КАК МЫ РАБОТАЕМ НАД ВАШИМ ПРОЕКТОМ
                        </div>
                        <div className="how_main-container">
                            <div className="main_content-container" >
                                qeqw
                                eqw
                            </div>
                            <div className="how_image" >
                                <PunctsSvg/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Body;