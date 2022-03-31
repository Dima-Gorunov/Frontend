import {authApi, usersApi} from "../Api/Api";
import {useDebugValue} from "react";

const SET_USER_DATA = "SET_USER_DATA"
const SET_AUTH_DATA = "SET_AUTH_DATA"

let initialstate = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}


const AuthReducer = (state = initialstate, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}


//   EXAMPLE
// export const testThunk=(value)=>{
//
//     return (dispatch)=>{
//         someAPI.get_setSome()
//             .then(response=>{
//                 dispatch(set_getSome(value));
//             })
//     }
//
// }


export const getUserData = () => {
    return (dispatch) => {
        return authApi.authMe()
            .then(response => response.data)
            .then(data => {
                    if (data.resultCode === 0) {
                        let {email, id, login} = data.data
                        dispatch(setUserData(email, id, login, true))
                    } else if (data.resultCode !== 0) {
                        dispatch(setUserData(null, null, null, false))

                    }//    Some dispatch(action(element))
                }
            )
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(response => {
                debugger
                if (response.resultCode === 0) {
                    debugger
                    dispatch(getUserData())
                }
            })
    }
}

export const logOutThunk = () => {
    return (dispatch) => {
        authApi.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}


export const setUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, data: {email, id, login, isAuth}})
export const setAuthData = (isAuth) => ({type: SET_AUTH_DATA, isAuth})

export default AuthReducer