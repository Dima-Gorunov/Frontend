import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData, logOutThunk} from "../Reducers/AuthReducer";



const HeaderContainer = (props) => {
    useEffect(() => {
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
    logOutThunk
})(HeaderContainer);