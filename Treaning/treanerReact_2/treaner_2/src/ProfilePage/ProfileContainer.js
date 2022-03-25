import {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileThunk, getUserStatusThunk} from "../Reducers/ProfileReducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import ForMyProfile from "../Hoc/ForMyprofile";

const ProfileContainer = (props) => {
    let UserId = useParams().UserId
    useEffect(() => {
        props.getProfileThunk(UserId);
        props.getUserStatusThunk(UserId)
    }, [])

    return <Profile {...props}/>
}

let mapStateToProps = (state) => {
    return {
        Profile: state.ProfilePage.Profile,
        status: state.ProfilePage.status,
        isFetching: state.ProfilePage.isFetching
    }
}


export default compose(
    ForMyProfile,
    connect(mapStateToProps, {
        getProfileThunk,
        getUserStatusThunk
    }),
)(ProfileContainer)
