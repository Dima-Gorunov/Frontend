import * as axios from "axios";
import {profileApi} from "../Api/Api";

const SET_FETCHING = "SET_FETCHING"
const SET_PROFILE = "SET_PROFILE"
const ADD_POST = "ADD_POST"
const SET_USER_ID = "SET_USER_ID"
let initialState = {
    Profile: null,
    isFetching: false
}


const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                Profile: action.Profile
            }
        }
        case SET_USER_ID: {
            return {
                ...state,
                UserId: action.UserId
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
export const setProfileThunk = (userId) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        profileApi.setProfile(userId)
            .then(response => {
                console.log(response);
                dispatch(setProfile(response.data))
                dispatch(setFetching(false))
            })
    }

}

export const setFetching = (fetching) => ({type: SET_FETCHING, fetching})
export const setProfile = (Profile) => ({type: SET_PROFILE, Profile})
export const addPost = (Post) => ({type: ADD_POST, Post})
export const setUserId = (UserId) => ({type: SET_USER_ID, UserId})
export default ProfileReducer;