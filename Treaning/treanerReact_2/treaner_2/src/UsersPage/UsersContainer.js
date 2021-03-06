import {connect} from "react-redux";
import {
    filterUsers,
    followUnFollowThunk, getUsersThunk, setPageSizeThunk,
} from "../Reducers/UsersReducer";
import {memo, useEffect, useMemo} from "react";
import Users from "./Users";
import authMeThunk from "../Reducers/AuthReducer";
import WithAuthRedirect from "../Hoc/WithAuthRedirect";
import {compose} from "redux";
import WithPreloaderUsers from "../Hoc/WithPreloader";
import Preloader from "../Common/Preloader";
import {
    getCurrentPageSel,
    getFollowProgress,
    getLoadingProcess,
    getPageSizeSel, getUsersSel,
} from "../Selector's/UsersSelector's";
import * as react from "react";

const UsersContainer = ({getUsersThunk, CurrentPage, PageSize, Loading, ...props}) => {
    useEffect(() => {
        getUsersThunk(CurrentPage, PageSize);
    }, [])
    return Loading ? <Preloader/> : <Users {...props}/>
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
        followUnFollowThunk,
        getUsersThunk,
        filterUsers,
        setPageSizeThunk
    })
)(UsersContainer)