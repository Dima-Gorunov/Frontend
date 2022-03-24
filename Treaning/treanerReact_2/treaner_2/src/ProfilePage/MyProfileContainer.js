import {Component, useEffect} from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {compose} from "redux";


const MyProfileContainer = (props) => {
    useEffect(() => {

    }, [])
    return (
        <MyProfile {...props}/>
    );
}

let mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {})
)(MyProfileContainer)