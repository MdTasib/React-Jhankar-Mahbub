import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const { postId } = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
            .then(response => response.json())
            .then(data => setComment(data))
    }, [])

    const { id, name, email, body } = comment;
    return (
        <div>
            <h3>Id: {id} -- Name: {name}</h3>
            <h5>Email : {email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comment;