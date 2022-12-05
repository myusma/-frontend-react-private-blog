import React from 'react';
import posts from "../../data/posts.json";
import {useParams} from "react-router-dom";
import './BlogId.css'

const BlogId = () => {

    const {id} = useParams()

    const found = posts.find((obj) => {
        return obj.id === id;
    });


    return (
        <>
            <div className='link-id'>

                    <p>{found.id}</p>
                    <h1>{found.title}</h1>
                    <p>{found.content}</p>
                    <p>{found.date}</p>

            </div>
        </>
    );
};

export default BlogId;