import React from 'react';
import { Link } from 'react-router-dom';

const PostBody = ({findPost}) => {
    //console.log(findPost);

    if (!findPost) {
        return <div> El Post no fue encontrado</div>
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