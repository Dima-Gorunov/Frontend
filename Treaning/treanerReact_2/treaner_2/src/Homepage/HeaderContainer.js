import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk} from "../Reducers/AuthReducer";



const HeaderContainer = (props) => {
    useEffect(() => {
        props.authMeThunk();
    },[])

    return (
        <div>
            <Header {...props}/>
        </div>
    );

}

let mapStateToProps = (state) => {
    return {
        Login: state.AuthData.login
    }
}

export default connect(mapStateToProps, {
  authMeThunk
})(HeaderContainer);