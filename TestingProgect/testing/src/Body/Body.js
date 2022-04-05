import React, {useEffect, useState} from 'react';
import Head_translucent_bg from "../img/Body/Head/Head_translucent_bg.png"
import telephone from "../img/Body/telephone.png"
import ellipse from "../img/Body/Ellipse.png"
import ShopCartSvg from "../img/Body/Head/ShopCartSvg";
import eDesktop from "../img/Body/eDesktop.png"
import eMobile from "../img/Body/eMobile.png"
import UnionSvg from "../img/Body/UnionSvg";
import PunctsSvg from "../img/Body/How/PunctsSvg";
import RightArrowSvg from "../img/Body/How/RightArrowSvg";
import FeaturesBackground from "../img/Body/Features/Blume BG.png"
import FeatOne from "../img/Body/Features/Feat_1.png"
import FeatTwo from "../img/Body/Features/Feat_2.png"
import FeatThree from "../img/Body/Features/Feat_3.png"
import CasesBackground from "../img/Body/Cases/Placeholder.png"
const Body = () => {

    const setClassActive = (e) => {
        console.log(e.currentTarget.children[2].className);
        if (e.currentTarget.children[2].className === "right-arrow") {
            e.currentTarget.children[2].className = "right-arrow-active"
            e.currentTarget.children[3].className = "rolling-out-text-active"
        } else {
            e.currentTarget.children[2].className = "right-arrow"
            e.currentTarget.children[3].className = "rolling-out-text"
        }
    }

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
                            <div className="main_content-container">
                                <div className="group">
                                    <div className="group_container">
                                        <ul>
                                            <li onClick={setClassActive}>
                                                <span>01</span><span>Анализ Целевой Аудитории</span>
                                                <span className="right-arrow"><RightArrowSvg/></span>
                                                <div className="rolling-out-text">
                                                    Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса,
                                                    PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно
                                                    оплатить товар или услугу картой Visa или Mastercard,
                                                    Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн
                                                    или Альфа Клик.
                                                </div>
                                            </li>
                                            <hr/>
                                            <li onClick={setClassActive}>
                                                <span>02</span><span>Анализ Целевой Аудитории</span><span
                                                className="right-arrow"
                                            ><RightArrowSvg/></span>
                                                <div className="rolling-out-text">
                                                    Some Text1
                                                </div>
                                            </li>
                                            <hr/>
                                            <li onClick={setClassActive}>
                                                <span>03</span><span>Анализ Целевой Аудитории</span><span
                                                className="right-arrow"
                                            ><RightArrowSvg/></span>
                                                <div className="rolling-out-text">
                                                    Some Text2
                                                </div>
                                            </li>
                                            <hr/>
                                            <li onClick={setClassActive}>
                                                <span>04</span><span>Анализ Целевой Аудитории</span><span
                                                className="right-arrow"
                                            ><RightArrowSvg/></span>
                                                <div className="rolling-out-text">
                                                    Some Text3
                                                </div>
                                            </li>
                                            <hr/>
                                            <li onClick={setClassActive}>
                                                <span>05</span><span>Анализ Целевой Аудитории</span><span
                                                className="right-arrow"
                                            ><RightArrowSvg/></span>
                                                <div className="rolling-out-text">
                                                    Some Text4
                                                </div>
                                            </li>
                                            <hr/>
                                            <li onClick={setClassActive}>
                                                <span>06</span><span>Анализ Целевой Аудитории</span><span
                                                className="right-arrow"
                                            ><RightArrowSvg/></span>
                                                <div className="rolling-out-text">
                                                    Some Text5
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="how_image">
                                <PunctsSvg/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------*/}
                <div className="features">
                    <div className="features-container">
                        <div className="features__background">
                            <img src={FeaturesBackground} alt=""/>
                        </div>
                        <div className="features_items-container">
                            <div className="features_item">
                                <div className="features_image">
                                    <img src={FeatOne} alt=""/>
                                </div>
                                <div className="features_text-container">
                                    <div className="features_heading_text">
                                        Принимайте платежи картой,
                                        с помощью удобных
                                        платежных систем!
                                    </div>
                                    <div className="features_bottom_text">
                                        Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal,
                                        Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или
                                        услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного
                                        телефона, через Сбербанк Онлайн или Альфа Клик.
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="features_item">
                                <div className="features_image">
                                    <img src={FeatTwo} style={{width: "280px"}} alt=""/>
                                </div>
                                <div className="features_text-container">
                                    <div className="features_heading_text">
                                        Принимайте картой,
                                        пустые нули !
                                    </div>
                                    <div className="features_bottom_text">
                                        Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal,
                                        Robokassa или Stripe, и ваши покупатели смогут безопасно.
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="features_item">
                                <div className="features_image">
                                    <img src={FeatThree} alt=""/>
                                </div>
                                <div className="features_text-container">
                                    <div className="features_heading_text">
                                        Интегрируем неинтегрируемое!
                                    </div>
                                    <div className="features_bottom_text">
                                        Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal,
                                        Robokassa или Stripe, и ваши покупатели смогут безопасно.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------*/}
                <div className="cases">
                    <div className="cases-container">
                        <div className="cases__background">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;