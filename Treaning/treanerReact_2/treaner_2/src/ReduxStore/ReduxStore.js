import {applyMiddleware, combineReducers, createStore} from "redux";
import HomePageReducer from "../Reducers/HomePageReducer";
import UsersReducer from "../Reducers/UsersReducer";
import NewsPageReducer from "../Reducers/NewsPageReducer";
import ProfileReducer from "../Reducers/ProfileReducer";
import AuthReducer from "../Reducers/AuthReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    HomePage: HomePageReducer,
    UsersPage: UsersReducer,
    NewsPage: NewsPageReducer,
    ProfilePage: ProfileReducer,
    AuthData: AuthReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;