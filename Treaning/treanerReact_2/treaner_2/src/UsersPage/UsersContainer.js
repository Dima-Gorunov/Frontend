import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage, setPagesCount,
    setTotalUsersCount,
    setUsers,
    toggleFollowProgress,
    toggleStatus,
    unfollow
} from "../Reducers/UsersReducer";
import {useEffect} from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsersThunkCreator(props.CurrentPage, props.PageSize)
    }, [])

    return <>
        {props.Loading ? <Preloader/> : null}
        <Users {...props}/>
    </>;
}


let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users,
        CurrentPage: state.UsersPage.CurrentPage,
        PageSize: state.UsersPage.PageSize,
        Pages: state.UsersPage.Pages,
        TotalUsersCount: state.UsersPage.TotalUsersCount,
        Loading: state.UsersPage.Loading,
        followingInProgress: state.UsersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    setUsers, setCurrentPage, setTotalUsersCount,
    setPagesCount, toggleStatus, follow, unfollow,
    toggleFollowProgress,
    getUsersThunkCreator
})(UsersContainer)
