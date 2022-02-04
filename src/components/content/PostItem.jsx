import React from 'react';

const PostItem = (props) => {
    return (
        <div className="list">
            <p>{props.post.name}</p>
        </div>
    );
};

export default PostItem;