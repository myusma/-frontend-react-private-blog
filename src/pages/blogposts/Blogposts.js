import React from 'react';
import posts from "../../data/posts.json";
import {Link} from "react-router-dom";
import './Blogposts.css';

const Blogposts = () => {

    console.log(posts);

    return (

            <div className='overzicht'>
                <h1>Blog overzichtpagina</h1>
                <h2>Aantal blogposts: {posts.length}</h2>

                <ol className='post'>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link to={'/blogposts/' + post.id}>{post.title}</Link>
                            </li>
                        )

                    })}

                </ol>
            </div>

    );
}

export default Blogposts;