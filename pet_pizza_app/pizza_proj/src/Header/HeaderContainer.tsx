import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = () => {
    return <Header/>
};

let mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, {})(HeaderContainer);