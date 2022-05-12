import exp from "constants";

enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface UsersState {
    Users: any[],
    loading: boolean,
    error: null | string
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
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
        case UserActionTypes.FETCH_USERS: {
            return {...state, loading: true}
        }
        case UserActionTypes.FETCH_USERS_SUCCESS: {
            return {...state, loading: false, Users: action.payload}
        }
        case UserActionTypes.FETCH_USERS_ERROR: {
            return {...state, error: action.payload}
        }

        default: {
            return state
        }

    }
}

export default UserReducer