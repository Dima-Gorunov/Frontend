import {Outlet} from 'react-router-dom'
import React, {useEffect} from "react";
import Footer from "./Footer";
import {Component} from "react";
import MenuContainer from "./MenuContainer";
import HeaderContainer from "./HeaderContainer";

let HomePage = () => {
    return (
        <div>
            <HeaderContainer/>
            <div className="d-flex">
                <div className="bg-danger">
                    <MenuContainer/>
                </div>
                <div className="bg-primary w-100">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;