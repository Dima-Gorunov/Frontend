import React, {useEffect} from 'react';
import HomePage from "./HomePage";
import {authMeThunk} from "../Reducers/AuthReducer";
import {connect} from "react-redux";
import WithAuthRedirect from "../Hoc/WithAuthRedirect";

const HomePageContainer = (props) => {
    useEffect(() => {
        props.authMeThunk();
    }, [])
    return (
        <HomePage {...props} />
    );
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.AuthData.isAuth
    }
}


export default connect(mapStateToProps, {
    authMeThunk
})(HomePageContainer);