const PUSH_MENU_ELEMENT = "PUSH_MENU_ELEMENT";
const CHANGE_INPUT = "CHANGE_INPUT";


let initialState = {
    InputText: "",

    Menu: [
        {

            name: "Profile",
            link: "/profile"

        },
        {
            name: "News",
            link: "/news"
        },
        {
            name: "Users",
            link: "/users"
        },

    ]


}


const HomePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_INPUT: {
            return {
                ...state,
                InputText: action.text
            }
        }

        case PUSH_MENU_ELEMENT: {
            return {
                ...state,
                Menu: [...state.Menu, {name: state.InputText, link: `/${state.InputText.toLowerCase()}`}]
            }

        }

        default:
            return {
                ...state
            }

    }
}

export default HomePageReducer;

export const changeInput = (text) => ({type: CHANGE_INPUT, text: text})
export const addMenuElement = () => ({type: PUSH_MENU_ELEMENT})