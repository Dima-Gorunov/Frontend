import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Route, Routes} from "react-router-dom";
import FooterContainer from "./Components/Footeer/FooterContainer";
import HomepageContainer from "./Components/Homepage/HomepageContainer";

function App() {
    return (
        <div>
            <HeaderContainer/>
            <div className="content-container">
                <Routes>
                    <Route index element={<HomepageContainer/>}/>
                    <Route path="*" element={<div>стр не найдена</div>}/>
                    <Route path="about/*" element={<div>о нас</div>}/>
                    <Route path="user/:UserId" element={<div>dd</div>}/>
                    <Route path="user/:UserId/post/:PostId" element={<div>qq</div>}/>
                </Routes>
            </div>
            <FooterContainer/>
        </div>
    );
}

let mapStateToProps = (state: any) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {})
)(App);
