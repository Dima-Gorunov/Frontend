import React, {useState} from 'react';
import {PostType} from "../Reducers/PostsReducer";
import CustomButton from "../CustomElements/CustomButton";

const PostsPage = ({OnePost}: any) => {

    let [uploadComments, setUploadCom] = useState(false)

    return (
        <div className="post-container">
            <div className="title-text">
                {OnePost.title}
            </div>
            <div className="sub-title-text">
                {OnePost.body}
            </div>
            <CustomButton onClick={() => setUploadCom(!uploadComments)}>
                Показать комментарии
            </CustomButton>
            {uploadComments && <div>в разработке</div>}
        </div>
    );
};

export default PostsPage;