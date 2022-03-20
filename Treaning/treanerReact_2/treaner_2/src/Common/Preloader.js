import React from 'react';
import Loading from "../Img/H0bj.gif";

const Preloader = () => {
    return (
        <div style={{position:"absolute", left:"50vw", top:"50vh"}}>
            <img src={Loading} style={{width: "100px"}} alt=""/>
        </div>
    );
};

export default Preloader;