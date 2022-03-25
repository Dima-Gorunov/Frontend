import React from 'react';
import {useParams} from "react-router-dom";
import DefaultPhoto from "../Img/UserDefaultPhoto.png";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={props.Profile.photos.small ? props.Profile.photos.small : DefaultPhoto}
                     style={{width: "80px"}} alt=""/>
            </div>
            <div>
                {props.Profile.fullName}
            </div>
            <div>
                status: {props.status}
            </div>
        </div>
    );
};

export default ProfileInfo;