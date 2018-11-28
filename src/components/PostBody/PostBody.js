import React from 'react';
import { Link } from 'react-router-dom';

const PostBody = ({findPost}) => {

    if (JSON.stringify(findPost) === '{}') {
        return <h2>----Post----</h2>
    }
    return (
        <div>
            <h1>
                {JSON.stringify(findPost)}
            </h1>
            <div>
                <Link to={`/${findPost.userId}`}>Author</Link>
            </div>
        </div>
    );
};

export default PostBody;