import {authApi, usersApi} from "../Api/Api";

const SET_USER_DATA = "SET_USER_DATA"
const SET_AUTH_DATA = "SET_AUTH_DATA"

let initialstate = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}


const AuthReducer = (state = initialstate, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_AUTH_DATA: {
            return {
                ...state,
                isAuth: action.isAuth
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


export const authMeThunk = () => {
    return (dispatch) => {
        authApi.authMe()
            .then(response => response.data)
            .then(data => {
                    if (data.resultCode === 0) {
                        let {email, id, login} = data.data
                        dispatch(setUserData(email, id, login))
                        dispatch(setAuthData(true))
                    } else if (data.resultCode !== 0) {
                        dispatch(setAuthData(false))
                    }//    Some dispatch(action(element))
                }
            )
    }
}
export const setUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}})
export const setAuthData = (isAuth) => ({type: SET_AUTH_DATA, isAuth})

export default AuthReducer