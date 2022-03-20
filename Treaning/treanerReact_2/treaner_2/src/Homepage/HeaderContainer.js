import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setUserData} from "../Reducers/AuthReducer";


const HeaderContainer = (props) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let {email, id, login} = response.data.data
                props.setUserData(email, id, login)
            })
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
    setUserData
})(HeaderContainer);