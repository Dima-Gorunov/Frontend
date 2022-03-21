import React from 'react';
import DefaultPhoto from "../Img/UserDefaultPhoto.png"
import {NavLink} from "react-router-dom";
import PagesContainer from "./Pages/PagesContainer";


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
                                props.unfollowThunk(e.id)
                            }}>unfolow</button> :
                            <button disabled={props.followingInProgress.some(el => el === e.id)} onClick={() => {
                                props.followThunk(e.id)
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