import React from 'react';
import {useParams} from "react-router-dom";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                тут посты пользователя
            </div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <button>добавить</button>
            </div>
        </div>
    );
};

export default MyPosts;