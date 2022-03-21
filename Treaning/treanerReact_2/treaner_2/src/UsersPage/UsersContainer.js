import {connect} from "react-redux";
import {
    followThunk, getUsersThunk,
    unfollowThunk
} from "../Reducers/UsersReducer";
import {useEffect} from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsersThunk(props.CurrentPage, props.PageSize)
    }, [])

    return <>
        {props.Loading ? <Preloader/> : null}
        <Users {...props}/>
    </>;
}


let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users,
        Loading: state.UsersPage.Loading,
        CurrentPage: state.UsersPage.CurrentPage,
        PageSize: state.UsersPage.PageSize,
        followingInProgress: state.UsersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    followThunk, unfollowThunk,
    getUsersThunk
})(UsersContainer)
