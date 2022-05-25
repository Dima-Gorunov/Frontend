import {PostApi} from "../Api/Api";
import {setLoading} from "./AppReducer";


const SET_POSTS = "SET_POSTS"
const SET_LOADING = "SET_LOADING"

let initialState = {
    Posts: []
}


let PostsReducer = (state = initialState, action: any): typeof initialState => {

    switch (action.type) {
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


export const getPostsThunk = (limit:number , page :number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await PostApi.getPost().then(response => response.data)
        dispatch(setPosts(data))
        dispatch(setLoading(false))

    }
}

const setPosts = (posts: any) => ({type: SET_POSTS, payload: posts})


export default PostsReducer