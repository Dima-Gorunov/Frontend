import React from 'react';
import {Link} from "react-router-dom";

const CustomButton = (props: any) => {

    return (
        <div className="menu__custom-link-container" style={{margin: "auto 0"}}>
            <button {...props} className="custom-link">{props.children}</button>
        </div>
    );
};

export default CustomButton;