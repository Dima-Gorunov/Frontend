import React from 'react';
import {PostType} from "../Reducers/ProfileReducer";

const Preloader = () => {
    return (
        <div className="profile-page-container">
            <div className="info-container">
                <div className="title-text">
                    loading...
                </div>
                <div className="contacts-container">
                    <div>loading...</div>
                    <div>loading...</div>
                    <div>loading...</div>
                    <div>loading...</div>
                    <div>loading...</div>
                </div>
                <div>
                    Посты:
                    <div>
                        loading...
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Preloader;