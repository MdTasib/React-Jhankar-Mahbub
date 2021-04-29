import React, { useState, useEffect } from 'react';
import Post from '../Posts/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h2>This Is Home</h2>
            <h3>Posts Length : {posts.length}</h3>
            {
                posts.map((post, index) => <Post key={index} post={post} />)
            }
        </div>
    );
};

export default Home;