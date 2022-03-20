import React from 'react';
import {Link} from "react-router-dom";

const MyCustomLink = (props) => {
    return (
        <Link to={props.to} {...props}>
            {props.children}
        </Link>
    );
};

export default MyCustomLink;