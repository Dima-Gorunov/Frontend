import * as axios from "axios";
import {profileApi} from "../Api/Api";

const SET_FETCHING = "SET_FETCHING"
const SET_PROFILE = "SET_PROFILE"
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"
const ADD_POST = "ADD_POST"
const SET_PROFILE_ID = "SET_PROFILE_ID"
let initialState = {
    Profile: null,
    status: null,
    isFetching: false,
    userId:null
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                Profile: action.Profile
            }
        }
        case SET_PROFILE_ID: {
            return {
                ...state,
                userId: action.UserId
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status ? action.status : "no status"
            }
        }
        case ADD_POST: {
            return {
                ...state,
                Posts: [...state.Posts, ...action.Post]
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.fetching
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export const getProfileThunk = (userId) => {
    return (dispatch) => {
        dispatch(setProfileId(userId))
        dispatch(setFetching(true));
        profileApi.getProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data))
                dispatch(setFetching(false))
            })
    }
}

export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response))
            })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
    }
}

export const setFetching = (fetching) => ({type: SET_FETCHING, fetching})
export const setProfile = (Profile) => ({type: SET_PROFILE, Profile})
export const setProfileId = (UserId) => ({type: SET_PROFILE_ID, UserId})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})
export default ProfileReducer;