import {Component, useEffect} from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {compose} from "redux";
import {getProfileThunk, getUserStatusThunk} from "../Reducers/ProfileReducer";
import WithAuthRedirect from "../Hoc/WithAuthRedirect";
import {getAuth} from "../Selector's/AuthSelector";


const MyProfileContainer = (props) => {
    useEffect(() => {

    }, [])
    return (
        <MyProfile {...props}/>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: getAuth(state)
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {getProfileThunk, getUserStatusThunk})
)(MyProfileContainer)