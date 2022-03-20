import React from 'react';
import style from "./Page.module.css";
import DefaultPhoto from "../Img/UserDefaultPhoto.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import PagesContainer from "./Pages/PagesContainer";
import {usersApi} from "../Api/Api";
import {follow, unfollow} from "../Reducers/UsersReducer";

const Users = (props) => {

    return (
        <div>
            <div>
                {props.Users.map((e, index) => (
                    <div key={`User${index}`}>
                        <NavLink to={`/profile/${e.id}`}>
                            <img src={e.photos.small ? e.photos.small : DefaultPhoto}
                                 style={{width: "80px"}} alt=""/>
                        </NavLink>
                        <div>{e.name} id:{e.id}</div>
                        {e.followed ?
                            <button disabled={props.followingInProgress.some(el => el === e.id)} onClick={() => {
                                props.unfollow(e.id)
                            }}>unfolow</button> :
                            <button disabled={props.followingInProgress.some(el => el === e.id)} onClick={() => {
                                props.follow(e.id)
                            }}>follow</button>}
                    </div>
                ))}
            </div>
            <div>
                <PagesContainer/>
            </div>
        </div>
    );
};

export default Users;