import React, {useEffect} from 'react';
import HomePage from "./HomePage";
import {getUserData} from "../Reducers/AuthReducer";
import {connect} from "react-redux";
import WithAuthRedirect from "../Hoc/WithAuthRedirect";

const HomePageContainer = (props) => {
    useEffect(() => {

    }, [])
    return (
        <HomePage {...props} />
    );
};

let mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps, {
    getUserData
})(HomePageContainer);