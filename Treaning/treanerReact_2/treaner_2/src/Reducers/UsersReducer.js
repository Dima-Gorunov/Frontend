import {usersApi} from "../Api/Api";
import data from "bootstrap/js/src/dom/data";

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_PAGES_COUNT = "SET_PAGES_COUNT"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SIZE_CHANGED = "SIZE_CHANGED"
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS"
let initialState = {
    Users: [],
    CurrentPage: 1,
    PageSize: 5,
    Pages: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    TotalUsersCount: 0,
    Loading: false,
    followingInProgress: []
}


let UsersReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                Users: [...action.Users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                CurrentPage: action.Page
            }
        }

        case SET_PAGES_COUNT: {
            return {
                ...state,
                Pages: action.Pages
            }
        }


        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                TotalUsersCount: action.TotalCount
            }
        }
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                Loading: action.Status
            }
        }
        case FOLLOW: {
            return {
                ...state,
                Users: [...state.Users.map(e => {
                    if (action.id === e.id) {
                        return {
                            ...e,
                            followed: true
                        }
                    }
                    return {
                        ...e
                    }
                })]
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                Users: [...state.Users.map(e => {
                    if (action.id === e.id) {
                        return {
                            ...e,
                            followed: false
                        }
                    }
                    return {
                        ...e
                    }
                })]
            }
        }
        case TOGGLE_IS_FOLLOW_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(e => e !== action.userId)
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}


export const getUsersThunk = (CurrentPage = 1, PageSize = 1) => {
    return (dispatch) => {
        dispatch(toggleStatus(true))
        dispatch(setCurrentPage(CurrentPage))
        usersApi.getUsers(CurrentPage, PageSize)
            .then(response => {
                dispatch(setTotalUsersCount(response.totalCount))
                dispatch(toggleStatus(false))
                dispatch(setUsers(response.items))
                debugger
            })
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userId));
        usersApi.unfollow(userId)
            .then(response => response.data)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowProgress(false, userId))
            })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userId));
        usersApi.follow(userId)
            .then(response => response.data)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowProgress(false, userId))
            })
    }
}


export const setUsers = (Users) => ({type: SET_USERS, Users})
export const setCurrentPage = (Page) => ({type: SET_CURRENT_PAGE, Page})
export const setTotalUsersCount = (TotalCount) => ({type: SET_TOTAL_USERS_COUNT, TotalCount})
export const setPagesCount = (Pages) => ({type: SET_PAGES_COUNT, Pages})
export const toggleStatus = (Status) => ({type: TOGGLE_IS_LOADING, Status})
export const followSuccess = (id) => ({type: FOLLOW, id})
export const unfollowSuccess = (id) => ({type: UNFOLLOW, id})
export const toggleFollowProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId})
export default UsersReducer;
