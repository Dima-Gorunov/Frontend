import React from 'react';
import {useParams} from "react-router-dom";

const Test = () => {
    console.log(useParams());
    return (
        <div>
          привет
        </div>
    );
};

export default Test;