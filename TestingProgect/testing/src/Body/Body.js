import React, {useState} from 'react';
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
import CasesOne from "../img/Body/Cases/CasesOne.png"
import CasesTwo from "../img/Body/Cases/CasesTwopng.png"
import CasesTHREE from "../img/Body/Cases/CasesTHREE.png"
import CasesFour from "../img/Body/Cases/CasesFour.png"
import CasesOneDesktop from "../img/Body/Cases/CasesOneDesktop.png"
import CasesTwoDesktop from "../img/Body/Cases/CasesTwoDesktop.jpg"
import CasesTHREEDesktop from "../img/Body/Cases/CasesTHReeDesktop.png"
import CasesFourDesktop from "../img/Body/Cases/CasesFourDesktop.png"
import LoveSvg from "../img/Body/Cases/LoveSvg";
import SwitchesSvg from "../img/Body/Clients/SwitchesSvg";
import FirstClients from "../img/Body/Clients/FirstClient.png"
import SecondClients from "../img/Body/Clients/SecondClients.png"
import ThirdClients from "../img/Body/Clients/ThirdClient.png"
import FourthClients from "../img/Body/Clients/FourthClient.png"
import Captcha from "../img/Body/Form/Captcha.1.png"


const Body = () => {

    const setClassActive = (e) => {
        console.log(e.currentTarget.children[2].className);
        if (e.currentTarget.children[2].className === "right-arrow") {
            e.currentTarget.children[2].className = "right-arrow__active"
            e.currentTarget.children[3].className = "rolling-out-text__active"
        } else {
            e.currentTarget.children[2].className = "right-arrow"
            e.currentTarget.children[3].className = "rolling-out-text"
        }
    }
    const [switchElem, setSwitchElem] = useState(0)
    const switchNext = () => {
        if (switchElem <= document.querySelectorAll('.clients_image').length + 1) {
            switchElem === 2 ? setSwitchElem(-1)
                : setSwitchElem(switchElem + 1)
            let switchesClientsClassActive = document.querySelectorAll('.clients_image__active')
            switchesClientsClassActive[0].className = "clients_image"
            let switchesClientsClass = document.querySelectorAll('.clients_image')
            switchesClientsClass[switchElem + 1].className = "clients_image__active";
        }
    }
    const switchPrev = () => {


        if (switchElem >= 0) {
            switchElem === 0 ? setSwitchElem(document.querySelectorAll('.clients_image').length)
                : setSwitchElem(switchElem - 1)
            let switchesClientsClassActive = document.querySelectorAll('.clients_image__active')
            switchesClientsClassActive[0].className = "clients_image"
            let switchesClientsClass = document.querySelectorAll('.clients_image')
            switchesClientsClass[switchElem].className = "clients_image__active";
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
                        <div className="our_cases_text-container">
                            <div className="our_cases_text">
                                НАШИ КЕЙСЫ
                            </div>
                            <div className="our_cases_text__desktop">
                                КЕЙСЫ ГОВОРЯТ ЗА СЕБЯ
                            </div>
                        </div>
                        <div className="cases_items-container">
                            <div className="cases_item">
                                <div className="cases_item_image">
                                    <img src={CasesOne} alt=""/>
                                    <img src={CasesOneDesktop} alt=""/>
                                </div>
                                <div className="cases_item_text-container">
                                    <div className="head_text">
                                        Королевство цветов
                                    </div>
                                    <div className="bottom_text">
                                        Интернет магазин
                                    </div>
                                </div>
                            </div>
                            <div className="cases_item">
                                <div className="cases_item_image">
                                    <img src={CasesTwo} alt=""/>
                                    <img src={CasesTwoDesktop} alt=""/>
                                </div>
                                <div className="cases_item_text-container">
                                    <div className="head_text">
                                        Мастер климат
                                    </div>
                                    <div className="bottom_text">
                                        Интернет магазин
                                    </div>
                                </div>
                            </div>
                            <div className="cases_item">
                                <div className="cases_item_image">
                                    <img src={CasesTHREE} alt=""/>
                                    <img src={CasesTHREEDesktop} alt=""/>
                                </div>
                                <div className="cases_item_text-container">
                                    <div className="head_text">
                                        Новая аптека
                                    </div>
                                    <div className="bottom_text">
                                        Интернет магазин
                                    </div>
                                </div>
                            </div>
                            <div className="cases_item">
                                <div className="cases_item_image">
                                    <img src={CasesFour} alt=""/>
                                    <img src={CasesFourDesktop} alt=""/>
                                </div>
                                <div className="cases_item_text-container">
                                    <div className="head_text">
                                        Восточный Тех Резерв
                                    </div>
                                    <div className="bottom_text">
                                        Интернет магазин
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cases_application">
                            <div className="application-head_text-container">
                                <div className="application_image">
                                    <LoveSvg/>
                                </div>
                                <div className="application_text">
                                    Оставьте свою заявку, чтобы получить БЕСПЛАТНУЮ консультацию!
                                </div>
                            </div>
                            <div className="application_button">
                                <div className="application_button_text">
                                    <div>
                                        Оставить заявку
                                    </div>
                                    <div>
                                        <UnionSvg/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                {/*------------*/}
                <div className="clients">
                    <div className="clients-container">
                        <div className="head_text">
                            НАШИ КЛИЕНТЫ
                        </div>
                        <div className="clients_image_group">
                            <div className="clients_image__active">
                                <img src={FirstClients} alt=""/>
                                <div className="image_number">
                                    01
                                </div>
                            </div>
                            <div className="clients_image">
                                <img src={SecondClients} alt=""/>
                                <div className="image_number">
                                    02
                                </div>
                            </div>
                            <div className="clients_image">
                                <img src={ThirdClients} alt=""/>
                                <div className="image_number">
                                    03
                                </div>
                            </div>
                            <div className="clients_image">
                                <img src={FourthClients} alt=""/>
                                <div className="image_number">
                                    04
                                </div>
                            </div>
                        </div>
                        <div className="switches_container">
                            <div className="switch" onClick={switchPrev}>
                                <SwitchesSvg/>
                            </div>
                            <div className="switch" onClick={switchNext}>
                                <SwitchesSvg/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------*/}
                <div className="form">

                    <div className="form-container">
                        <div className="form_content-container">
                            <div className="form_head_text">
                                Интернет-магазин, который приносит прибыль
                            </div>
                            <div className="form_bonus_text">
                                <ul>
                                    <li><span></span><span></span>Получите бесплатно</li>
                                    <li><span></span><span></span>Личная косультация</li>
                                    <li><span></span><span></span>Стратегия запуска и продвижения</li>
                                    <li><span></span><span></span>Коммерческое предложение</li>
                                </ul>

                            </div>
                            <div className="directly_form_head_text">
                                Оставьте заявку, чтобы узнать, как создать свой Интернет-магазин
                            </div>
                            <div className="directly_form">
                                <input className="default_form" type="text" placeholder={"Имя"}/>

                                <input className="default_form" type="text" placeholder={"+7 (000) 000-00-00"}/>

                                <textarea className="form_about" type="text"
                                          placeholder={"Расскажите о своей задаче"}/>

                                <div className="form_checkbox">
                                    <input type="checkbox" className="checkbox" id="cb1" placeholder={"qweqwe"}/>
                                    <label className="checkbox_label" htmlFor="cb1">
                                        Нажимая на кнопку "Отправить", я даю
                                        согласие на обработку
                                        персональных данных.
                                    </label>
                                </div>
                                <img src={Captcha} alt=""/>
                                <button className="form_submit">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;