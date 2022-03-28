import {connect} from "react-redux";
import {
    filterUsers,
    followThunk, getUsersThunk,
    unfollowThunk
} from "../Reducers/UsersReducer";
import {memo, useEffect, useMemo} from "react";
import Users from "./Users";
import authMeThunk from "../Reducers/AuthReducer";
import WithAuthRedirect from "../Hoc/WithAuthRedirect";
import {compose} from "redux";
import WithPreloaderUsers from "../Hoc/WithPreloader";
import Preloader from "../Common/Preloader";
import {setUserId} from "../Reducers/ProfileReducer";
import {
    getCurrentPageSel,
    getFollowProgress,
    getLoadingProcess,
    getPageSizeSel, getUsersSel, getUsersSuperSelector
} from "../Selector's/UsersSelector's";
import * as react from "react";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsersThunk(props.CurrentPage, props.PageSize);
    }, [])
    return props.Loading ? <Preloader/> : <Users {...props}/>
}

let mapStateToProps = (state) => {
    console.log("mapState")
    return {
        Users: getUsersSel(state),
        Loading: getLoadingProcess(state),
        CurrentPage: getCurrentPageSel(state),
        PageSize: getPageSizeSel(state),
        followingInProgress: getFollowProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        followThunk, unfollowThunk,
        authMeThunk,
        getUsersThunk,
        setUserId,
        filterUsers
    }),
    WithAuthRedirect
)(UsersContainer)