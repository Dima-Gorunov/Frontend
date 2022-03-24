import React from 'react';
import {Navigate} from 'react-router-dom'
import {connect} from "react-redux";

const WithAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        return props.isAuth ? <Component {...props} /> : <Navigate to="/login"/>
    }

    let mapStateToPropsForRedirect = (state) => ({isAuth: state.AuthData.isAuth}) // создаём в хоке mapState потому..
    //                                                                   //..что ему нужны данные об авторизации..
    //                                                                   //..и потому что props в HOK не передать,..
    //                                                                  //..только если снаружи обарачивать в connect()()
    //                                                               //..но этим мы засорим другую контейнерную компоненту


    return connect(mapStateToPropsForRedirect)(RedirectComponent); // возвращаем нужный компонент-
                                                                   // -RedirectComponent с входными PROPSами
}

export default WithAuthRedirect;