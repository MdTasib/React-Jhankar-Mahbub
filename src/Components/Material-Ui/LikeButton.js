import React, { useState, useEffect } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Typography } from '@material-ui/core';

const LikeButton = () => {
    const [like, setLike] = useState('');
    const [users, setUsers] = useState([]);
    const [randomUser, setRandomUser] = useState({});

    const handleLike = () => {
        const color = like ? '' : 'primary';
        setLike(color);
    }

    useEffect(() => {
        // json placeholder user
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))

        // random user
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => setRandomUser(data.results[0]))
    }, [])

    return (
        <div>
            <ThumbUpAltIcon onClick={handleLike} color={like} />
            <h3>Random User Email : {randomUser.email}</h3>
            <h3>Random User Name : {randomUser.name?.first}</h3>
            <h3>Random User Name : {randomUser.name && randomUser.name.last}</h3>
            {
                users.map((user, index) => <Typography variant="h6" key={index}>{user.name}</Typography >)
            }

        </div>
    );
};

export default LikeButton;