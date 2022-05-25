import React from 'react';

const Posts = ({Posts}: any) => {
    return (
        <div>
            {Posts.map((e: any, index: any) => (
                <div className="post-container" key={`post_${index}`}>
                    {e.title}
                </div>
            ))}
        </div>
    );
};

export default Posts;