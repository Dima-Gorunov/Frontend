import React, {useMemo, useState} from 'react';
import DefaultPhoto from "../Img/UserDefaultPhoto.png"
import {NavLink} from "react-router-dom";
import PagesContainer from "./Pages/PagesContainer";


const Users = ({setPageSizeThunk, Users, followingInProgress, followUnFollowThunk}) => {
    console.log('render')
    const [pagqeSize, setPageSize] = useState(0)
    return (
        <div>
            <div>
                <input type="text" value={pageSize} onChange={(e) => {
                    setPageSize(e.currentTarget.value)
                }}/>
                <button onClick={() => setPageSizeThunk(pageSize)}>filter</button>
            </div>
            <div>
                {Users.map((e, index) => (
                    <div key={`User${index}`}>
                        <NavLink to={`/profile/${e.id}`}>
                            <img src={e.photos.small ? e.photos.small : DefaultPhoto}
                                 style={{width: "80px"}} alt=""/>
                        </NavLink>
                        <div>{e.name} id:{e.id}</div>
                        {e.followed ?
                            <button disabled={followingInProgress.some(el => el === e.id)} onClick={() => {
                                followUnFollowThunk(e)
                            }}>unfolow</button> :
                            <button disabled={followingInProgress.some(el => el === e.id)} onClick={() => {
                                followUnFollowThunk(e)
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