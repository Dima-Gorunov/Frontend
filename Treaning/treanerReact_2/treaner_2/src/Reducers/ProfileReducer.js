import * as axios from "axios";
import {profileApi} from "../Api/Api";

const SET_PROFILE = "SET_PROFILE"
const ADD_POST = "ADD_POST"
const SET_USER_ID = "SET_USER_ID"
let initialState = {
    Profile: null,
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
        default: {
            return {
                ...state
            }
        }
    }
}
export const setProfileThunk = (userId) => {
    return (dispatch) => {
        profileApi.setProfile(userId)
            .then(response => {
                console.log(response);
                dispatch(setProfile(response.data))
            })
    }

}
export const setProfile = (Profile) => ({type: SET_PROFILE, Profile})
export const addPost = (Post) => ({type: ADD_POST, Post})
export const setUserId = (UserId) => ({type: SET_USER_ID, UserId})
export default ProfileReducer;