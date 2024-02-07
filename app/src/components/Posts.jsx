import React from 'react'
import { useState, useEffect } from 'react';
import api from '../utils/api';

const Posts = () => {
    const [posts, setPosts] = useState("");
    useEffect(() => {
        // Make a request using the Axios instance
        api.get('/blog/api/v1/post/')
            .then(response => {
                // Handle the response
                setPosts(response.data.results);
                console.log(response)
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    },
        []);
    return (
        <div>

            {posts && posts.map(function (post) {
                return (
                    <div key={post.id}>
                        <p>Applicant title: {post.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts