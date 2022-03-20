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

export const setUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}})


export default AuthReducer