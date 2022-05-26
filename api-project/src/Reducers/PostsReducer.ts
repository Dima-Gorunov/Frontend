import {PostApi, ProfileApi} from "../Api/Api";
import {setLoading} from "./AppReducer";


const SET_POSTS = "SET_POSTS"
const SET_LOADING = "SET_LOADING"
const SET_ONE_POST = "SET_ONE_POST"

export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type initialStateType = {
    Posts: null | Array<PostType>,
    Post: null | PostType
}

let initialState: initialStateType = {
    Posts: null,
    Post: null
}

let PostsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                Posts: action.payload
            }
        }
        case SET_ONE_POST: {
            return {
                ...state,
                Post: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const getPostsThunk = (limit: number, page: number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await PostApi.getPost().then(response => response.data)
        dispatch(setPosts(data))
        dispatch(setLoading(false))
    }
}

export const getOnePostThunk = (userId: number, postId: number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await PostApi.getOnePost(userId, postId).then(response => response.data[0])
        dispatch(setOnePost(data))
        dispatch(setLoading(false))
    }
}

const setPosts = (posts: any) => ({type: SET_POSTS, payload: posts}) // просто так удобнее(payload: posts)
const setOnePost = (post: any) => ({type: SET_ONE_POST, payload: post})

export default PostsReducer