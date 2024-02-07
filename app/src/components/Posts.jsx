import React from 'react'
import { useState, useEffect } from 'react';
import api from '../utils/api';

const Posts = () => {
    const [post, setPost] = useState('');
    useEffect(() => {
        // Make a request using the Axios instance
        api.get('/blog/api/v1/post/')
            .then(response => {
                // Handle the response
                setPost(response.data);
                console.log(response.data)
                console.log(post.title)
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    }, []);


    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )
}

export default Posts