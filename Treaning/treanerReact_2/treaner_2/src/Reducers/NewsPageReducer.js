const INPUT_CHANGE = "INPUT_CHANGE";


const initialState = {
    InputText: "",
    News: [
        {
            name: "Name",
            post: "text"
        },
        {
            name: "Name",
            post: "text"
        },
        {
            name: "Name",
            post: "text"
        },
    ]

}


let NewsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case INPUT_CHANGE: {
            return {
                ...state,
                InputText: action.text
            }
        }

        default: {
            return {
                ...state
            }
        }

    }

}


export const changeInput = (text) => ({type: INPUT_CHANGE, text: text})

export default NewsPageReducer;