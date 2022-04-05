import {connect} from "react-redux";
import React from "react";

const ForMyProfile = (Component) => {

    const UpdateComponent = (props) => <Component/>

    let mapStateToProps = (state) => {
        return {
        }
    }

    return connect(mapStateToProps)(UpdateComponent)

}

export default ForMyProfile