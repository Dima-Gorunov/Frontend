import './App.css';
import React from "react";
import {Route, Routes, useParams} from 'react-router-dom'
import HomePage from "./Homepage/HomePage";
import NewsContainer from "./NewsPage/NewsContainer";
import UsersContainer from "./UsersPage/UsersContainer";
import ProfileContainer from "./ProfilePage/ProfileContainer";
import MyProfileContainer from "./ProfilePage/MyProfileContainer";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<HomePage/>}>
                    <Route index element={<NewsContainer/>}/>
                    <Route path="news/*" element={<NewsContainer/>}/>
                    <Route path="users/*" element={<UsersContainer/>}/>
                    <Route path="profile" element={<MyProfileContainer/>}/>
                    <Route path="profile/:UserId" element={<ProfileContainer/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
