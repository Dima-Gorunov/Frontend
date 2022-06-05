import React from 'react';
import SliderContainer from "../Body/Slider_component/SliderContainer";
import BodyBack from "../../img/Body_Backgr/backg.jpg"
const Homepage = () => {
    return (
        <div>
            <div className="body_background">
                <img src={BodyBack} alt=""/>
            </div>
            <SliderContainer/>
            <div className="info">
                <div className="info-container">
                    <div className="info_content-container">
                        <div className="title_text">
                            Юридическая информация:
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages">
                <div className="advantages-container">
                    <div className="title_text">
                        преимущества
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="services-container">
                    <div className="title_text">
                        услуги
                    </div>
                </div>
            </div>
            <div className="specialists">
                <div className="specialists-container">
                    <div className="title_text">
                        специалисты
                    </div>
                </div>
            </div>
            <div className="license">
                <div className="license-container">
                    <div className="title_text">
                        лицензия
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;