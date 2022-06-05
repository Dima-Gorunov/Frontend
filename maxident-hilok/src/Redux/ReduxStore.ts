import {applyMiddleware, combineReducers, createStore} from "redux";
import AppReducer from "../Reducers/AppReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const reducers = combineReducers({
    App: AppReducer
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(reducers, composedEnhancer)

export default store