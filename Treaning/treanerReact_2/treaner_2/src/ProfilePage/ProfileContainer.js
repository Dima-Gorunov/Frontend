import {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile, setProfileThunk, setUserId} from "../Reducers/ProfileReducer";
import {useParams} from "react-router-dom";
import * as axios from "axios";
import Preloader from "../Common/Preloader";

const ProfileContainer = (props) => {
    let UserId = useParams().UserId
    useEffect(() => {
        props.setProfileThunk(UserId)
    }, [])

    return (
        !props.isFetching
            ? <Profile {...props}/>
            : <Preloader/>
    );
}

let mapStateToProps = (state) => {
    return {
        Profile: state.ProfilePage.Profile,
        isFetching: state.ProfilePage.isFetching
    }
}

export default connect(mapStateToProps, {
    setProfile,
    setUserId,
    setProfileThunk
})(ProfileContainer)