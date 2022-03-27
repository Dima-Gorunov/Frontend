import './App.css';
import React, {useEffect} from "react";
import {Route, Routes, useParams} from 'react-router-dom'
import HomePage from "./Homepage/HomePage";
import NewsContainer from "./NewsPage/NewsContainer";
import UsersContainer from "./UsersPage/UsersContainer";
import ProfileContainer from "./ProfilePage/ProfileContainer";
import MyProfileContainer from "./ProfilePage/MyProfileContainer";
import Login from "./Common/Login";
import HomePageContainer from "./Homepage/HomePageContainer";
import {connect} from "react-redux";
import {getUserData} from "./Reducers/AuthReducer";
import {compose} from "redux";
import {initializedThunk} from "./Reducers/AppReducer";
import Preloader from "./Common/Preloader";

const App = (props) => {

    useEffect(() => {
        props.initializedThunk();
    }, [])

    if (!props.initialized){
        return <Preloader/>
    }
    return (
        <div>
            <Routes>
                <Route path="/*" element={<HomePageContainer/>}>
                    <Route index element={<NewsContainer/>}/>
                    <Route path="news/*" element={<NewsContainer/>}/>
                    <Route path="users/*" element={<UsersContainer/>}/>
                    <Route path="profile" element={<MyProfileContainer/>}/>
                    <Route path="profile/:UserId" element={<ProfileContainer/>}/>
                    <Route path="login/*" element={<Login/>}/>
                </Route>
            </Routes>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        initialized: state.App.initialized
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserData,
        initializedThunk
    })
)(App);
