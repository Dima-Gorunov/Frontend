let initialState = {
    initialized: false
}


const AppReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case "": {
            return {
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default AppReducer