import React, { useState, useEffect } from 'react';

const User = () => {

    // all users
    const [users, setUsers] = useState([]);

    // singleUser
    const [singleUser, setSingleUser] = useState({});

    // random user
    const [randomUser, setRandomUser] = useState({});

    useEffect(() => {
        // all users

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))

        // singleUser

        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => setSingleUser(data))

        // random user
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => setRandomUser(data.results[0]))
    }, [])


    return (
        <div>
            {/* singleUser */}
            <h3>{singleUser.name}</h3>

            {/* all users */}
            {
                users.map(user => <li>{user.name}</li>)
            }

            {/* randomUser */}
            <h4>Email : {randomUser.email}</h4>

            {/* (1) */}
            <h4>Title : {randomUser.name && randomUser.name.title}</h4>

            {/* (2) */}
            {/* <h4>Name : {randomUser.name?.title}</h4> */}
        </div>
    );
};

export default User;