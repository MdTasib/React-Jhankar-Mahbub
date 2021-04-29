import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;

    const history = useHistory();
    const handleClick = (postId) => {
        history.push(`/post/${postId}`);
    }

    return (
        <div>
            <h2>Id: {id} -- Title: {title}</h2>
            <p>{body}</p>
            <button onClick={() => handleClick(id)}>Show Comment</button>
        </div>
    );
};

export default Post;