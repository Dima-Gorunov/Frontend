import {authApi, usersApi} from "../Api/Api";

const SET_USER_DATA = "SET_USER_DATA"

let initialstate = {
    email: null,
    id: null,
    login: null,
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


export const authMeThunk = () => {
    return (dispatch) => {
        authApi.authMe()
            .then(response => {
                let {email, id, login} = response.data.data
                dispatch(setUserData(email, id, login))
                //    Some dispatch(action(element))
            })
    }
}


export const setUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}})


export default AuthReducer