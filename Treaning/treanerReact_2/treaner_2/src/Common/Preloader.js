import React from 'react';
import Loading from "../Img/H0bj.gif";

const Preloader = () => {
    return (
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                <img src={Loading} style={{width: "100px"}} alt=""/>
            </div>
    );
};

export default Preloader;