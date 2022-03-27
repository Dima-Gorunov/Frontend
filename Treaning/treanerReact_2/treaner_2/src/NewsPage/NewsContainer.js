import {connect} from "react-redux";
import News from "./News";
import {changeInput} from "../Reducers/NewsPageReducer";

import {Navigate} from 'react-router-dom'
import {getUserData} from "../Reducers/AuthReducer";
import {useEffect} from "react";
import WithAuthRedirect from "../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {getAuth} from "../Selector's/AuthSelector";

let NewsContainer = (props) => {
    useEffect(() => {

    }, [])
    return <News {...props} />
}

let mapStateToProps = (state) => {
    return {
        InputText: state.NewsPage.InputText,
        News: state.NewsPage.News,
        isAuth: getAuth(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        changeInput, getUserData
    }),
    WithAuthRedirect)(NewsContainer);
