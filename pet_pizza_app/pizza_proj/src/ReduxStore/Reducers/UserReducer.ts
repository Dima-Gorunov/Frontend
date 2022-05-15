import exp from "constants";

const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

export interface UsersState {
    Users: any[],
    loading: boolean,
    error: null | string
}

type FetchUserAction = {
    type: typeof FETCH_USERS
}

type FetchUserSuccessAction = {
    type: typeof FETCH_USERS_SUCCESS,
    payload: any[]
}

type FetchUserErrorAction = {
    type: typeof FETCH_USERS_ERROR,
    payload: string
}

type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction

const initialState: UsersState = {
    Users: ["www", "qweqws", "kkgg"],
    loading: false,
    error: null
}


const UserReducer = (state = initialState, action: UserAction): UsersState => {
    switch (action.type) {
        case FETCH_USERS: {
            return {...state, loading: true}
        }
        case FETCH_USERS_SUCCESS: {
            return {...state, loading: false, Users: action.payload}
        }
        case FETCH_USERS_ERROR: {
            return {...state, error: action.payload}
        }


        default: {
            return state
        }

    }
}

export default UserReducer