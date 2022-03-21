import {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile, setProfileThunk, setUserId} from "../Reducers/ProfileReducer";
import {useParams} from "react-router-dom";
import * as axios from "axios";

const ProfileContainer = (props) => {
    let UserId = useParams().UserId
    useEffect(() => {
        props.setProfileThunk(UserId)
    }, [])

    return (
        <Profile {...props}/>
    );
}

let mapStateToProps = (state) => {
    return {
        Profile: state.ProfilePage.Profile,
    }
}

export default connect(mapStateToProps, {
    setProfile,
    setUserId,
    setProfileThunk
})(ProfileContainer)