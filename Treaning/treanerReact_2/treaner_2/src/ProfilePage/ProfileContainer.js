import {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile, setUserId} from "../Reducers/ProfileReducer";
import {useParams} from "react-router-dom";
import * as axios from "axios";

const ProfileContainer = (props) => {
    let UserId = useParams().UserId
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${UserId}`)
            .then(response => {
                console.log(response);
                props.setProfile(response.data)
            })
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
    setUserId
})(ProfileContainer)