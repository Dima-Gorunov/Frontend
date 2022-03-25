import {Component, useEffect} from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {compose} from "redux";
import {getProfileThunk, getUserStatusThunk} from "../Reducers/ProfileReducer";


const MyProfileContainer = (props) => {
    useEffect(() => {
        props.getProfileThunk(22813)
        props.getUserStatusThunk(22813)

    }, [])
    return (
        <MyProfile {...props}/>
    );
}

let mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, {getProfileThunk, getUserStatusThunk})
)(MyProfileContainer)