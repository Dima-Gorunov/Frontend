import {usersApi} from "../Api/Api";
import data from "bootstrap/js/src/dom/data";

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_PAGES_COUNT = "SET_PAGES_COUNT"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const FOLLOW_UNFOLLOW = "FOLLOW_UNFOLLOW"
const SIZE_CHANGED = "SIZE_CHANGED"
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS"
const FILTER_USERS = "FILTER_USERS"
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
                    if (action.userId === e.id) {
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
                    if (action.userId === e.id) {
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

        case FOLLOW_UNFOLLOW: {
            return {
                ...state,
                Users: [...state.Users.map(e => {
                    if (action.user.id === e.id) {
                        return {
                            ...e,
                            followed: !action.user.followed
                        }
                    }
                    return {
                        ...e
                    }
                })]
            }
        }
        case FILTER_USERS: {
            return {
                ...state,
                Users: [...state.Users.filter(e => e.id % 2 === 0)]
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
    return async (dispatch) => {
        dispatch(toggleStatus(true))
        dispatch(setCurrentPage(CurrentPage))
        let response = await usersApi.getUsers(CurrentPage, PageSize)
        dispatch(toggleStatus(false))
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setUsers(response.items))
    }
}

export const followThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowProgress(true, userId));
        let data = await usersApi.follow(userId)
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowProgress(false, userId))
    }
}
export const unFollowThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowProgress(true, userId));
        let data = await usersApi.unfollow(userId)
        if (data.resultCode === 0) {
            dispatch(unFollowSuccess(userId))
        }
        dispatch(toggleFollowProgress(false, userId))
    }
}

export const setPageSizeThunk = (size) => {
    return async dispatch => {
        dispatch(getUsersThunk(1, size))
    }
}


export const followUnFollowThunk = (user) => {
    return async (dispatch) => {
        dispatch(toggleFollowProgress(true, user.id));
        let data = user.followed ? await usersApi.unfollow(user.id) : await usersApi.follow(user.id)
        if (data.resultCode === 0) {
            dispatch(followUnFollowSuccess(user))
        }
        dispatch(toggleFollowProgress(false, user.id))
    }
}


export const setUsers = (Users) => ({type: SET_USERS, Users})
export const setCurrentPage = (Page) => ({type: SET_CURRENT_PAGE, Page})
export const setTotalUsersCount = (TotalCount) => ({type: SET_TOTAL_USERS_COUNT, TotalCount})
export const setPagesCount = (Pages) => ({type: SET_PAGES_COUNT, Pages})
export const toggleStatus = (Status) => ({type: TOGGLE_IS_LOADING, Status})
export const followUnFollowSuccess = (user) => ({type: FOLLOW_UNFOLLOW, user})
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const toggleFollowProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId})
export const filterUsers = () => ({type: FILTER_USERS})
export const testDispatch = () => ({type: null})
export default UsersReducer;
