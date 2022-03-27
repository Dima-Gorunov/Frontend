import {getUserData} from "./AuthReducer";

const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
    initialized: false
}


const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export const initializedThunk = () => {
    return (dispatch) => {
        Promise.all([dispatch(getUserData())])
            .then(response => {
                console.log("getUserData compleate")
                dispatch(initializedSuccess())
            })
    }
}


export const initializedSuccess = () => ({type: SET_INITIALIZED})


export default AppReducer