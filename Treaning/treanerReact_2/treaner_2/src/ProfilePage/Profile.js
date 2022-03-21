import React from 'react';
import Preloader from "../Common/Preloader";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";
import {useParams} from "react-router-dom";

const Profile = (props) => {
    if (!props.Profile || props.isFetching) {
        return <Preloader/>
    }
    return (
        <>
            <ProfileInfo Profile={props.Profile}/>
            <MyPosts/>
        </>
    );
};

export default Profile;