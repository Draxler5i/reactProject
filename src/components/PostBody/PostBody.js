import React from 'react';
import { Link } from 'react-router-dom';
import './PostBody.css';

const PostBody = ({findPost}) => {

    if (JSON.stringify(findPost) === '{}') {
        return <h2>----Post----</h2>
    }
    return (
        <div>
            <h1>{findPost.title}</h1>
            <p>
                {findPost.body}
            </p>
            <div className="Author">
                <Link to={`/${findPost.userId}`}>Author</Link>
            </div>
        </div>
    );
};

export default PostBody;