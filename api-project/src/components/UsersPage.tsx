import React, {useEffect} from 'react';
import {compose} from "redux";
import CustomLink from "../CustomElements/CustomLink";


const UsersPage = ({Users, delUserThunk, checkServerThunk}: any) => {

    useEffect(() => {
        document.addEventListener('wheel', scrollHandler)
        return document.addEventListener('wheel', scrollHandler)
    }, [])

    let scrollHandler = () => console.log("wheel")

    return (
        <div className="users-page-container">
            <div className="title-text">
                Список пользователей
            </div>
            <div className="card-container">
                {Users.map((e: any, index: any) => (
                    <div key={`user_${index}`} className="card">
                        <div className="title-text">{e.name}</div>
                        <div className="sub-title-text">{e.address.city}</div>
                        <CustomLink to={`user/${e.id}`}>Смотреть профиль</CustomLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default compose()(UsersPage);