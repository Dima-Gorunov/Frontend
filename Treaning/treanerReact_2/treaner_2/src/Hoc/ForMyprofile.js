import MyProfile from "../ProfilePage/MyProfile";
import {getProfileThunk, getUserStatusThunk, updateStatusThunk} from "../Reducers/ProfileReducer";
import {connect} from "react-redux";
import React from "react";
import {Navigate} from 'react-router-dom'

const ForMyProfile = (Component) => {

    const UpdateComponent = (props) => <Component/>

    let mapStateToProps = (state) => {
        return {

        }
    }

    return connect(mapStateToProps)(UpdateComponent)

}

export default ForMyProfile