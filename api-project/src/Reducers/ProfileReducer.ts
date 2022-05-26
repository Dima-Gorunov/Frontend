import {ProfileApi} from "../Api/Api";
import {setLoading} from "./AppReducer";
import {PostType} from "./PostsReducer";

const SET_PROFILE = "SET_PROFILE"
const SET_POSTS = "SET_POSTS"
const SET_ID = "SET_ID"
const CONVERT_TEXT = "CONVERT_TEXT"

type initialStateType = {
    Profile: null | Object,
    Posts: null | Array<PostType>,
    id: null | number
}

let initialState: initialStateType = {
    Profile: null,
    Posts: null,
    id: null
}

let ProfileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                Profile: action.payload
            }
        }
        case SET_ID: {
            return {
                ...state,
                id: action.payload
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                Posts: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setProfileThunk = (id: number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await ProfileApi.getProfile(id).then(response => response.data)
        let posts = await ProfileApi.getPosts(data.id).then(response => response.data)
        dispatch(setProfile(data))
        dispatch(setId(data.id))
        dispatch(setPosts(posts))
        dispatch(setLoading(false))
    }
}

const setId = (id: number) => ({type: SET_ID, payload: id})
const setProfile = (payload: any) => ({type: SET_PROFILE, payload})
const setPosts = (payload: any) => ({type: SET_POSTS, payload})
const convertText = () => ({type: CONVERT_TEXT})
export default ProfileReducer