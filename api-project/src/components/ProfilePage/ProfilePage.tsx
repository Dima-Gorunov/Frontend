import React from 'react';
import {PostType} from "../../Reducers/ProfileReducer";

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
                <div>
                    Посты:
                    {Posts.map((e:PostType,index:any)=>(
                        <div>
                            {e.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProfilePage;