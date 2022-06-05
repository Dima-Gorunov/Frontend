import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const reducers = combineReducers({})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)


const store = createStore(reducers, composedEnhancer)

export default store