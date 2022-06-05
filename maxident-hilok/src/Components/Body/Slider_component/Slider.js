import React from 'react';
import slider from "../../../img/slider/arkazemin.jpg"

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider-container">
                <img src={slider} alt=""/>
                <div className="slider_background"/>
                <div className="slider_content-container">
                    <div className="slider_content title_text">
                        В клинике Maxident рады видеть взрослых и детей!
                    </div>
                    <ul className="sub_title_text" >
                        <li>Осмотр состояния полости рта</li>
                        <li>Консультация узких специалистов при необходимости</li>
                        <li>Составление плана лечения</li>
                        <li>Составление сметы лечения</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slider;