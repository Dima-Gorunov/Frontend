import {ProfileApi} from "../Api/Api";

const SET_PROFILE = "SET_PROFILE"
const SET_POSTS = "SET_POSTS"
const SET_ID = "SET_ID"
export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string

}

let initialState = {
    Profile: null,
    Posts: null,
    id: null
}


let ProfileReducer = (state = initialState, action: any): typeof initialState => {


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
        let data = await ProfileApi.getProfile(id).then(response => response.data)
        dispatch(setProfile(data))
        dispatch(setId(data.id))
        let posts = await ProfileApi.getPosts(data.id).then(response => response.data)
        dispatch(setPosts(posts))
    }
}

const setId = (id: number) => ({type: SET_ID, payload: id})
const setProfile = (payload: any) => ({type: SET_PROFILE, payload})
const setPosts = (payload: any) => ({type: SET_POSTS, payload})
export default ProfileReducer