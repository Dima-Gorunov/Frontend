import React from 'react';
import {compose} from "redux";
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <div>
                Страница не найдена
            </div>
            <Link to="/">
                вернуться
            </Link>
        </div>
    );
};

export default PageNotFound;