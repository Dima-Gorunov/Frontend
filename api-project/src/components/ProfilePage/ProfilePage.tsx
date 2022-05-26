import React from 'react';
import {PostType} from "../../Reducers/ProfileReducer";
import CustomLink from "../../CustomElements/CustomLink";

const ProfilePage = ({Profile, Posts}: any) => {
    return (
        <div className="profile-page-container">
            <div className="info-container">
                <div className="title-text">
                    {`${Profile.name}`}
                </div>
                <div className="contacts-container">
                    <div>{Profile.address.city}</div>
                    <div>{Profile.email}</div>
                    <div>{Profile.phone}</div>
                    <div>{Profile.website}</div>
                    <div>Компания: {Profile.company.name}</div>
                </div>
                <div className="card-container">
                    {Posts.slice(0, 3).map((e: PostType, index: any) => (
                        <div className="card">
                            <div className="title-text">{e.title}</div>
                            <div>{e.body}</div>
                            <CustomLink to="comments">подробнее</CustomLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProfilePage;