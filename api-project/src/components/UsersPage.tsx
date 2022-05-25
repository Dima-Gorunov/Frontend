import React, {useEffect} from 'react';
import {compose} from "redux";
import CustomLink from "../CustomElements/CustomLink";
import {checkServerThunk} from "../Reducers/UsersReducer";
import {PostApi} from "../Api/Api";

const UsersPage = ({Users, postUserThunk, delUserThunk, checkServerThunk}: any) => {
    let id = 14;
    let delId = 0;
    let pushUser = () => {

    }
    let delUser = () => {
        delId += 1
        delUserThunk(delId)
    }
    let check = () => {
        checkServerThunk()
    }
    return (

        <div className="users-page-container">
            <div className="title-text">
                Список пользователей
            </div>
            <button onClick={() => pushUser()}>добавить</button>
            <button onClick={() => delUser()}>удалить</button>
            <button onClick={() => check()}>обновить</button>
            <div className="users-container">
                {Users.map((e: any, index: any) => (
                    <div key={`user_${index}`} className="user_card-container">
                        <div>{e.name}</div>
                        <div>город</div>
                        <CustomLink to={`user/${e.id}`}>Смотреть профиль</CustomLink>
                    </div>
                ))
                }
            </div>
            <div>
                {Users.map((e: any, index: any) => (
                    <div key={`user_${index}`}>
                        {e.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default compose()(UsersPage);