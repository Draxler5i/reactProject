import React from 'react';
import { Link } from 'react-router-dom';

const CommentsPost = ({comments, findPost}) => {
    console.log(findPost);
    return (
        <div>
            <h1>Comentarios del Post</h1>

            <ul>
            {comments.map((comment) => (
                    <li key={comment.id}>
                        <Link to={`/${comment.id}`}>{comment.email}</Link>
                        <br/>
                        {comment.body}
                    </li>    
            ))}
            </ul>
        </div>
    );

}

export default CommentsPost;