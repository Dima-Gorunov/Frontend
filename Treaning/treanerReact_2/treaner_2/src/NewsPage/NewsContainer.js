import {connect} from "react-redux";
import News from "./News";
import {changeInput} from "../Reducers/NewsPageReducer";

import {Navigate} from 'react-router-dom'
import {authMeThunk} from "../Reducers/AuthReducer";
import {useEffect} from "react";
import WithAuthRedirect from "../Hoc/WithAuthRedirect";

let NewsContainer = (props) => {
    useEffect(() => {

    }, [])
    return <News {...props} />
}

let mapStateToProps = (state) => {
    return {
        InputText: state.NewsPage.InputText,
        News: state.NewsPage.News,
        isAuth: state.AuthData.isAuth
    }
}


export default connect(mapStateToProps, {
    changeInput, authMeThunk
})(WithAuthRedirect(NewsContainer));
