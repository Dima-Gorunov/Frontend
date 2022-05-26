import {PostApi, UsersApi} from "../Api/Api";
import {setLoading} from "./AppReducer";

const SET_USERS = "SET_USERS"
const FILTER_USER = "FILTER_USER"
const POST_USER = "POST_USER"
type initialStateType = {
    Users: null | Array<any>
}

let initialState: initialStateType = {
    Users: null
}


let UsersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                Users: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}


export const getUsersThunk = () => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await UsersApi.getUsers()
        dispatch(setUsers(data))
        dispatch(setLoading(false))
    }
}
export const postUserThunk = () => {
    return async (dispatch: any) => {

    }
}
export const delUserThunk = (id: any) => {
    return async (dispatch: any) => {

    }
}

export const checkServerThunk = () => {
    return async (dispatch: any) => {
        let data = await PostApi.getPost()
        console.log(data)
    }
}


const setUsers = (Users: any) => ({type: SET_USERS, payload: Users})

export const postUser = (User: any) => ({type: POST_USER, payload: User})

export default UsersReducer